"use client";
import { useEffect, useState } from "react";
import { FloatingTechStack } from "./floating-tech-stack";

export default function ClientWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <FloatingTechStack />;
} 