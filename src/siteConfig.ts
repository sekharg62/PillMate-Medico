import type { LucideIcon } from "lucide-react";
import { Building2, Headphones, ShieldCheck, UsersRound } from "lucide-react";

export type TrustStatItem = {
  key: string;
  label: string;
  value: string;
  valueSuffix?: string;
  icon: LucideIcon;
  theme: "emerald" | "violet" | "teal" | "amber";
};

export const siteConfig = {
  statsTrustBar: [
    {
      key: "clinics",
      label: "Clinics Worldwide",
      value: "500",
      valueSuffix: "+",
      icon: Building2,
      theme: "emerald",
    },
    {
      key: "uptime",
      label: "Platform Uptime",
      value: "99.9",
      valueSuffix: "%",
      icon: ShieldCheck,
      theme: "violet",
    },
    {
      key: "records",
      label: "Patient Records Managed",
      value: "2M",
      valueSuffix: "+",
      icon: UsersRound,
      theme: "teal",
    },
    {
      key: "support",
      label: "Expert Support",
      value: "24",
      valueSuffix: "/7",
      icon: Headphones,
      theme: "amber",
    },
  ] satisfies TrustStatItem[],
} as const;

