"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

export interface UserProfileProps {
  name: string;
  role?: string;
  avatar?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = { sm: "size-8 text-xs", md: "size-10 text-sm", lg: "size-14 text-lg" };
const textSizes = { sm: "text-sm", md: "text-base", lg: "text-lg" };

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function UserProfile({ name, role, avatar, size = "md", className }: UserProfileProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {avatar ? (
        <img src={avatar} alt={name} className={cn("rounded-full object-cover", sizes[size])} />
      ) : (
        <div className={cn("rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium", sizes[size])}>
          {getInitials(name)}
        </div>
      )}
      <div>
        <p className={cn("font-semibold leading-tight", textSizes[size])}>{name}</p>
        {role && <p className="text-xs text-muted-foreground">{role}</p>}
      </div>
    </div>
  );
}

export { UserProfile };
