"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SingleProject } from "./single-project-component";
import Link from "next/link";

const projects = [
  {
    title: "Meet-Fusion",
    description:
      "A fully functional video chatting website like Zoom with features like create/join meeting, schedule, recording, meeting history, and authentication.",
    imgUrl: "/meet.png",
    techStack: ["Nextjs", "Stream.io", "Tailwind", "Clerk"],
    websiteLink: "https://meet-fusion.vercel.app/",
    githubLink: "https://github.com/vaibhav1mahajan/Meet-Fusion",
  },
  {
    title: "Write-Hub",
    description:
      "WriteHub is a powerful, real-time collaborative document editor that allows teams and individuals to create, edit, and share documents effortlessly.",
    imgUrl: "/write_hub.png",
    techStack: ["Nextjs", "Tailwind", "Convex", "Liveblocks", "Clerk"],
    websiteLink: "https://write-hub-zeta.vercel.app/",
    githubLink: "https://github.com/vaibhav1mahajan/write-hub",
  },
  {
    title:'Online Chess Arena',
    description:'A modern multiplayer chess platform built for speed, style, and strategy.Play real-time chess with friends, track your moves, enjoy immersive sounds, and never lose progress again — all powered by cutting-edge tech.',
    imgUrl:'/chess.png',
    techStack:['Nextjs','Tailwind','express','redis','prisma','turborepo','postgresql','docker','websocket'],
    websiteLink:'',
    githubLink:'https://github.com/vaibhav1mahajan/Chess'
  },
  {
    title:'DevBlog',
    description:'The Developer Blog Platform is a full-stack web application designed for developers to share their experiences, insights, and tutorials about specific technologies. Whether it’s a personal learning journey, deep-dive into a framework, or a quick tip on debugging, this platform gives devs a place to voice their knowledge and connect with others.',
    imgUrl:'/devBlog.png',
    techStack:['React','Tailwind','Express','MongoDB','Mongoose','React Query','Clerk'],
    websiteLink:'',
    githubLink:'https://github.com/vaibhav1mahajan/DevBlog'
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black flex items-center justify-center px-4 py-12 overflow-hidden">
        <div className="absolute top-[50px] flex gap-4">
            <Link href='/' className="text-zinc-400 hover:text-zinc-100">Home</Link>
            <Link href='/contact' className="text-zinc-400 hover:text-zinc-100">Contact</Link>

        </div>
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-12 z-10 bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <div className="w-full max-w-6xl transition-opacity duration-700 ease-in-out opacity-100">
        {/* Fade effect using key on currentIndex */}
        <div key={currentIndex} className="transition duration-700 ease-in-out animate-fade-in">
          <SingleProject {...projects[currentIndex]} />
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-12 z-10 bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

export default Projects;
