"use client";

import { useQuery } from "convex/react";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import ProfileCard from "@/components/ProfileCard";
import { api } from "@/convex/_generated/api";
import * as React from "react";

const ProfilePage = ({
  params,
}: {
  params: {
    profileId: string;
  };
}) => {
  // Correct usage of React.use for async params unwrapping
  const { profileId } = React.use(params);

  // Fetching user and podcast data
  const user = useQuery(api.users.getUserById, {
    clerkId: profileId,
  });
  const podcastsData = useQuery(api.podcasts.getPodcastByAuthorId, {
    authorId: profileId,
  });

  if (!user || !podcastsData) return <LoaderSpinner />;

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        Podcaster Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        <ProfileCard
          podcastData={podcastsData}
          imageUrl={user.imageUrl || "default-image-url"}
          userFirstName={user.name || "Unknown User"}
        />
      </div>
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcastsData.podcasts?.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData.podcasts.slice(0, 4).map((podcast) => (
              <PodcastCard
                key={podcast._id}
                imgUrl={podcast.imageUrl || ""}
                title={podcast.podcastTitle || ""}
                description={podcast.podcastDescription || ""}
                podcastId={podcast._id}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
          />
        )}
      </section>
    </section>
  );
};

export default ProfilePage;
