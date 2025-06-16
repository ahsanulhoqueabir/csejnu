import { getFileName } from "./fileName";

const extractPath = (
  path: string
): { sem: string; course: string; batch: string } => {
  // Remove leading slashes
  const cleanedPath = path.replace(/^\/+/, "");

  // Split by slashes and filter out empty segments
  const segments = cleanedPath.split("/").filter(Boolean);
  if (segments.length < 3) {
    return { sem: "", course: "", batch: "" } as any;
  }
  const sem = getFileName(segments[1])
    .replace(/-/g, " ")
    .replace(/\.[^/.]+$/, "")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const course = getFileName(segments[2].toLowerCase());

  const batch = getFileName(segments[3]?.split(".")[0].toLowerCase() || "");
  return {
    sem,
    course,
    batch,
  };
};
export default extractPath;
