import { ElevenLabsClient } from "elevenlabs";
import { action } from "./_generated/server";
import { v } from "convex/values";

type VoiceType = {
  [key: string]: string;
};

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY,
});

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.string() },

  handler: async (_, args) => {
    const voiceMapping: VoiceType = {
      Aria: "9BWtsMINqrJLrRacOk9x",
      Roger: "CwhRBWXzGAHq8TQ4Fs17",
      Sarah: "EXAVITQu4vr4xnSDxMaL",
      Laura: "FGY2WhTYpPnrIDTdsKH5",
      Charlie: "IKne3meq5aSn9XLyUdCD",
      George: "JBFqnCBsd6RMkjVDRZzb",
    };

    const voiceId = voiceMapping[args.voice];

    if (!voiceId) {
      throw new Error(`Invalid voice: ${args.voice}`);
    }

    try {
      const audioStream = await client.generate({
        text: args.input,
        voice: voiceId,
        model_id: "eleven_monolingual_v1",
      });

      const chunks = [];
      for await (const chunk of audioStream) {
        chunks.push(chunk);
      }

      return new Blob(chunks).arrayBuffer();
    } catch (error) {
      console.error("Error generating audio:", error);
      throw new Error("Failed to generate audio");
    }
  },
});
