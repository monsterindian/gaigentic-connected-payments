
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, DollarSign, FileText } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const SchemeCost = () => {
  const anomalies = [
    {
      id: 1,
      feeType: "Cross-Border Adjustment Penalty",
      amount: "$2,847.50",
      description: "Unrecognized penalty line - verify against latest Mastercard bulletin",
      severity: "high",
      impact: "Medium"
    },
    {
      id: 2,
      feeType: "Network Assessment Fee Variance",
      amount: "$1,203.25",
      description: "Rate mismatch: invoiced 0.14% vs model 0.12%",
      severity: "medium",
      impact: "Low"
    },
    {
      id: 3,
      feeType: "Processing Integrity Fee",
      amount: "$856.00",
      description: "New fee code not in pricing model - requires review",
      severity: "high",
      impact: "High"
    }
  ];

  const handleReview = (anomaly: any) => {
    toast.success("Review Started", {
      description: `Reviewing ${anomaly.feeType} - ${anomaly.amount}`
    });
  };

  const handleResolve = (anomaly: any) => {
    toast.success("Anomaly Resolved", {
      description: `${anomaly.feeType} has been marked as resolved`
    });
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Search className="w-8 h-8 text-slate-700" />
              Scheme Cost Assistant
            </h1>
            <p className="text-slate-600 mt-2">
              Reconcile card scheme invoices against internal pricing models and identify discrepancies
            </p>
          </div>
          <Button 
            className="bg-slate-700 hover:bg-slate-800"
            onClick={() => toast.success("Upload Ready", { description: "Invoice upload functionality activated" })}
          >
            <FileText className="w-4 h-4 mr-2" />
            Upload Invoice
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-lg border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Anomalies</p>
                  <p className="text-2xl font-bold text-slate-900">23</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Financial Impact</p>
                  <p className="text-2xl font-bold text-slate-900">$12.4K</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Invoices Processed</p>
                  <p className="text-2xl font-bold text-slate-900">847</p>
                </div>
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Accuracy Rate</p>
                  <p className="text-2xl font-bold text-slate-900">97.8%</p>
                </div>
                <Search className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Anomalies List */}
        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <CardTitle className="text-slate-800">Recent Anomalies Detected</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{anomaly.feeType}</h3>
                        <Badge variant={anomaly.severity === 'high' ? 'destructive' : 'secondary'}>
                          {anomaly.severity.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300">
                          {anomaly.impact} Impact
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{anomaly.description}</p>
                      <p className="text-lg font-semibold text-red-600">{anomaly.amount}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-slate-300 hover:bg-slate-100"
                        onClick={() => handleReview(anomaly)}
                      >
                        Review
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-slate-700 hover:bg-slate-800"
                        onClick={() => handleResolve(anomaly)}
                      >
                        Resolve
                      </Button>
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

export default SchemeCost;
