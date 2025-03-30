

import React from "react";
import HomeClient from "./components/HomepageClient"; // Import the client-side component

async function getSkips() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in .env.local");
  }

  const res = await fetch(apiUrl, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch skips: ${res.statusText}`);
  }

  return res.json();
}

export default async function Home() {
  const skips = await getSkips();
  return (
    <div>
      <HomeClient skips={skips} />
    </div>
  );
}
