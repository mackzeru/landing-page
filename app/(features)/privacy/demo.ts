"use client";

import { Shield, Calendar, Eye, Lock, Database, Users } from "lucide-react";

export const tableOfContents = [
  { id: "overview", title: "Overview", icon: Eye },
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: Database,
  },
  { id: "how-we-use", title: "How We Use Your Information", icon: Users },
  { id: "information-sharing", title: "Information Sharing", icon: Shield },
  { id: "data-security", title: "Data Security", icon: Lock },
  { id: "your-rights", title: "Your Rights", icon: Users },
  { id: "cookies", title: "Cookies and Tracking", icon: Database },
  {
    id: "international-transfers",
    title: "International Transfers",
    icon: Shield,
  },
  { id: "children-privacy", title: "Children's Privacy", icon: Users },
  { id: "changes", title: "Changes to This Policy", icon: Calendar },
  { id: "contact", title: "Contact Us", icon: Shield },
];
