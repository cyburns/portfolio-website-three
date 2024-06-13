"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { links, alphabet } from "@/lib/data";

export default function Navbar() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(button.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  let interval: NodeJS.Timeout | null = null;

  const shuffleLetters = (e: any) => {
    let iteration = 0;

    if (interval !== null) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((_: any, index: number) => {
          if (index < iteration) {
            return e.target.dataset.value[index];
          }

          return alphabet[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= e.target.dataset.value.length) {
        clearInterval(interval!);
        interval = null;
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <nav className="fixed top-0 z-50 w-full text-white p-8 flex justify-between items-center">
      <div className="flex items-center ml-2 group cursor-pointer relative">
        <p className="text-2xl mr-3 transition-transform duration-500 transform-gpu group-hover:rotate-180">
          ©
        </p>
        <div className="transition-transform duration-500 flex items-center ml-2 overflow-hidden">
          <p className="text-xl transition-transform duration-500 transform-gpu group-hover:-translate-x-20">
            Code by
          </p>
          <p className="ml-2 text-xl transition-transform duration-500 transform-gpu group-hover:-translate-x-20">
            Cyrus
          </p>
          <p className="ml-2 text-xl transition-transform duration-500 transform-gpu group-hover:-translate-x-20 absolute left-[100%]">
            Burns
          </p>
        </div>
      </div>
      <div className="flex items-center">
        {links.map((link, index) => (
          <div
            key={index}
            className="group mx-8 cursor-pointer flex items-center justify-center flex-col"
          >
            <a
              onMouseEnter={shuffleLetters}
              onMouseLeave={() => {
                gsap.to(["p.text-xl"], {
                  x: 0,
                  duration: 0.5,
                  ease: "power2.out",
                });
              }}
              data-value={link.name}
              className="text-xl capitalize font-mono"
            >
              {link.name}
            </a>
            <div className="w-2 h-2 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center mt-1"></div>
          </div>
        ))}
      </div>
    </nav>
  );
}
