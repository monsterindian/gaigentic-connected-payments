
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="hover:bg-slate-100" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                AI Financial Agents
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                  ✨ Powered by AI
                </Badge>
              </h1>
              <p className="text-slate-600">Your intelligent assistants for financial optimization</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative hover:bg-slate-100">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
