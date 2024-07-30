import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB through various projects. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "Meet-Fusion",
    image: project1,
    description:
      "A fully functional video chatting website like zoom with features like create/join meeting ,schedule meeting,record a meeting ,list of all upcoming / previous meetings and user authentication.",
    technologies: ["Nextjs", "Stream.io", "Clerk", "Tailwind"],
    github:'https://github.com/vaibhav1mahajan/Meet-Fusion',
    live:'https://meet-fusion.vercel.app/'
  },
  {
    title: "ChessaMasteryHub",
    image: project2,
    description:
      "A dynamic chess website with real-time game state updates and an  moves table on our platform. Play and improve your strategy seamlessly.",
    technologies: ["React", "Express", "Websocket", "Tailwind","Chess.js"],
    github:'https://github.com/vaibhav1mahajan/ChessMasteryHub',
    live:'https://chess-mastery-hub.vercel.app/'
  },
  {
    title: "NewsHub",
    image: project3,
    description:
      "A news website where you can read news according to your interest, it has sections such as science, sports, general, entertainment, etc.",
    technologies: ["React", "CSS"],
    github:'https://github.com/vaibhav1mahajan/NewsHub'
  },
  
];

