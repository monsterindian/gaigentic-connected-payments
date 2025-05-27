
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CheckCircle, AlertTriangle, Clock, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const AnomalyResolution = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const anomalyId = searchParams.get('id');
  
  const [anomaly, setAnomaly] = useState<any>(null);
  const [resolutionType, setResolutionType] = useState("");
  const [resolutionNotes, setResolutionNotes] = useState("");

  useEffect(() => {
    const mockAnomalies = {
      "1": {
        id: 1,
        feeType: "Cross-Border Adjustment Penalty",
        amount: "$2,847.50",
        description: "Unrecognized penalty line - verify against latest Mastercard bulletin",
        severity: "high",
        impact: "Medium"
      },
      "2": {
        id: 2,
        feeType: "Network Assessment Fee Variance",
        amount: "$1,203.25",
        description: "Rate mismatch: invoiced 0.14% vs model 0.12%",
        severity: "medium",
        impact: "Low"
      },
      "3": {
        id: 3,
        feeType: "Processing Integrity Fee",
        amount: "$856.00",
        description: "New fee code not in pricing model - requires review",
        severity: "high",
        impact: "High"
      }
    };
    
    const data = mockAnomalies[anomalyId as keyof typeof mockAnomalies];
    if (data) {
      setAnomaly(data);
    }
  }, [anomalyId]);

  const handleResolve = () => {
    if (!resolutionType) {
      toast.error("Resolution Type Required", {
        description: "Please select a resolution type before proceeding"
      });
      return;
    }

    toast.success("Anomaly Resolved", {
      description: `${anomaly?.feeType} has been marked as resolved - ${resolutionType}`
    });
    navigate('/scheme-cost');
  };

  if (!anomaly) {
    return (
      <Layout>
        <DashboardHeader />
        <div className="p-6">
          <p>Anomaly not found</p>
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
              onClick={() => navigate('/scheme-cost')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Scheme Cost
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                Resolve Anomaly
              </h1>
              <p className="text-slate-600 mt-2">
                Complete the resolution process for this pricing discrepancy
              </p>
            </div>
          </div>
          <Button 
            onClick={handleResolve}
            className="bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark as Resolved
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resolution Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Resolution Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Anomaly Summary</h3>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{anomaly.feeType}</h4>
                    <Badge variant={anomaly.severity === 'high' ? 'destructive' : 'secondary'}>
                      {anomaly.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{anomaly.description}</p>
                  <p className="text-lg font-semibold text-red-600">{anomaly.amount}</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Resolution Type
                </label>
                <Select value={resolutionType} onValueChange={setResolutionType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resolution type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accepted">Accept Charge - Update Model</SelectItem>
                    <SelectItem value="disputed">Dispute with Scheme</SelectItem>
                    <SelectItem value="model-error">Correct Internal Model</SelectItem>
                    <SelectItem value="one-time">One-time Exception</SelectItem>
                    <SelectItem value="investigation">Requires Further Investigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Resolution Notes
                </label>
                <Textarea
                  value={resolutionNotes}
                  onChange={(e) => setResolutionNotes(e.target.value)}
                  placeholder="Provide detailed notes about the resolution, actions taken, or follow-up required..."
                  rows={6}
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Action Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Anomaly Detected</p>
                    <p className="text-xs text-slate-600">Auto-detection system</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Under Review</p>
                    <p className="text-xs text-slate-600">Manual verification</p>
                    <p className="text-xs text-slate-500">1 hour ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Resolution in Progress</p>
                    <p className="text-xs text-slate-600">Current status</p>
                    <p className="text-xs text-slate-500">Now</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-medium text-slate-900 mb-2">Next Steps</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Complete resolution form</li>
                  <li>• Update pricing model if needed</li>
                  <li>• Generate resolution report</li>
                  <li>• Archive case documentation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AnomalyResolution;
