"use client"

import { Sparkles, Bot, LineChart, Lightbulb, FileText, Target, Zap } from "lucide-react"

export function AIShowcase() {
  const aiTools = [
    {
      icon: Bot,
      name: "AI Risk Intelligence",
      description: "Automated risk detection using Claude to analyze project schedules, dependencies, and constraints before they surface as blockers",
      use: "20% reduction in delivery delays"
    },
    {
      icon: Sparkles,
      name: "Executive Communication Automation",
      description: "AI-assisted executive reporting and stakeholder communication pipelines, transforming raw data into narrative-driven insights",
      use: "40% faster reporting cycles"
    },
    {
      icon: FileText,
      name: "AI Workflow Orchestration",
      description: "End-to-end AI workflow design from requirements gathering to delivery tracking, integrating Claude, automation tools, and BI systems",
      use: "Daily operational execution"
    },
    {
      icon: Lightbulb,
      name: "Operational Intelligence Systems",
      description: "Real-time dashboards and analytics powered by AI-enhanced data pipelines, prompt engineering, and workflow automation",
      use: "Enterprise-wide visibility"
    }
  ]

  const workflow = [
    {
      step: "1",
      title: "Risk Analysis",
      desc: "Use Claude to analyze project schedules and identify potential risks before they surface",
      icon: Target
    },
    {
      step: "2",
      title: "Requirements",
      desc: "Apply reverse prompting to extract clearer business requirements from stakeholders",
      icon: Lightbulb
    },
    {
      step: "3",
      title: "Status Reporting",
      desc: "AI-assisted drafting to accelerate narrative summaries in weekly reports",
      icon: FileText
    },
    {
      step: "4",
      title: "Presentations",
      desc: "Generate decks using Gamma.ai, freeing up focus for content over formatting",
      icon: Sparkles
    }
  ]

  return (
    <section id="ai-toolkit" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Workflow
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            AI <span className="gradient-text">Operational Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't just tools I use—they're enterprise AI capabilities I've operationalized.
            From risk intelligence to workflow automation, I deploy AI systems that improve execution at scale.
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {aiTools.map((tool, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
              <p className="text-xs text-primary font-medium">{tool.use}</p>
            </div>
          ))}
        </div>

        {/* AI Workflow */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-12">
            AI-Enhanced PM Workflow
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">STEP {item.step}</div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real Impact - Highlight Box */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Built Production AI System: Code Health Monitor</h3>
              <p className="text-muted-foreground mb-4">
                Architected and deployed an AI-powered code analysis platform integrating Claude API, Azure DevOps, and real-time analytics.
                Reduced code review time from 2 hours to 5 minutes. Adopted team-wide across active projects.
              </p>
              <p className="text-sm text-primary font-medium">Team-wide adoption • 96% time reduction • Production deployment</p>
            </div>
          </div>
        </div>

        {/* Metrics Highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
            <div className="text-4xl font-bold gradient-text mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Faster reporting with AI-assisted drafting</div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div className="text-4xl font-bold gradient-text mb-2">20%</div>
            <div className="text-sm text-muted-foreground">Reduction in delivery delays via AI risk analysis</div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-primary/10 border border-pink-500/20">
            <div className="text-4xl font-bold gradient-text mb-2">Daily</div>
            <div className="text-sm text-muted-foreground">Claude usage for project decisions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
