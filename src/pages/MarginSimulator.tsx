
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingDown, AlertTriangle, Play, Edit, Eye, CheckCircle, Calculator } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const MarginSimulator = () => {
  const [scenarios, setScenarios] = useState([
    {
      id: 1,
      name: "EU Interchange Rate Increase",
      description: "+0.1% increase in interchange fees for EU transactions",
      impact: "-0.7%",
      affectedMerchants: 89,
      estimatedLoss: "$1.2M",
      mitigation: "Adjust markup from 0.4% to 0.5% to recover loss",
      status: "active"
    },
    {
      id: 2,
      name: "High-Risk Segment Volume Drop",
      description: "20% volume decrease in high-risk merchant segment",
      impact: "-0.3%",
      affectedMerchants: 23,
      estimatedLoss: "$450K",
      mitigation: "Focus retention efforts on top 10 high-value accounts",
      status: "simulated"
    },
    {
      id: 3,
      name: "Cross-Border Fee Adjustment",
      description: "New regulatory requirements for cross-border transactions",
      impact: "+0.2%",
      affectedMerchants: 156,
      estimatedGain: "$780K",
      mitigation: "Opportunity to increase competitive advantage",
      status: "draft"
    }
  ]);

  const [simulationsRun, setSimulationsRun] = useState(142);

  const handleNewSimulation = () => {
    toast.success("New Simulation", {
      description: "Opening scenario creation wizard..."
    });
    console.log("Creating new simulation scenario");
  };

  const handleEditScenario = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    toast.info("Edit Scenario", {
      description: `Opening editor for "${scenario?.name}"`
    });
    console.log(`Editing scenario ${scenarioId}:`, scenario);
  };

  const handleReviewScenario = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    toast.info("Review Scenario", {
      description: `Reviewing details for "${scenario?.name}"`
    });
    console.log(`Reviewing scenario ${scenarioId}:`, scenario);
  };

  const handleRunScenario = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    
    // Update simulation count
    setSimulationsRun(prev => prev + 1);
    
    // Update scenario status to simulated if it was draft
    if (scenario?.status === "draft") {
      setScenarios(prev => prev.map(s => 
        s.id === scenarioId ? { ...s, status: "simulated" } : s
      ));
    }
    
    toast.success("Simulation Complete", {
      description: `"${scenario?.name}" has been executed successfully`
    });
    console.log(`Running simulation for scenario ${scenarioId}:`, scenario);
  };

  const handleResolveScenario = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    
    // Update scenario status to resolved
    setScenarios(prev => prev.map(s => 
      s.id === scenarioId ? { ...s, status: "resolved" } : s
    ));
    
    toast.success("Scenario Resolved", {
      description: `"${scenario?.name}" has been marked as resolved`
    });
    console.log(`Resolving scenario ${scenarioId}:`, scenario);
  };

  const handleApplyMitigation = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    toast.success("Mitigation Applied", {
      description: `Applied mitigation strategy for "${scenario?.name}"`
    });
    console.log(`Applying mitigation for scenario ${scenarioId}:`, scenario?.mitigation);
  };

  const handleCalculateFees = (scenarioId: number) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    toast.info("Fee Calculation", {
      description: `Calculating detailed fee impact for "${scenario?.name}"`
    });
    console.log(`Calculating fees for scenario ${scenarioId}:`, scenario);
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              Margin Impact Simulator
            </h1>
            <p className="text-slate-600 mt-2">
              Model the effects of fee structure changes and market scenarios on profit margins
            </p>
          </div>
          <Button 
            onClick={handleNewSimulation}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Play className="w-4 h-4 mr-2" />
            New Simulation
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Active Scenarios</p>
                  <p className="text-2xl font-bold text-slate-900">{scenarios.filter(s => s.status === 'active').length}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Risk Exposure</p>
                  <p className="text-2xl font-bold text-slate-900">$3.4M</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Potential Upside</p>
                  <p className="text-2xl font-bold text-slate-900">$2.1M</p>
                </div>
                <TrendingDown className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Simulations Run</p>
                  <p className="text-2xl font-bold text-slate-900">{simulationsRun}</p>
                </div>
                <Play className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scenarios List */}
        <Card>
          <CardHeader>
            <CardTitle>Impact Scenarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scenarios.map((scenario) => (
                <div key={scenario.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{scenario.name}</h3>
                        <Badge variant={scenario.status === 'active' ? 'default' : scenario.status === 'simulated' ? 'secondary' : scenario.status === 'resolved' ? 'default' : 'outline'}>
                          {scenario.status.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-3">{scenario.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-slate-600">Margin Impact</p>
                          <p className={`text-lg font-semibold ${scenario.impact.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {scenario.impact}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Affected Merchants</p>
                          <p className="text-lg font-semibold text-slate-900">{scenario.affectedMerchants}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Financial Impact</p>
                          <p className={`text-lg font-semibold ${scenario.estimatedGain ? 'text-green-600' : 'text-red-600'}`}>
                            {scenario.estimatedLoss || scenario.estimatedGain}
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg mb-3">
                        <p className="text-sm font-medium text-blue-800 mb-1">Recommended Action:</p>
                        <p className="text-sm text-blue-700">{scenario.mitigation}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleEditScenario(scenario.id)}
                          className="hover:bg-slate-100"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleReviewScenario(scenario.id)}
                          className="hover:bg-slate-100"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Review
                        </Button>
                        <Button 
                          size="sm" 
                          onClick={() => handleRunScenario(scenario.id)}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <Play className="w-3 h-3 mr-1" />
                          Run
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleResolveScenario(scenario.id)}
                          className="hover:bg-green-50 border-green-200 text-green-700"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Resolve
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleApplyMitigation(scenario.id)}
                          className="hover:bg-blue-50 border-blue-200 text-blue-700"
                        >
                          Apply
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCalculateFees(scenario.id)}
                          className="hover:bg-orange-50 border-orange-200 text-orange-700"
                        >
                          <Calculator className="w-3 h-3 mr-1" />
                          Calculate Fees
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MarginSimulator;
