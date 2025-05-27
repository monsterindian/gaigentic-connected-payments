
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowLeft, Play, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const ScenarioReview = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scenarioId = searchParams.get('id');
  
  const [scenario, setScenario] = useState<any>(null);

  useEffect(() => {
    // Mock data based on the scenario ID
    const mockScenarios = {
      "1": {
        id: 1,
        name: "EU Interchange Rate Increase",
        description: "+0.1% increase in interchange fees for EU transactions",
        impact: "-0.7%",
        affectedMerchants: 89,
        estimatedLoss: "$1.2M",
        mitigation: "Adjust markup from 0.4% to 0.5% to recover loss",
        status: "active",
        createdDate: "2024-01-15",
        lastModified: "2024-01-20",
        riskLevel: "high"
      },
      "2": {
        id: 2,
        name: "High-Risk Segment Volume Drop",
        description: "20% volume decrease in high-risk merchant segment",
        impact: "-0.3%",
        affectedMerchants: 23,
        estimatedLoss: "$450K",
        mitigation: "Focus retention efforts on top 10 high-value accounts",
        status: "simulated",
        createdDate: "2024-01-18",
        lastModified: "2024-01-22",
        riskLevel: "medium"
      }
    };
    
    const data = mockScenarios[scenarioId as keyof typeof mockScenarios];
    if (data) {
      setScenario(data);
    }
  }, [scenarioId]);

  const handleApprove = () => {
    toast.success("Scenario Approved", {
      description: `"${scenario?.name}" has been approved for execution`
    });
  };

  const handleReject = () => {
    toast.error("Scenario Rejected", {
      description: `"${scenario?.name}" has been rejected and requires revision`
    });
  };

  if (!scenario) {
    return (
      <Layout>
        <DashboardHeader />
        <div className="p-6">
          <p>Scenario not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/margin-simulator')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Simulator
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Eye className="w-8 h-8 text-green-600" />
                Scenario Review
              </h1>
              <p className="text-slate-600 mt-2">
                Detailed analysis and impact assessment
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleReject}
              className="border-red-200 text-red-700 hover:bg-red-50"
            >
              Reject
            </Button>
            <Button 
              onClick={handleApprove}
              className="bg-green-600 hover:bg-green-700"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Approve
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scenario Overview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{scenario.name}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant={scenario.status === 'active' ? 'default' : 'secondary'}>
                    {scenario.status.toUpperCase()}
                  </Badge>
                  <Badge variant={scenario.riskLevel === 'high' ? 'destructive' : 'default'}>
                    {scenario.riskLevel.toUpperCase()} RISK
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Description</h3>
                <p className="text-slate-600">{scenario.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-slate-600">Margin Impact</p>
                  <p className={`text-2xl font-bold ${scenario.impact.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                    {scenario.impact}
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-slate-600">Affected Merchants</p>
                  <p className="text-2xl font-bold text-slate-900">{scenario.affectedMerchants}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-slate-600">Financial Impact</p>
                  <p className={`text-2xl font-bold ${scenario.estimatedLoss ? 'text-red-600' : 'text-green-600'}`}>
                    {scenario.estimatedLoss || scenario.estimatedGain}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Mitigation Strategy</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">{scenario.mitigation}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scenario Details */}
          <Card>
            <CardHeader>
              <CardTitle>Scenario Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Created Date</p>
                <p className="text-slate-900">{scenario.createdDate}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-600">Last Modified</p>
                <p className="text-slate-900">{scenario.lastModified}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-600">Risk Assessment</p>
                <div className="flex items-center gap-2 mt-1">
                  <AlertTriangle className={`w-4 h-4 ${scenario.riskLevel === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
                  <span className="capitalize">{scenario.riskLevel} Risk</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button 
                  onClick={() => navigate(`/scenario-editor?id=${scenario.id}`)}
                  variant="outline" 
                  className="w-full mb-2"
                >
                  Edit Scenario
                </Button>
                <Button 
                  onClick={() => {
                    toast.success("Simulation Started", {
                      description: "Running scenario simulation..."
                    });
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run Simulation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ScenarioReview;
