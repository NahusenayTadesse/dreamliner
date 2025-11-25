// app/about/page.tsx (New Server Component – replaces the old page.tsx)
import type { Metadata } from "next";
import Oak from "./oak"; // Import your unchanged Client Component

export const metadata: Metadata = {
  title: "Oak Restaurant - Fine Dining Experience",
  description: "Fine Dining Experience", // Your custom title here (overrides layout defaults)
};

export default function AboutPage() {
  return <Oak />; // Just renders your existing code
}
