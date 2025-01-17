# JSM Podcastr

Welcome to **JSM Podcastr**, an AI-powered platform that enables users to create, discover, and enjoy podcasts with advanced features like text-to-audio conversion, multi-voice AI, podcast thumbnail image generation, and seamless playback.

Explore the live application here: [JSM Podcastr](https://jsm-podcastr-rose.vercel.app/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Robust Authentication**: Secure and reliable user login and registration system.
- **Modern Home Page**: Showcases trending podcasts with a sticky podcast player for continuous listening.
- **Discover Podcasts Page**: Dedicated page for users to explore new and popular podcasts.
- **Fully Functional Search**: Allows users to find podcasts easily using various search criteria.
- **Create Podcast Page**: Enables podcast creation with text-to-audio conversion, AI image generation, and previews.
- **Multi-Voice AI Functionality**: Supports multiple AI-generated voices for dynamic podcast creation.
- **Profile Page**: View all created podcasts with options to delete them.
- **Podcast Details Page**: Displays detailed information about each podcast, including creator details, number of listeners, and transcript.
- **Podcast Player**: Features backward/forward controls, as well as mute/unmute functionality for a seamless listening experience.
- **Responsive Design**: Fully functional and visually appealing across all devices and screen sizes.

## Tech Stack

- **Next.js**: React framework for server-side rendering and generating static websites.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Convex**: Backend as a service for real-time data synchronization.
- **OpenAI**: AI models for text and image generation.
- **Clerk**: Authentication and user management.
- **ShadCN**: UI components for building accessible and customizable interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/0yorqin/jsm_podcastr.git
   cd jsm_podcastr
   ```

2. **Install Dependencies**:

   ```bash
   npm install // use --legacy-peer-deps or --force to awoid peer dependency issues
   ```

3. **Set Up Environment Variables**:

   Create a .env file in the root directory and add the following:

   ```env
    CONVEX_DEPLOYMENT=
    NEXT_PUBLIC_CONVEX_URL=
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL='/sign-in'
    NEXT_PUBLIC_CLERK_SIGN_UP_URL='/sign-up'
   ```

   Replace the placeholder values with your actual Convex and Clerk credentials. You can obtain these credentials by signing up on the [Convex](https://www.convex.dev/) and [Clerk](https://clerk.com/) websites.

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000 in your browser to view the project.
