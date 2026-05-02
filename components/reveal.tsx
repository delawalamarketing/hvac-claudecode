"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealTag = "div" | "section" | "article" | "li";

type RevealProps = {
  as?: RevealTag;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  style,
  children,
}: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const props = {
    ref: ref as React.Ref<HTMLElement>,
    className: cn("reveal", visible && "is-visible", className),
    style: { transitionDelay: `${delay}ms`, ...style },
  };

  return React.createElement(Tag, props, children);
}
