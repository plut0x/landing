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
    <main className="bg-[#06080C] min-h-screen">
      <Hero />
      <Markets />
      <div className="bg-[url('/bg-5.png')] bg-cover bg-center">
        <Rewards />
        {/* <Awards /> */}
        {/* <Trust /> */}
        {/* <Community /> */}
        <Footer />
      </div>
    </main>
  );
}





