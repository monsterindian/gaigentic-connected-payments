
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { AssistantCard } from "@/components/AssistantCard";
import { MetricCard } from "@/components/MetricCard";
import { RecentActivity } from "@/components/RecentActivity";
import { Search, DollarSign, BarChart3, TrendingUp, AlertTriangle, Users, Target, Bot, MessageSquare, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const Index = () => {
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    toast.success("🤖 AI Agent Working", {
      description: "Your reporting agent is analyzing data and generating insights..."
    });
  };

  const handleRunAnomalyDetection = () => {
    toast.success("🔍 Detection Agent Activated", {
      description: "AI anomaly detection agent is scanning all transactions..."
    });
  };

  const handleExportPricingModels = () => {
    toast.success("📊 Export Agent Running", {
      description: "Pricing model export agent is preparing your data..."
    });
  };

  const assistants = [
    {
      title: "🔍 Scheme Cost Agent",
      description: "Your AI assistant for reconciling card scheme invoices against internal pricing models. I'll identify discrepancies, new fee lines, and unexpected penalties automatically.",
      icon: Search,
      features: [
        "Automated invoice reconciliation with ML",
        "Intelligent anomaly detection and flagging",
        "Real-time financial impact estimation",
        "Proactive alerts for cost discrepancies"
      ],
      status: "active" as const,
      gradient: "bg-gradient-to-br from-slate-600 to-slate-800",
      onClick: () => navigate("/scheme-cost")
    },
    {
      title: "💰 Pricing Optimization Agent",
      description: "I optimize merchant pricing using AI-driven recommendations based on transaction volume, risk profiles, and competitive benchmarks in real-time.",
      icon: DollarSign,
      features: [
        "Dynamic pricing optimization with AI",
        "Peer benchmark analysis and insights",
        "Risk-adjusted rate calculations",
        "Margin target achievement automation"
      ],
      status: "active" as const,
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
      onClick: () => navigate("/client-pricing")
    },
    {
      title: "📊 Margin Analysis Agent",
      description: "I model the effects of fee structure changes and market scenarios on profit margins using advanced AI simulation capabilities.",
      icon: BarChart3,
      features: [
        "AI-powered scenario modeling",
        "Before/after impact analysis",
        "Risk area identification with ML",
        "Actionable mitigation strategies"
      ],
      status: "beta" as const,
      gradient: "bg-gradient-to-br from-slate-600 to-slate-700",
      onClick: () => navigate("/margin-simulator")
    }
  ];

  const metrics = [
    {
      title: "AI Agent Performance",
      value: "$1.2M",
      change: "+8.3% from last month",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Active Agent Tasks",
      value: "23",
      change: "-15% from last week",
      changeType: "positive" as const,
      icon: AlertTriangle
    },
    {
      title: "Clients Assisted",
      value: "147",
      change: "+22 this month",
      changeType: "positive" as const,
      icon: Users
    },
    {
      title: "AI Accuracy Rate",
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
        {/* Agent Performance Overview */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Bot className="w-5 h-5 text-blue-600" />
              AI Agent Performance Overview
            </h2>
            <p className="text-slate-600">Real-time metrics showing how your AI agents are performing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </section>

        {/* AI Financial Agents */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              Your AI Financial Agents
            </h2>
            <p className="text-slate-600">Specialized AI assistants ready to help with financial intelligence and optimization</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {assistants.map((assistant, index) => (
              <AssistantCard key={index} {...assistant} />
            ))}
          </div>
        </section>

        {/* Agent Activity */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Agent Activity & Quick Actions
            </h2>
            <p className="text-slate-600">Latest AI agent activities and quick access to common tasks</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20">
                  <Bot className="w-12 h-12" />
                </div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quick Agent Commands
                </h3>
                <p className="text-blue-100 mb-4 text-sm">Ask your AI agents to perform these common tasks</p>
                <div className="space-y-2">
                  <button 
                    className="w-full text-left text-sm hover:bg-white/10 p-3 rounded transition-colors flex items-center gap-2"
                    onClick={handleGenerateReport}
                  >
                    <Bot className="w-4 h-4" />
                    → Generate Monthly Report with AI
                  </button>
                  <button 
                    className="w-full text-left text-sm hover:bg-white/10 p-3 rounded transition-colors flex items-center gap-2"
                    onClick={handleRunAnomalyDetection}
                  >
                    <Bot className="w-4 h-4" />
                    → Run AI Anomaly Detection
                  </button>
                  <button 
                    className="w-full text-left text-sm hover:bg-white/10 p-3 rounded transition-colors flex items-center gap-2"
                    onClick={handleExportPricingModels}
                  >
                    <Bot className="w-4 h-4" />
                    → Export Pricing Models with AI
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
