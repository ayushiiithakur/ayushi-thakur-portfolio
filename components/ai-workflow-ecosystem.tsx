"use client"

import { useState } from "react"
import { Brain, TrendingUp, Users, FileText, Target, AlertTriangle, BarChart3, Code, Zap, Clock, CheckCircle, MessageSquare, X, ArrowRight } from "lucide-react"

interface WorkflowNode {
  id: string
  title: string
  icon: any
  position: { x: number; y: number }
  color: string
  problem: string
  aiWorkflow: string[]
  tools: string[]
  outcome: string
  efficiency: string
  flowSteps: string[]
}

const WORKFLOW_NODES: WorkflowNode[] = [
  {
    id: "risk-analysis",
    title: "Risk Intelligence",
    icon: AlertTriangle,
    position: { x: 50, y: 10 },
    color: "from-red-500 to-orange-500",
    problem: "Manual risk identification misses cross-project dependencies and emerges too late",
    aiWorkflow: [
      "Extract project schedules, dependencies, and resource allocations from Jira/Azure DevOps",
      "Feed consolidated data to Claude for cross-project conflict analysis",
      "AI identifies timeline misalignments, resource bottlenecks, and dependency risks",
      "Generate prioritized risk report with severity scoring and mitigation suggestions"
    ],
    tools: ["Claude AI", "Jira API", "Azure DevOps", "Power BI"],
    outcome: "20% reduction in delivery delays through proactive risk detection",
    efficiency: "Weekly risk reviews reduced from 3 hours to 20 minutes",
    flowSteps: [
      "Project Data (Jira/Azure)",
      "Claude Analysis",
      "Risk Prioritization",
      "Mitigation Plan",
      "Stakeholder Alert"
    ]
  },
  {
    id: "executive-reporting",
    title: "Executive Communication",
    icon: TrendingUp,
    position: { x: 85, y: 30 },
    color: "from-blue-500 to-cyan-500",
    problem: "Status reports consume 3-4 hours weekly, inconsistent narrative quality across PMs",
    aiWorkflow: [
      "Automated extraction of sprint data, blockers, and progress metrics",
      "Claude analyzes trends, identifies key highlights and concerns",
      "Generate executive-ready narrative with business impact focus",
      "Integrate with Power BI dashboards for visual context",
      "Auto-generate presentation decks via Gamma.ai"
    ],
    tools: ["Claude AI", "Jira API", "Power BI", "Gamma.ai"],
    outcome: "40% faster reporting cycles, improved executive visibility",
    efficiency: "Report generation: 3-4 hours → 15 minutes",
    flowSteps: [
      "Sprint Data Extract",
      "AI Summarization",
      "Executive Narrative",
      "Power BI Integration",
      "Auto Deck Generation"
    ]
  },
  {
    id: "stakeholder-mgmt",
    title: "Stakeholder Intelligence",
    icon: Users,
    position: { x: 85, y: 70 },
    color: "from-purple-500 to-pink-500",
    problem: "Stakeholder communication reactive, misaligned expectations, delayed escalations",
    aiWorkflow: [
      "Track stakeholder inputs, feedback, and concerns across channels",
      "AI identifies sentiment patterns, emerging conflicts, and alignment gaps",
      "Generate personalized stakeholder updates tailored to each audience",
      "Recommend escalation timing and communication strategy"
    ],
    tools: ["Claude AI", "Email/Slack Analysis", "Sentiment Tracking"],
    outcome: "Proactive stakeholder management, reduced escalations",
    efficiency: "Stakeholder communication time reduced by 35%",
    flowSteps: [
      "Stakeholder Inputs",
      "Sentiment Analysis",
      "Personalized Updates",
      "Alignment Check",
      "Escalation Triggers"
    ]
  },
  {
    id: "requirements",
    title: "Requirements Clarity",
    icon: FileText,
    position: { x: 50, y: 90 },
    color: "from-green-500 to-emerald-500",
    problem: "Vague requirements lead to mid-sprint scope changes and rework",
    aiWorkflow: [
      "Apply reverse prompting: AI generates clarifying questions to expose gaps",
      "Analyze requirement documents for ambiguity, missing acceptance criteria",
      "Generate structured user stories with clear success metrics",
      "Identify hidden dependencies and edge cases"
    ],
    tools: ["Claude AI", "Prompt Engineering", "Confluence"],
    outcome: "Fewer mid-sprint scope changes, clearer acceptance criteria",
    efficiency: "Requirements refinement 50% faster",
    flowSteps: [
      "Raw Requirements",
      "AI Gap Analysis",
      "Clarifying Questions",
      "Structured Stories",
      "Stakeholder Validation"
    ]
  },
  {
    id: "sprint-planning",
    title: "Sprint Optimization",
    icon: Target,
    position: { x: 15, y: 70 },
    color: "from-yellow-500 to-orange-500",
    problem: "Sprint planning reactive, capacity miscalculations, poor velocity forecasting",
    aiWorkflow: [
      "Analyze historical velocity data and team capacity patterns",
      "AI forecasts sprint capacity based on team availability, complexity, dependencies",
      "Generate optimal sprint backlog with load balancing recommendations",
      "Identify potential bottlenecks before sprint starts"
    ],
    tools: ["Claude AI", "Jira", "Historical Data Analysis"],
    outcome: "Improved sprint predictability, better capacity utilization",
    efficiency: "Sprint planning time reduced by 40%",
    flowSteps: [
      "Historical Velocity",
      "Capacity Forecast",
      "Backlog Optimization",
      "Load Balancing",
      "Sprint Commitment"
    ]
  },
  {
    id: "meeting-intelligence",
    title: "Meeting Intelligence",
    icon: MessageSquare,
    position: { x: 15, y: 30 },
    color: "from-indigo-500 to-purple-500",
    problem: "Meeting notes scattered, action items lost, decisions not documented",
    aiWorkflow: [
      "Extract meeting notes, discussion points, and decisions",
      "AI identifies action items, owners, deadlines, and open questions",
      "Generate structured meeting summary with decision log",
      "Auto-populate project tracking tools with action items"
    ],
    tools: ["Claude AI", "Meeting Transcripts", "Jira Integration"],
    outcome: "Zero lost action items, complete decision history",
    efficiency: "Meeting follow-up time reduced by 60%",
    flowSteps: [
      "Meeting Notes",
      "AI Extraction",
      "Action Items",
      "Decision Log",
      "Auto-Sync to Jira"
    ]
  },
  {
    id: "code-health",
    title: "Code Health Monitor",
    icon: Code,
    position: { x: 25, y: 50 },
    color: "from-cyan-500 to-blue-500",
    problem: "Code quality issues detected too late, manual reviews time-consuming",
    aiWorkflow: [
      "Automated repository scanning across Azure DevOps",
      "Claude analyzes code context and generates intelligent fix suggestions",
      "Real-time health scoring with A-F grading system",
      "Voice-enabled queries for hands-free code quality insights"
    ],
    tools: ["Claude AI", "Azure DevOps", "Python", "React"],
    outcome: "96% time reduction in code reviews (2h → 5min)",
    efficiency: "Team-wide adoption, proactive technical debt management",
    flowSteps: [
      "Repository Scan",
      "Code Analysis",
      "AI Fix Suggestions",
      "Health Scoring",
      "Developer Dashboard"
    ]
  },
  {
    id: "bi-dashboards",
    title: "Operational Intelligence",
    icon: BarChart3,
    position: { x: 75, y: 50 },
    color: "from-pink-500 to-red-500",
    problem: "Data scattered across systems, manual reporting, delayed insights",
    aiWorkflow: [
      "Consolidate data from multiple sources (Jira, Azure, ERP, CRM)",
      "AI-enhanced data pipelines with automated KPI calculations",
      "Real-time Power BI/Tableau dashboards with drill-down capabilities",
      "Claude generates narrative insights from data trends"
    ],
    tools: ["Power BI", "Tableau", "SQL", "Claude AI"],
    outcome: "30% reduction in manual reporting, real-time executive visibility",
    efficiency: "20+ dashboards deployed across global teams",
    flowSteps: [
      "Multi-Source Data",
      "ETL Pipeline",
      "KPI Calculation",
      "Dashboard Deploy",
      "AI Insights Layer"
    ]
  }
]

export function AIWorkflowEcosystem() {
  const [selectedNode, setSelectedNode] = useState<WorkflowNode | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI Workflow Ecosystem
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How I <span className="gradient-text">Work With AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An AI-native operational workflow ecosystem. This isn't about tools—it's about
            <span className="text-foreground font-medium"> orchestrating AI across execution systems</span> to accelerate delivery.
          </p>
        </div>

        {/* Central Visualization */}
        <div className="relative mb-20">
          {/* Center Hub */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute inset-0 -m-4 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-0 -m-8 rounded-full border-2 border-purple-500/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

              {/* Center node */}
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center p-6">
                  <Brain className="w-12 h-12 text-primary mb-2" />
                  <div className="text-center">
                    <div className="text-sm font-semibold">AI-Powered</div>
                    <div className="text-lg font-bold gradient-text">PM Workflow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Nodes - Circular Layout */}
          <div className="relative h-96 max-w-5xl mx-auto">
            {WORKFLOW_NODES.map((node) => {
              const Icon = node.icon
              const isHovered = hoveredNode === node.id
              const isSelected = selectedNode?.id === node.id

              return (
                <div
                  key={node.id}
                  className="absolute transition-all duration-300 cursor-pointer"
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(node)}
                >
                  {/* Connection line to center */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: '200px',
                      height: '200px',
                      transform: 'translate(-50%, -50%)',
                      zIndex: -1
                    }}
                  >
                    <line
                      x1="100"
                      y1="100"
                      x2={`${100 + (50 - node.position.x) * 2}`}
                      y2={`${100 + (50 - node.position.y) * 2}`}
                      stroke="currentColor"
                      strokeWidth={isHovered || isSelected ? "2" : "1"}
                      strokeDasharray="4 4"
                      className={`transition-all ${isHovered || isSelected ? 'text-primary' : 'text-border'}`}
                    />
                  </svg>

                  {/* Node */}
                  <div className={`relative group transition-all duration-300 ${isHovered || isSelected ? 'scale-110' : ''}`}>
                    {/* Glow effect */}
                    {(isHovered || isSelected) && (
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${node.color} blur-xl opacity-50`}></div>
                    )}

                    {/* Node card */}
                    <div className={`relative w-32 h-32 rounded-2xl bg-background/80 backdrop-blur border-2 transition-all ${
                      isSelected ? 'border-primary shadow-2xl' :
                      isHovered ? 'border-primary/50 shadow-xl' :
                      'border-border shadow-lg'
                    } p-4 flex flex-col items-center justify-center text-center`}>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center mb-2`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-xs font-semibold leading-tight">{node.title}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Instruction text */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              <Zap className="w-4 h-4 inline-block mr-1 text-primary" />
              Click any workflow node to explore how AI operationalizes that area
            </p>
          </div>
        </div>

        {/* Expanded Node Detail Panel */}
        {selectedNode && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="max-w-4xl w-full bg-background rounded-2xl border border-border shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur border-b border-border p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedNode.color} flex items-center justify-center`}>
                    <selectedNode.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedNode.title}</h3>
                    <p className="text-sm text-muted-foreground">AI-Powered Workflow</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">

                {/* Problem */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 rounded bg-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    <h4 className="font-semibold">Operational Problem</h4>
                  </div>
                  <p className="text-muted-foreground pl-8">{selectedNode.problem}</p>
                </div>

                {/* AI Workflow */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-purple-400" />
                    </div>
                    <h4 className="font-semibold">AI Workflow</h4>
                  </div>
                  <div className="space-y-3 pl-8">
                    {selectedNode.aiWorkflow.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">{idx + 1}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Flow Visualization */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="font-semibold">Data Flow</h4>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-6 border border-primary/10">
                    <div className="flex flex-col space-y-4">
                      {selectedNode.flowSteps.map((step, idx) => (
                        <div key={idx}>
                          <div className="flex items-center space-x-3">
                            <div className="px-4 py-2 bg-background rounded-lg border border-border text-sm font-medium flex-1 text-center">
                              {step}
                            </div>
                          </div>
                          {idx < selectedNode.flowSteps.length - 1 && (
                            <div className="flex justify-center py-2">
                              <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <h4 className="font-semibold">Tools & Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-8">
                    {selectedNode.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <h4 className="font-semibold text-sm">Business Outcome</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedNode.outcome}</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <h4 className="font-semibold text-sm">Efficiency Gain</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedNode.efficiency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="p-6 bg-background rounded-xl border border-border text-center hover:border-primary/50 transition-all hover:shadow-xl group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">8</div>
            <div className="text-sm text-muted-foreground">AI-Powered Workflows</div>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border text-center hover:border-primary/50 transition-all hover:shadow-xl group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">40%+</div>
            <div className="text-sm text-muted-foreground">Average Efficiency Gain</div>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border text-center hover:border-primary/50 transition-all hover:shadow-xl group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">Daily</div>
            <div className="text-sm text-muted-foreground">AI Integration Usage</div>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border text-center hover:border-primary/50 transition-all hover:shadow-xl group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-sm text-muted-foreground">PM Processes Enhanced</div>
          </div>
        </div>
      </div>
    </section>
  )
}
