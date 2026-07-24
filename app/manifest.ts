import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daeson Technologies",
    short_name: "Daeson",
    description:
      "Enterprise technology company building owned AI-powered operational infrastructure for real estate, Islamic finance, and enterprise organizations.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#FFFFFF",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
