"use client";

import { useEffect, useState } from "react";
import { Link } from "@chakra-ui/react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3")).map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: Number(element.tagName.charAt(1)),
    }));
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto">
      <h4 className="font-semibold text-lg mb-4">Table of Contents</h4>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ paddingLeft: `${(level - 2) * 1}rem` }}>
            <Link
              href={`#${id}`}
              className={`text-sm hover:text-amber-500 transition-colors
                ${activeId === id ? "text-amber-500" : "text-gray-400"}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
