"use client";

import { useState } from "react";
import { ExpandableTabs } from "@sapira/ui";
import { Home, Settings, Users, BarChart3, Mail, Bell, Search, Star } from "lucide-react";

const basicTabs = [
  { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
  { id: "analytics", label: "Analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { id: "team", label: "Team", icon: <Users className="h-4 w-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

const extendedTabs = [
  { id: "inbox", label: "Inbox", icon: <Mail className="h-4 w-4" /> },
  { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
  { id: "search", label: "Search", icon: <Search className="h-4 w-4" /> },
  { id: "favorites", label: "Favorites", icon: <Star className="h-4 w-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
];

export default function ExpandableTabsPage() {
  const [active1, setActive1] = useState("home");
  const [active2, setActive2] = useState("inbox");

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">ExpandableTabs</h1>
        <p className="text-muted-foreground mt-2">
          Animated tabs that expand on selection, showing icon + label for the active tab.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic</h2>
        <div className="flex justify-center py-4">
          <ExpandableTabs tabs={basicTabs} activeTab={active1} onTabChange={setActive1} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">More Tabs</h2>
        <div className="flex justify-center py-4">
          <ExpandableTabs tabs={extendedTabs} activeTab={active2} onTabChange={setActive2} />
        </div>
      </section>
    </div>
  );
}
