// app/about/page.tsx (New Server Component – replaces the old page.tsx)
import type { Metadata } from "next";
import Zaika from "./zaika"; // Import your unchanged Client Component

export const metadata: Metadata = {
  title: `Zaika Room - Authentic Indian Cuisine`,
  description: "Traditional Indian dining experience with authentic flavors",
};

export default function AboutPage() {
  return <Zaika />; // Just renders your existing code
}
