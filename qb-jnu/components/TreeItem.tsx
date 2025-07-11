"use client";

import { useState } from "react";
import { GitHubItem } from "@/lib/githubTree";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Folder,
  FolderOpen,
  FileText,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { getFileName } from "@/lib/fileName";

export function TreeItem({
  item,
  directory,
}: {
  item: GitHubItem;
  directory: string;
}) {
  const [open, setOpen] = useState(false);

  if (item.type === "dir") {
    return (
      <div className="ml-2">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center space-x-1 hover:text-blue-600"
        >
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          {open ? <FolderOpen size={16} /> : <Folder size={16} />}
          <span className="font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
            {getFileName(item.name.toLowerCase())}
          </span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-4 overflow-hidden "
            >
              {item.children?.map((child) => (
                <TreeItem key={child.path} item={child} directory={directory} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  } else {
    const slug = item.path.replace(/\.md$/, "").split("/");
    return (
      <Link
        href={`/${directory}/${slug.join("/")}`}
        className="flex items-center ml-6 space-x-2 text-sm hover:underline"
      >
        <FileText size={14} />
        {/* <span>{item.name.replace(".md", "")}</span> */}
        <span className="font-medium ">
          {getFileName(item.name.replace(".md", "").toLowerCase())}
        </span>
      </Link>
    );
  }
}
