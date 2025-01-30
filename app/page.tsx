"use client";
import { BackgroundBeams } from "./components/ui/background-beams";
import ProfileCard from "./components/ProfileCard";
import LinkCard from "./components/LinkCard";
import dynamic from 'next/dynamic';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,
  FaHashnode,
  FaTwitter
} from "react-icons/fa6";
import { BsFillPersonVcardFill } from "react-icons/bs";

const ClientWrapper = dynamic(() => import('./components/ui/client-wrapper'), {
  ssr: false
});

const links = [
  {
    href: "https://hothead01th.vercel.app",
    label: "Portfolio",
    icon: <BsFillPersonVcardFill className="mt-0.5" style={{ color: '#0ea5e9' }} />
  },
  {
    href: "https://github.com/HOTHEAD01TH",
    label: "GitHub",
    icon: <FaGithub className="mt-0.5" style={{ color: '#6e7681' }} />
  },
  {
    href: "https://x.com/HOTHEAD01TH",
    label: "Twitter",
    icon: <FaTwitter className="mt-0.5" style={{ color: '#1DA1F2' }} />
  },
  {
    href: "https://linkedin.com/in/hothead01th",
    label: "LinkedIn",
    icon: <FaLinkedin className="mt-0.5" style={{ color: '#0A66C2' }} />
  },
  {
    href: "https://instagram.com/hothead01th",
    label: "Instagram",
    icon: <FaInstagram className="mt-0.5" style={{ color: '#E4405F' }} />
  },
   {
     href: "https://hothead01th.hashnode.dev",
     label: "Blog",
     icon: <FaHashnode className="mt-0.5" style={{ color: '#2962FF' }} />
   },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black p-4">
      <BackgroundBeams />
      <ClientWrapper />
      <div className="w-full max-w-xl mx-auto space-y-4 relative z-10">
        <div className="max-w-md mx-auto">
          <ProfileCard />
        </div>
        <div className="space-y-3 max-w-md mx-auto">
          {links.map((link, i) => (
            <div key={link.href}>
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