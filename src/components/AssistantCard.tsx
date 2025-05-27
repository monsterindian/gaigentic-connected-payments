
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, LucideIcon } from "lucide-react";

interface AssistantCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  status: "active" | "beta" | "coming-soon";
  onClick: () => void;
  gradient: string;
}

export function AssistantCard({ 
  title, 
  description, 
  icon: Icon, 
  features, 
  status, 
  onClick,
  gradient 
}: AssistantCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    beta: "bg-blue-100 text-blue-800",
    "coming-soon": "bg-gray-100 text-gray-800"
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-xl ${gradient} flex items-center justify-center mb-4`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <Badge className={statusColors[status]}>
            {status === "coming-soon" ? "Coming Soon" : status.toUpperCase()}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
        <CardDescription className="text-slate-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              {feature}
            </div>
          ))}
        </div>
        
        <Button 
          onClick={onClick}
          className="w-full group-hover:bg-blue-700 transition-colors"
          disabled={status === "coming-soon"}
        >
          Launch Assistant
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
