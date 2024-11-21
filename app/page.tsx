"use client";
import { BackgroundBeams } from "./components/ui/background-beams";
import ProfileCard from "./components/ProfileCard";
import LinkCard from "./components/LinkCard";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaHashnode,
  FaTwitter
} from "react-icons/fa6";
import { BsFillPersonVcardFill } from "react-icons/bs";

const links = [
  {
    href: "https://portfolio.yourdomain.com",
    label: "Portfolio",
    icon: <BsFillPersonVcardFill className="mb-0.5" />
  },
  {
    href: "https://github.com/yourusername",
    label: "GitHub",
    icon: <FaGithub className="mb-0.5" />
  },
  {
    href: "https://twitter.com/yourusername",
    label: "Twitter",
    icon: <FaTwitter className="mb-0.5" />
  },
  {
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
    icon: <FaLinkedin className="mb-0.5" />
  },
  {
    href: "https://instagram.com/yourusername",
    label: "Instagram",
    icon: <FaInstagram className="mb-0.5" />
  },
  {
    href: "https://hashnode.yourusername.dev",
    label: "Blog",
    icon: <FaHashnode className="mb-0.5" />
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black p-4">
      <BackgroundBeams />
      <div className="w-full max-w-xl mx-auto space-y-3 relative z-10">
        <div className="max-w-md mx-auto">
          <ProfileCard />
        </div>
        <div className="space-y-3 max-w-md mx-auto">
          {links.map((link, i) => (
            <div key={link.href} className="mb-2">
              <LinkCard
                {...link}
                className="animate-in py-3"
                style={{ animationDelay: `${i * 100}ms` }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}