
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Save, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const ScenarioEditor = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scenarioId = searchParams.get('id');
  
  const [scenario, setScenario] = useState({
    name: "",
    description: "",
    impact: "",
    affectedMerchants: 0,
    estimatedLoss: "",
    estimatedGain: "",
    mitigation: "",
    status: "draft"
  });

  useEffect(() => {
    // In a real app, this would fetch from an API
    if (scenarioId) {
      // Mock data based on the scenario ID
      const mockScenarios = {
        "1": {
          name: "EU Interchange Rate Increase",
          description: "+0.1% increase in interchange fees for EU transactions",
          impact: "-0.7",
          affectedMerchants: 89,
          estimatedLoss: "1200000",
          estimatedGain: "",
          mitigation: "Adjust markup from 0.4% to 0.5% to recover loss",
          status: "active"
        },
        "2": {
          name: "High-Risk Segment Volume Drop",
          description: "20% volume decrease in high-risk merchant segment",
          impact: "-0.3",
          affectedMerchants: 23,
          estimatedLoss: "450000",
          estimatedGain: "",
          mitigation: "Focus retention efforts on top 10 high-value accounts",
          status: "simulated"
        }
      };
      
      const data = mockScenarios[scenarioId as keyof typeof mockScenarios];
      if (data) {
        setScenario(data);
      }
    }
  }, [scenarioId]);

  const handleSave = () => {
    toast.success("Scenario Saved", {
      description: "Your changes have been saved successfully"
    });
    navigate('/margin-simulator');
  };

  const formatCurrency = (value: string) => {
    const num = parseFloat(value);
    return num ? `$${(num / 1000000).toFixed(1)}M` : '$0';
  };

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
                <Edit className="w-8 h-8 text-blue-600" />
                {scenarioId ? 'Edit Scenario' : 'Create New Scenario'}
              </h1>
              <p className="text-slate-600 mt-2">
                Configure scenario parameters and impact modeling
              </p>
            </div>
          </div>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            Save Scenario
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Scenario Name</Label>
                <Input
                  id="name"
                  value={scenario.name}
                  onChange={(e) => setScenario(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter scenario name"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={scenario.description}
                  onChange={(e) => setScenario(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe the scenario"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={scenario.status} onValueChange={(value) => setScenario(prev => ({ ...prev, status: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="simulated">Simulated</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Impact Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Impact Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="impact">Margin Impact (%)</Label>
                <Input
                  id="impact"
                  type="number"
                  step="0.1"
                  value={scenario.impact}
                  onChange={(e) => setScenario(prev => ({ ...prev, impact: e.target.value }))}
                  placeholder="e.g., -0.7"
                />
              </div>
              
              <div>
                <Label htmlFor="merchants">Affected Merchants</Label>
                <Input
                  id="merchants"
                  type="number"
                  value={scenario.affectedMerchants}
                  onChange={(e) => setScenario(prev => ({ ...prev, affectedMerchants: parseInt(e.target.value) || 0 }))}
                  placeholder="Number of merchants"
                />
              </div>
              
              <div>
                <Label htmlFor="financial">Financial Impact ($)</Label>
                <Input
                  id="financial"
                  type="number"
                  value={scenario.estimatedLoss || scenario.estimatedGain}
                  onChange={(e) => {
                    const value = e.target.value;
                    const impact = parseFloat(scenario.impact);
                    if (impact < 0) {
                      setScenario(prev => ({ ...prev, estimatedLoss: value, estimatedGain: "" }));
                    } else {
                      setScenario(prev => ({ ...prev, estimatedGain: value, estimatedLoss: "" }));
                    }
                  }}
                  placeholder="Financial impact in dollars"
                />
                <p className="text-sm text-slate-600 mt-1">
                  Current: {formatCurrency(scenario.estimatedLoss || scenario.estimatedGain)}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mitigation Strategy */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Mitigation Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="mitigation">Recommended Actions</Label>
              <Textarea
                id="mitigation"
                value={scenario.mitigation}
                onChange={(e) => setScenario(prev => ({ ...prev, mitigation: e.target.value }))}
                placeholder="Enter mitigation strategy and recommended actions"
                rows={4}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ScenarioEditor;
