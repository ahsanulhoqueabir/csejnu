import TreeView from "@/components/TreeView";
import { fetchGitHubTree } from "@/lib/githubTree";

export default async function page() {
  const tree = await fetchGitHubTree("", "cse-jnu", "qb");

  return <TreeView tree={tree} directory="qb" />;
}
