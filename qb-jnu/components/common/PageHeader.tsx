"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PageHeaderProps {
  data: MetadataProps;
  className?: string;
}

interface MetadataProps {
  sem: string;
  course: string;
  batch: string;
}

export default function PageHeader({
  data: { sem, course, batch },
  className,
}: PageHeaderProps) {
  return (
    <motion.header
      className={cn(
        // Gradient background for light and dark themes
        "w-full py-8 flex flex-col items-center gap-2 rounded-lg shadow-lg mb-5",
        "bg-gradient-to-b from-[#f0f4ff] to-[#e0e7ff] dark:from-[#181825] dark:to-[#232946]",
        className
      )}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <motion.h1
        className="lg:text-4xl font-extrabold tracking-tight text-primary text-center"
        whileHover={{ scale: 1.05, color: "#6366f1" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {sem}
      </motion.h1>

      <motion.div
        className="mt-2 lg:flex lg:gap-4 flex-col lg:flex-row items-center justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Badge
          variant="outline"
          className="text-base px-4 py-2 rounded-lg shadow"
        >
          {course.charAt(0).toUpperCase() + course.slice(1)}
        </Badge>
        <Badge
          variant="outline"
          className="text-base px-4 py-2 rounded-lg shadow"
        >
          {batch.charAt(0).toUpperCase() + batch.slice(1)}
        </Badge>
      </motion.div>
      <Separator className="mt-6 w-1/2" />
    </motion.header>
  );
}
