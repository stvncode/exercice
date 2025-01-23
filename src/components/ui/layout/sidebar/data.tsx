import { Home, Inbox, Search } from "lucide-react"

export const data = {
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  favorites: [
    {
      name: "React",
      url: "/react",
      emoji: <img src="/react.svg" alt="react" className="w-4" />,
    },
    {
      name: "React Hook Form",
      url: "/react-hook-form",
      emoji: (
        <img src="/react-hook-form.svg" alt="react-hook-form" className="w-4" />
      ),
    },
    {
      name: "Shadcn UI",
      url: "/shadcn-ui",
      emoji: <img src="/shadcn.svg" alt="shadcn" className="w-4" />,
    },
    {
      name: "React Router Dom",
      url: "/react-router-dom",
      emoji: (
        <img
          src="/react-router-dom.svg"
          alt="react-router-dom"
          className="w-4"
        />
      ),
    },
    {
      name: "Vitest",
      url: "/vitest",
      emoji: <img src="/vitest.svg" alt="vitest" className="w-4" />,
    },
    {
      name: "React Query",
      url: "/react-query",
      emoji: <img src="/react-query.svg" alt="react-query" className="w-4" />,
    },
    {
      name: "Tailwind CSS",
      url: "/tailwind",
      emoji: <img src="/tailwind.svg" alt="tailwind" className="w-4" />,
    },
    {
      name: "Typescript",
      url: "/typescript",
      emoji: <img src="/typescript.svg" alt="typescript" className="w-4" />,
    },
  ],
  others: [
    {
      name: "Zod",
      url: "/zod",
      emoji: <img src="/zod.svg" alt="zod" className="w-4" />,
    },
    {
      name: "Playwright",
      url: "/playwright",
      emoji: <img src="/playwright.svg" alt="playwright" className="w-4" />,
    },
    {
      name: "Framer",
      url: "/framer",
      emoji: <img src="/framer.svg" alt="framer" className="w-4" />,
    },
    {
      name: "TS Belt",
      url: "/ts-belt",
      emoji: <img src="/ts-belt.svg" alt="ts-belt" className="w-4" />,
    },
    {
      name: "Zustand",
      url: "/zustand",
      emoji: <img src="/zustand.svg" alt="zustand" className="w-4" />,
    },
  ],
}
