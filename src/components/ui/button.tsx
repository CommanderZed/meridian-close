"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

export function Button({ className = "", asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4a853] disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
