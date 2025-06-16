import TreeView from "@/components/TreeView";
import { fetchGitHubTree } from "@/lib/githubTree";

export default async function NotesPage() {
  const tree = await fetchGitHubTree("", "cse-jnu", "notes");

  return <TreeView tree={tree} directory="notes" />;
}
