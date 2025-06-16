"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ResourceCardProps = {
  item: {
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    owner: string;
    repo: string;
    path: string;
  };
  idx: number;
};

export default function ResourceCard({ item, idx }: ResourceCardProps) {
  return (
    <motion.div
      key={item.title + idx}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full flex flex-col">
        {item.image && (
          <div className="w-full aspect-[16/9] overflow-hidden rounded-t border-b bg-muted">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            {item.title}
          </CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 flex-1">
          <div className="flex flex-wrap gap-2">
            {item.tags?.map((tag: string) => (
              <span
                key={tag}
                className="bg-muted px-2 py-1 rounded text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            <Link href={`/${item.path}`}>
              <Button variant="default">View</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
