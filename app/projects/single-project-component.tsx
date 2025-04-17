import Image from "next/image";
import Link from "next/link";

export const SingleProject = ({
  title,
  description,
  imgUrl,
  techStack,
  websiteLink,
  githubLink,
}: {
  title: string;
  description: string;
  imgUrl: string;
  techStack: string[];
  websiteLink: string;
  githubLink: string;
}) => {
  return (
    <section className="w-full px-4 py-10 md:py-16 animate-fade-in">
      <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 p-8 md:p-12 shadow-xl border border-zinc-700">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-zinc-400 to-white text-transparent bg-clip-text mb-10">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left - Text Section */}
          <div className="md:w-1/2 flex flex-col justify-between gap-6">
            <p className="text-zinc-300 text-lg leading-relaxed">{description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-4">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="bg-zinc-700/50 border border-zinc-600 text-zinc-200 px-3 py-1 rounded-full text-sm hover:bg-zinc-600 transition"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              {websiteLink && <Link target="_blank"
                href={websiteLink}
                className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Live Site
              </Link>}
              <Link
                href={githubLink} target="_blank"
                className="px-5 py-2 rounded-full bg-zinc-700 text-white hover:bg-zinc-800 transition"
              >
                Source Code
              </Link>
            </div>
          </div>

          {/* Right - Image Section */}
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-xl border border-zinc-700">
              <Image
                src={imgUrl}
                alt={title}
                width={800}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
