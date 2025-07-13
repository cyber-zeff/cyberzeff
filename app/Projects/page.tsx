import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiHackerone, SiBugcrowd } from "react-icons/si";

// Type definitions
type ProjectLink = {
  type: "github" | "demo" | "report" | "hackerone" | "bugcrowd";
  url: string;
};

type ProjectCategory =
  | "Personal Project"
  | "Contract Work"
  | "Side Project"
  | "Startup";

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  links: ProjectLink[];
  tags: string[];
}

interface ProjectSection {
  cybersecurity: Project[];
  webdev_ai: Project[];
}

const ProjectsPage: React.FC = () => {
  // Project data with TypeScript types
  const projects: ProjectSection = {
    cybersecurity: [
      {
        id: 1,
        title: "Password Strength Meter",
        description:
          "A basic tool that rates password strength based on hacking difficulty.",
        category: "Personal Project",
        links: [
          {
            type: "github",
            url: "https://github.com/cyber-zeff/Python-Class-Projects/tree/main/2_Password_Strength_Meter",
          },
          {
            type: "demo",
            url: "https://hux-password-strength-meter.streamlit.app/",
          },
        ],
        tags: ["Python", "Streamlit", "Security"],
      },
      // {
      //   id: 2,
      //   title: "Enterprise Security Audit",
      //   description: "Comprehensive security assessment for Fortune 500 client",
      //   category: "Contract Work",
      //   links: [
      //     { type: "report", url: "https://example.com/report" }
      //   ],
      //   tags: ["Penetration Testing", "Compliance"]
      // },
      // {
      //   id: 3,
      //   title: "Bug Bounty Findings",
      //   description: "Collection of critical vulnerabilities discovered in bug bounty programs",
      //   category: "Side Project",
      //   links: [
      //     { type: "hackerone", url: "https://hackerone.com/yourprofile" },
      //     { type: "bugcrowd", url: "https://bugcrowd.com/yourprofile" }
      //   ],
      //   tags: ["XSS", "SQLi", "RCE"]
      // },
      // ... other cybersecurity projects
    ],
    webdev_ai: [
      {
        id: 4,
        title: "AURA AI",
        description:
          "An AI educator chatbot for Students of O'levels and A'levels (subj: Phy, Chem, Maths).",
        category: "Startup",
        links: [
          {
            type: "github",
            url: "https://github.com/cyber-zeff/AURA-AI-Chatbot",
          },
        ],
        tags: ["Python", "Uvicorn", "Gemini API", "Agentic AI"],
      },
      {
        id: 5,
        title: "Vehiclez",
        description:
          "A vehicles website made for a client as a business website.",
        category: "Contract Work",
        links: [
          {
            type: "github",
            url: "https://github.com/cyber-zeff/Vehicle-Website-Vehiclez-",
          },
        ],
        tags: ["PHP", "Bootstrap", "Ajax", "MySQL", "Swiper.js"],
      },
      {
        id: 6,
        title: "Highway Dash Game",
        description:
          "A game me and my team made as a semester end project (sem 2).",
        category: "Personal Project",
        links: [
          {
            type: "github",
            url: "https://github.com/cyber-zeff/Highway-Dash-Game",
          },
          {
            type: "report",
            url: "https://github.com/cyber-zeff/Highway-Dash-Game/blob/main/OOP%20Project%20Report%20-%20Highway%20Dash%20Game.pdf",
          },
        ],
        tags: ["C++", "SFML"],
      },
      {
        id: 7,
        title: "FastHub",
        description:
          "A Student Management Portal made as a semester end project (sem 1).",
        category: "Personal Project",
        links: [
          { type: "github", url: "https://github.com/cyber-zeff/FASTHUB" },
          {
            type: "report",
            url: "https://github.com/cyber-zeff/FASTHUB/blob/main/FastHub_Project_Report.pdf",
          },
        ],
        tags: ["C"],
      },
      {
        id: 8,
        title: "Blog Website",
        description:
          "This is a fully functioning blog website with comments feature.",
        category: "Side Project",
        links: [
          { type: "github", url: "https://github.com/cyber-zeff/Blog-Website" },
          { type: "demo", url: "https://hux-blog-website.vercel.app/" },
        ],
        tags: ["Next.js", "Tailwind CSS"],
      },
      {
        id: 9,
        title: "Ecommerce Website",
        description:
          "This is a dynamic ecommerce site with dynamic products and add to cart functionalities.",
        category: "Side Project",
        links: [
          {
            type: "github",
            url: "https://github.com/cyber-zeff/Ecommerce-Website",
          },
          { type: "demo", url: "https://hux-ecommerce-website.vercel.app/" },
        ],
        tags: ["Next.js", "Tailwind CSS"],
      },
      // ... other webdev+AI projects
    ],
  };

  // Dark theme category colors
  const categoryColors: Record<ProjectCategory, string> = {
    "Personal Project": "bg-blue-900 text-blue-200",
    "Contract Work": "bg-purple-900 text-purple-200",
    "Side Project": "bg-green-900 text-green-200",
    Startup: "bg-yellow-900 text-yellow-200",
  };

  const LinkIcon: React.FC<{ type: ProjectLink["type"] }> = ({ type }) => {
    switch (type) {
      case "github":
        return <FiGithub className="mr-1" />;
      case "hackerone":
        return <SiHackerone className="mr-1" />;
      case "bugcrowd":
        return <SiBugcrowd className="mr-1" />;
      default:
        return <FiExternalLink className="mr-1" />;
    }
  };

  const renderProjectSection = (section: Project[], title: string) => (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#76925a]">
          {title}
        </h2>
        <div className="ml-4 h-px flex-1 bg-[#76925a]/30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.map((project) => (
          <div
            key={project.id}
            className="rounded-lg overflow-hidden transition-shadow duration-300 border border-gray-800 hover:border-[#76925a]/50"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <span
                  className={`text-xs text-center px-2 py-1 rounded-full ${
                    categoryColors[project.category]
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-[#76925a] hover:text-[#9acd32] transition-colors"
                  >
                    <LinkIcon type={link.type} />
                    {link.type === "github"
                      ? "Code"
                      : link.type === "demo"
                      ? "Demo"
                      : link.type === "hackerone"
                      ? "HackerOne"
                      : link.type === "bugcrowd"
                      ? "Bugcrowd"
                      : link.type === "report"
                      ? "Report"
                      : "View"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#76925a] mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
          A collection of my work in cybersecurity, web development, and AI
        </p>

        {renderProjectSection(projects.cybersecurity, "Cybersecurity")}
        {renderProjectSection(projects.webdev_ai, "Web Development & AI")}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
