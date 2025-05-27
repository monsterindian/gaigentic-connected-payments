
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageSquare, Bot, Send, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AgentChat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      agent: "System",
      content: "Hello! I'm your AI assistant. You can ask all three agents any questions about your financial operations.",
      time: "Just now"
    }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {
      type: "user",
      agent: "You",
      content: message,
      time: "Just now"
    }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "ai",
        agent: "Multi-Agent Response",
        content: `Based on your query "${message}", here's what our agents found:

🔍 **Scheme Cost Agent**: I've analyzed recent invoices and found 3 similar patterns that might be relevant.

💰 **Pricing Agent**: This relates to pricing optimization opportunities worth approximately $12K monthly.

📊 **Margin Agent**: The scenario analysis suggests this could impact margins by 2.3% in favorable market conditions.

Would you like me to dive deeper into any specific aspect?`,
        time: "Just now"
      }]);
    }, 1000);

    setMessage("");
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                AI Agent Consultation
              </h1>
              <p className="text-slate-600 mt-2">
                Chat with all your AI agents for cross-functional insights
              </p>
            </div>
          </div>
        </div>

        {/* Agent Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Scheme Cost Agent</p>
                  <p className="text-sm text-green-600">● Online</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Pricing Agent</p>
                  <p className="text-sm text-green-600">● Online</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Margin Agent</p>
                  <p className="text-sm text-green-600">● Online</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Interface */}
        <Card className="h-96">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              Multi-Agent Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-100 text-slate-900'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      {msg.type === 'ai' && <Bot className="w-3 h-3" />}
                      <span className="text-xs font-medium">{msg.agent}</span>
                      <span className="text-xs opacity-70">{msg.time}</span>
                    </div>
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask your AI agents anything..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
              />
              <Button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Questions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 text-left"
                onClick={() => setMessage("What anomalies have been detected this week?")}
              >
                <div>
                  <p className="font-medium">What anomalies have been detected this week?</p>
                  <p className="text-sm text-slate-600">Get recent anomaly summary</p>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 text-left"
                onClick={() => setMessage("Show me pricing optimization opportunities")}
              >
                <div>
                  <p className="font-medium">Show me pricing optimization opportunities</p>
                  <p className="text-sm text-slate-600">Find revenue improvements</p>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 text-left"
                onClick={() => setMessage("What's the margin impact of recent changes?")}
              >
                <div>
                  <p className="font-medium">What's the margin impact of recent changes?</p>
                  <p className="text-sm text-slate-600">Analyze recent margin effects</p>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start h-auto p-4 text-left"
                onClick={() => setMessage("Predict next month's scheme costs")}
              >
                <div>
                  <p className="font-medium">Predict next month's scheme costs</p>
                  <p className="text-sm text-slate-600">Get AI cost forecasts</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AgentChat;
