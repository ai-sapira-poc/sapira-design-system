import { MetricsCard } from "@sapira/ui";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

export default function MetricsCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">MetricsCard</h1>
        <p className="text-muted-foreground mt-2">
          A KPI card for displaying key metrics with optional trend indicators.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Examples</h2>
        <div className="grid grid-cols-2 gap-4">
          <MetricsCard
            label="Total Users"
            value="2,350"
            change={{ value: 12, trend: "positive" }}
            icon={<Users />}
            description="vs. last month"
          />
          <MetricsCard
            label="Revenue"
            value="$45,231"
            change={{ value: 8.2, trend: "positive" }}
            icon={<DollarSign />}
          />
          <MetricsCard
            label="Active Sessions"
            value="573"
            change={{ value: -3, trend: "negative" }}
            icon={<Activity />}
          />
          <MetricsCard
            label="Growth Rate"
            value="23.1%"
            icon={<TrendingUp />}
            description="Annual growth rate"
          />
        </div>
      </section>
    </div>
  );
}
