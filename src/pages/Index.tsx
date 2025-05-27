
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { AssistantCard } from "@/components/AssistantCard";
import { MetricCard } from "@/components/MetricCard";
import { RecentActivity } from "@/components/RecentActivity";
import { Search, DollarSign, BarChart3, TrendingUp, AlertTriangle, Users, Target } from "lucide-react";

const Index = () => {
  const assistants = [
    {
      title: "🔍 Scheme Cost Assistant",
      description: "Reconcile card scheme invoices against internal pricing models. Identify discrepancies, new fee lines, and unexpected penalties with intelligent matching algorithms.",
      icon: Search,
      features: [
        "Automated invoice reconciliation",
        "Anomaly detection and flagging",
        "Financial impact estimation",
        "Real-time alerts for discrepancies"
      ],
      status: "active" as const,
      gradient: "bg-gradient-to-br from-blue-600 to-blue-700",
      onClick: () => console.log("Launching Scheme Cost Assistant...")
    },
    {
      title: "💰 Client Pricing Assistant",
      description: "Optimize merchant pricing with AI-driven recommendations based on transaction volume, risk profiles, and competitive benchmarks.",
      icon: DollarSign,
      features: [
        "Dynamic pricing optimization",
        "Peer benchmark analysis",
        "Risk-adjusted rate calculations",
        "Margin target achievement"
      ],
      status: "active" as const,
      gradient: "bg-gradient-to-br from-green-600 to-green-700",
      onClick: () => console.log("Launching Client Pricing Assistant...")
    },
    {
      title: "📊 Margin Impact Simulator",
      description: "Model the effects of fee structure changes and market scenarios on profit margins with advanced simulation capabilities.",
      icon: BarChart3,
      features: [
        "Scenario-based modeling",
        "Before/after impact analysis",
        "Risk area identification",
        "Actionable mitigation strategies"
      ],
      status: "beta" as const,
      gradient: "bg-gradient-to-br from-purple-600 to-purple-700",
      onClick: () => console.log("Launching Margin Impact Simulator...")
    }
  ];

  const metrics = [
    {
      title: "Total Margin Impact",
      value: "$1.2M",
      change: "+8.3% from last month",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Active Anomalies",
      value: "23",
      change: "-15% from last week",
      changeType: "positive" as const,
      icon: AlertTriangle
    },
    {
      title: "Merchants Optimized",
      value: "147",
      change: "+22 this month",
      changeType: "positive" as const,
      icon: Users
    },
    {
      title: "Accuracy Rate",
      value: "97.8%",
      change: "+0.5% improvement",
      changeType: "positive" as const,
      icon: Target
    }
  ];

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        {/* Metrics Overview */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Performance Overview</h2>
            <p className="text-slate-600">Key metrics and system performance indicators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </section>

        {/* AI Assistants */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">AI Financial Assistants</h2>
            <p className="text-slate-600">Specialized tools for financial intelligence and optimization</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {assistants.map((assistant, index) => (
              <AssistantCard key={index} {...assistant} />
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">System Activity</h2>
            <p className="text-slate-600">Latest updates and assistant activities</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
                <p className="text-blue-100 mb-4 text-sm">Access frequently used tools and reports</p>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm hover:bg-blue-600 p-2 rounded transition-colors">
                    → Generate Monthly Report
                  </button>
                  <button className="w-full text-left text-sm hover:bg-blue-600 p-2 rounded transition-colors">
                    → Run Anomaly Detection
                  </button>
                  <button className="w-full text-left text-sm hover:bg-blue-600 p-2 rounded transition-colors">
                    → Export Pricing Models
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
