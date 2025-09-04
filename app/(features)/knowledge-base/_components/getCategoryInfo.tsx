import {
  BookOpen,
  Mail,
  Send,
  Bot,
  Database,
  Settings,
  HelpCircle,
  Tag,
  AlertTriangle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  all: BookOpen,
  "knowledge-base": Bot,
  "knowledge-base-campaigns": Send,
  "knowledge-base-email-accounts": Mail,
  "multi-source-sourcing": Database,
  integrations: Settings,
  general: HelpCircle,
  troubleshooting: AlertTriangle,
};
export const getCategoryInfo = (categoryId: string) => {
  // Handle special cases
  const isAll =
    categoryId.toLowerCase() === "all" ||
    categoryId.toLowerCase() === "tag:knowledge-base";

  const normalizedId = isAll
    ? "all"
    : categoryId.replace(/^tag:/, "").toLowerCase();

  const generateTitle = (id: string) => {
    if (id === "all") return "All Articles";

    // Remove known prefixes like "knowledge-base"
    const cleaned = id.replace(/^knowledge-base[-_]?/, "");

    return cleaned
      .replace(/[-_]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return {
    title: generateTitle(normalizedId),
    icon: iconMap[normalizedId] || Tag,
  };
};