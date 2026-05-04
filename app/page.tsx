"use client";
import { Hero } from "@/components/Hero";
import { Markets } from "@/components/Markets";
import { Rewards } from "@/components/Rewards";
import { Awards } from "@/components/Awards";
import { Trust } from "@/components/Trust";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f3f4f6]">
      <Hero />
      <Markets />
      <Rewards />
      <Awards />
      <Trust />
      <Community />
      <Footer />
    </main>
  );
}





