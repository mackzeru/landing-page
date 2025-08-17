"use client";

import {
  MessageCircle,
  Mail,
  Phone,
  Users,
  CreditCard,
  Bug,
  Lightbulb,
  Video,
} from "lucide-react";

export const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7 Available",
    action: "Start Chat",
    color: "green",
    response: "< 2 minutes",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    availability: "Response within 4 hours",
    action: "Send Email",
    color: "blue",
    response: "< 4 hours",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our experts",
    availability: "Mon-Fri, 9AM-6PM PST",
    action: "Call Now",
    color: "purple",
    response: "Immediate",
  },
  {
    icon: Video,
    title: "Video Call",
    description: "Schedule a screen-sharing session",
    availability: "By appointment",
    action: "Book Call",
    color: "indigo",
    response: "Same day",
  },
];

export const supportCategories = [
  { id: "general", label: "General Inquiry", icon: MessageCircle },
  { id: "technical", label: "Technical Support", icon: Bug },
  { id: "billing", label: "Billing & Pricing", icon: CreditCard },
  { id: "feature", label: "Feature Request", icon: Lightbulb },
  { id: "demo", label: "Product Demo", icon: Video },
  { id: "partnership", label: "Partnership", icon: Users },
];

export const officeLocations = [
  {
    city: "San Francisco",
    address: "123 Market Street, Suite 400",
    zipcode: "San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    timezone: "PST",
  },
  {
    city: "New York",
    address: "456 Broadway, Floor 12",
    zipcode: "New York, NY 10013",
    phone: "+1 (555) 987-6543",
    timezone: "EST",
  },
  {
    city: "London",
    address: "789 Oxford Street",
    zipcode: "London W1C 1JN, UK",
    phone: "+44 20 7123 4567",
    timezone: "GMT",
  },
];
