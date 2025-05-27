
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "anomaly",
    title: "New fee code detected in Mastercard invoice",
    description: "Cross-Border Adjustment Penalty - $2,847 impact",
    time: "2 hours ago",
    status: "warning",
    icon: AlertTriangle
  },
  {
    id: 2,
    type: "pricing",
    title: "Pricing optimization completed",
    description: "EU merchant segment - 0.3% margin improvement",
    time: "4 hours ago",
    status: "success",
    icon: CheckCircle
  },
  {
    id: 3,
    type: "simulation",
    title: "Margin impact simulation requested",
    description: "Interchange rate change scenario - High priority",
    time: "6 hours ago",
    status: "pending",
    icon: Clock
  },
  {
    id: 4,
    type: "reconciliation",
    title: "Monthly scheme reconciliation completed",
    description: "97% accuracy rate - 12 discrepancies resolved",
    time: "1 day ago",
    status: "success",
    icon: TrendingUp
  }
];

export function RecentActivity() {
  const statusStyles = {
    warning: "bg-amber-100 text-amber-800",
    success: "bg-green-100 text-green-800",
    pending: "bg-blue-100 text-blue-800",
    error: "bg-red-100 text-red-800"
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-slate-900 text-sm">{activity.title}</p>
                    <Badge className={`${statusStyles[activity.status]} text-xs`}>
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{activity.description}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
