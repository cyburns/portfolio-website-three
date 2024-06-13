"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { links, alphabet } from "@/lib/data";
import Rounded from "@/common/RoundedButton";
import { AnimatePresence } from "framer-motion";
import Mobile from "./Mobile";
import styles from "./style.module.scss";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [buttonDiff, setButtonDiff] = useState(0);

  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const updateMaxScroll = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setButtonDiff(500);
    } else {
      setButtonDiff(0);
    }
  };

  useEffect(() => {
    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);

    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight - buttonDiff,
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
    <>
      <nav className="absolute top-0 z-50 w-full text-white px-1 py-4 sm:p-8 flex justify-between items-start">
        <div className="flex sm:ml-2 group cursor-pointer relative rotate-90 sm:rotate-0 -ml-16 mt-[5rem] sm:mt-0 transition-transform duration-500 transform-gpu">
          <p className="text-xl transition-transform duration-500 transform-gpu group-hover:rotate-[360deg]">
            ©
          </p>
          <div className="transition-transform duration-500 flex  ml-2 overflow-hidden font-mono">
            <p className="text-xl transition-transform duration-500 transform-gpu group-hover:-translate-x-40 font-mono">
              Code by
            </p>
            <p className="ml-2 text-xl transition-transform duration-500 transform-gpu group-hover:-translate-x-20 font-mono">
              Cyrus
            </p>
            <p className="ml-2 text-xl transition-transform duration-500 transform-gpu group-hover:-translate-x-20 absolute left-[100%] font-mono">
              Burns
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          {links.map((link, index) => (
            <div
              key={index}
              className="group mx-8 cursor-pointer flex items-center"
            >
              <div className="flex flex-col items-center">
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
                <span className="w-2 h-2 bg-white rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center mt-1"></span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex md:hidden items-center"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className="group mx-8 cursor-pointer flex items-center">
            <div className="flex flex-row items-center">
              <span className="w-2 h-2 bg-white rounded-full transform mr-1"></span>
              <a
                onMouseEnter={shuffleLetters}
                onMouseLeave={() => {
                  gsap.to(["p.text-xl"], {
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out",
                  });
                }}
                data-value="Menu"
                className="text-xl capitalize font-mono"
              >
                Menu
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Mobile />}</AnimatePresence>
    </>
  );
}
