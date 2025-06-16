"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  GitBranch,
  FileText,
  Pencil,
  Send,
  ThumbsUp,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function HowToContribute() {
  const steps = [
    {
      icon: <GitBranch className="w-6 h-6 text-primary" />,
      title: "Fork and Clone the Repository",
      content: (
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            Go to our{" "}
            <a
              href="https://github.com/your-org/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              GitHub repository
            </a>
            .
          </li>
          <li>
            Click on <b>Fork</b> to create your own copy.
          </li>
          <li>Clone your forked repo to your local machine:</li>
          <pre className="bg-muted rounded px-3 py-2">
            <code>
              git clone https://github.com/your-username/your-repo.git
            </code>
          </pre>
        </ol>
      ),
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "File Naming Conventions",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <b>File type:</b> Always use <code>.md</code> (Markdown) files for
            contributions.
          </li>
          <li>
            <b>File names:</b> Use lowercase letters, words separated by hyphens
            (<code>-</code>), and avoid spaces or special characters.
            <br />
            <i>Example:</i> <code>introduction-to-algorithms.md</code>
          </li>
        </ul>
      ),
    },
    {
      icon: <Pencil className="w-6 h-6 text-primary" />,
      title: "Writing Your Contribution",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>Write clear and concise content in Markdown format.</li>
          <li>
            Use headings (<code>#</code>, <code>##</code>, etc.) to organize
            your content.
          </li>
          <li>
            Add code blocks where necessary using triple backticks (
            <code>```</code>).
          </li>
          <li>Include references or links if applicable.</li>
        </ul>
      ),
    },
    {
      icon: <Send className="w-6 h-6 text-primary" />,
      title: "Submitting a Pull Request",
      content: (
        <ol className="list-decimal ml-6 space-y-2">
          <li>Create a new branch for your changes:</li>
          <pre className="bg-muted rounded px-3 py-2">
            <code>git checkout -b your-feature-name</code>
          </pre>
          <li>Add and commit your changes:</li>
          <pre className="bg-muted rounded px-3 py-2">
            <code>
              git add .{"\n"}git commit -m "Add: your descriptive message"
            </code>
          </pre>
          <li>Push your branch to GitHub:</li>
          <pre className="bg-muted rounded px-3 py-2">
            <code>git push origin your-feature-name</code>
          </pre>
          <li>
            Open a Pull Request from your branch to the <b>main</b> branch of
            the original repository.
          </li>
          <li>Fill out the PR template and describe your changes clearly.</li>
        </ol>
      ),
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-primary" />,
      title: "Review Process",
      content: (
        <ul className="list-disc ml-6 space-y-2">
          <li>Your PR will be reviewed by maintainers.</li>
          <li>Make any requested changes.</li>
          <li>Once approved, your contribution will be merged!</li>
        </ul>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-6"
    >
      <h1 className="text-3xl font-bold mb-2 text-center">How to Contribute</h1>
      <p className="text-muted-foreground mb-6 text-center">
        We welcome contributions! Please follow these steps to help us maintain
        consistency and quality.
      </p>
      <Accordion type="single" collapsible className="mb-8">
        {steps.map((step, idx) => (
          <AccordionItem value={`step-${idx}`} key={step.title}>
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                {step.icon}
                <span className="font-medium">{`${idx + 1}. ${
                  step.title
                }`}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {step.content}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Separator className="my-6" />
      <div className="flex flex-col items-center gap-2">
        <CheckCircle className="w-8 h-8 text-green-600" />
        <h2 className="text-xl font-semibold">Thank You!</h2>
        <p className="text-muted-foreground text-center">
          We appreciate your effort to improve our project.
          <br />
          Happy contributing!
        </p>
      </div>
    </motion.div>
  );
}
