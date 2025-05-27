import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { AssistantCard } from "@/components/AssistantCard";
import { MetricCard } from "@/components/MetricCard";
import { RecentActivity } from "@/components/RecentActivity";
import { Search, DollarSign, BarChart3, TrendingUp, AlertTriangle, Users, Target, Bot, MessageSquare, Zap, Brain, Sparkles, Activity, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    navigate('/ai-performance');
  };

  const handleRunAnomalyDetection = () => {
    navigate('/predictive-alerts');
  };

  const handleExportPricingModels = () => {
    navigate('/bulk-processing');
  };

  const handleAskAllAgents = () => {
    navigate('/agent-chat');
  };

  const handleAgentTraining = () => {
    navigate('/ai-training');
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

  const aiActivities = [
    {
      agent: "Scheme Cost Agent",
      action: "Detected 3 new anomalies in Mastercard invoice",
      time: "2 minutes ago",
      impact: "$4,200",
      confidence: "96%"
    },
    {
      agent: "Pricing Agent",
      action: "Optimized rates for 12 high-volume merchants",
      time: "15 minutes ago",
      impact: "+$18K/month",
      confidence: "94%"
    },
    {
      agent: "Margin Agent",
      action: "Completed quarterly scenario analysis",
      time: "1 hour ago",
      impact: "Risk reduced 23%",
      confidence: "91%"
    }
  ];

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        {/* AI System Status */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    AI Agent Network Status
                    <Badge className="bg-green-100 text-green-800 animate-pulse">
                      ● All Systems Online
                    </Badge>
                  </h2>
                  <p className="text-slate-600">3 AI agents actively monitoring and optimizing your financial operations</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      Processing 247 tasks/hour
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      99.9% uptime
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline"
                  onClick={handleAskAllAgents}
                  className="border-purple-300 hover:bg-purple-50"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask All Agents
                </Button>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={handleAgentTraining}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Train Agents
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

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

        {/* Recent AI Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              Recent AI Agent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{activity.agent}</p>
                      <p className="text-sm text-slate-600">{activity.action}</p>
                      <p className="text-xs text-slate-400">{activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{activity.impact}</p>
                    <Badge className="bg-purple-100 text-purple-700 text-xs">
                      {activity.confidence} confidence
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
                    → View AI Performance Metrics
                  </button>
                  <button 
                    className="w-full text-left text-sm hover:bg-white/10 p-3 rounded transition-colors flex items-center gap-2"
                    onClick={handleRunAnomalyDetection}
                  >
                    <Bot className="w-4 h-4" />
                    → Access Predictive Alerts
                  </button>
                  <button 
                    className="w-full text-left text-sm hover:bg-white/10 p-3 rounded transition-colors flex items-center gap-2"
                    onClick={handleExportPricingModels}
                  >
                    <Bot className="w-4 h-4" />
                    → Start Bulk Processing
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
