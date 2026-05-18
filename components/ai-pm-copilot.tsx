"use client"

import { useState } from "react"
import { Sparkles, Brain, AlertTriangle, CheckCircle, TrendingUp, Users, Zap, Target, Clock, ArrowRight, Loader2 } from "lucide-react"

interface AnalysisOutput {
  executiveSummary: string
  risks: Array<{ risk: string; severity: "high" | "medium" | "low"; impact: string }>
  actionItems: Array<{ task: string; owner: string; priority: "urgent" | "high" | "medium"; deadline: string }>
  stakeholderMessage: string
  deliveryConfidence: { score: number; factors: Array<{ factor: string; status: "positive" | "negative" | "neutral" }> }
  recommendations: string[]
}

const SAMPLE_SCENARIOS = [
  {
    title: "Sprint Blocker Scenario",
    content: `Team standup notes:
- Backend API delayed by 3 days (dependency on Platform team)
- Frontend waiting on API specs
- QA resource out sick this week
- Stakeholder wants demo Friday but we're behind
- DevOps pipeline breaking intermittently
- New requirements came in yesterday from Product
- Team morale low due to scope creep
- Budget review meeting scheduled for Monday`
  },
  {
    title: "Stakeholder Conflict",
    content: `Meeting notes from project review:
- Finance wants to cut budget by 20%
- Engineering says timeline unrealistic with current scope
- Sales promised features to client that weren't in roadmap
- CEO wants launch moved up 2 weeks
- Design team needs more time for user testing
- Legal concerns about data compliance not addressed
- Marketing needs assets 3 weeks before launch
- No clear decision owner identified`
  },
  {
    title: "Resource Crisis",
    content: `Current situation:
- Senior dev resigned, 2-week notice
- Knowledge transfer incomplete
- Critical features unfinished
- No backup resources available
- Q4 deadline non-negotiable
- Offshore team different timezone causing delays
- Documentation outdated
- Client escalating daily
- Team working weekends already`
  }
]

export function AIPMCopilot() {
  // Pre-load Sprint Blocker scenario with output for immediate value demonstration
  const defaultOutput: AnalysisOutput = {
    executiveSummary: "Critical project blockers identified with backend API dependency causing 3-day delay. Frontend team blocked, QA resource unavailable, and stakeholder demo at risk. Immediate escalation and resource reallocation required to maintain Friday deadline. Scope creep and team morale concerns need executive attention.",

    risks: [
      {
        risk: "Backend API dependency blocking frontend progress",
        severity: "high",
        impact: "3-day delay cascades to entire sprint, threatens Friday demo commitment"
      },
      {
        risk: "QA resource unavailable during critical testing phase",
        severity: "high",
        impact: "Quality validation gap may result in production issues post-deployment"
      },
      {
        risk: "DevOps pipeline instability",
        severity: "medium",
        impact: "Intermittent failures slow deployment cycles, reduce team velocity"
      },
      {
        risk: "Scope creep from new requirements",
        severity: "medium",
        impact: "Team morale declining, timeline pressure increasing, burnout risk"
      }
    ],

    actionItems: [
      {
        task: "Escalate backend API dependency to Platform team lead immediately",
        owner: "Project Manager",
        priority: "urgent",
        deadline: "Today EOD"
      },
      {
        task: "Secure backup QA resource or reschedule testing timeline",
        owner: "Resource Manager",
        priority: "urgent",
        deadline: "Tomorrow 9 AM"
      },
      {
        task: "Schedule stakeholder alignment on Friday demo scope",
        owner: "Project Manager",
        priority: "high",
        deadline: "Tomorrow"
      },
      {
        task: "DevOps to diagnose and fix pipeline stability issues",
        owner: "DevOps Lead",
        priority: "high",
        deadline: "This week"
      },
      {
        task: "Requirements triage: defer non-critical items to next sprint",
        owner: "Product Owner",
        priority: "medium",
        deadline: "This week"
      }
    ],

    stakeholderMessage: `Hi [Stakeholder],

Quick update on our Friday demo:

**Current Status:** We've hit a blocker—our backend API dependency is delayed 3 days by the Platform team, which is blocking frontend progress. Additionally, our QA resource is out sick this week.

**What We're Doing:**
- Escalating the API dependency to Platform leadership today
- Securing backup QA resources
- Re-scoping Friday demo to focus on completed features

**What I Need From You:**
Flexibility on demo scope for Friday, or option to reschedule to Monday with full feature set.

**Recommendation:** Reschedule to Monday for higher-quality demo, or proceed Friday with reduced scope.

Let me know your preference by EOD today so we can adjust sprint priorities accordingly.

Best regards,
[Your name]`,

    deliveryConfidence: {
      score: 62,
      factors: [
        { factor: "Technical readiness", status: "negative" },
        { factor: "Resource availability", status: "negative" },
        { factor: "Stakeholder alignment", status: "neutral" },
        { factor: "Timeline feasibility", status: "negative" },
        { factor: "Team capacity", status: "negative" },
        { factor: "Scope clarity", status: "neutral" }
      ]
    },

    recommendations: [
      "**Immediate escalation required**: Backend API dependency is critical path blocker. Elevate to executive level if Platform team cannot commit to recovery timeline by EOD.",
      "**Scope negotiation**: Friday demo is high-risk with current blockers. Recommend reschedule to Monday or scope reduction to completed features only.",
      "**Resource backup plan**: Identify cross-functional QA resources or postpone testing phase. Current single-point-of-failure is unacceptable for critical sprint.",
      "**Team morale intervention**: Scope creep and timeline pressure creating burnout risk. Schedule retrospective to address process issues and prevent future overcommitment.",
      "**DevOps stability**: Pipeline issues are velocity drain. Allocate dedicated time for infrastructure hardening—short-term investment for long-term gains.",
      "**Requirements governance**: Implement change control process. New requirements mid-sprint are root cause of morale issues and timeline pressure."
    ]
  }

  const [input, setInput] = useState(SAMPLE_SCENARIOS[0].content)
  const [output, setOutput] = useState<AnalysisOutput | null>(defaultOutput)
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState("")
  const [activeTab, setActiveTab] = useState(0)

  const loadSample = (scenario: typeof SAMPLE_SCENARIOS[0]) => {
    setInput(scenario.content)
    setOutput(null)
  }

  const analyzeProject = async () => {
    if (!input.trim()) return

    setLoading(true)
    setOutput(null)

    const messages = [
      "Analyzing project context...",
      "Identifying dependencies...",
      "Assessing risk factors...",
      "Calculating delivery confidence...",
      "Generating recommendations..."
    ]

    for (let i = 0; i < messages.length; i++) {
      setLoadingMessage(messages[i])
      await new Promise(resolve => setTimeout(resolve, 600))
    }

    // Mock AI analysis output - architected to be replaced with real API call
    const mockOutput: AnalysisOutput = {
      executiveSummary: "Critical project blockers identified with backend API dependency causing 3-day delay. Frontend team blocked, QA resource unavailable, and stakeholder demo at risk. Immediate escalation and resource reallocation required to maintain Friday deadline. Scope creep and team morale concerns need executive attention.",

      risks: [
        {
          risk: "Backend API dependency blocking frontend progress",
          severity: "high",
          impact: "3-day delay cascades to entire sprint, threatens Friday demo commitment"
        },
        {
          risk: "QA resource unavailable during critical testing phase",
          severity: "high",
          impact: "Quality validation gap may result in production issues post-deployment"
        },
        {
          risk: "DevOps pipeline instability",
          severity: "medium",
          impact: "Intermittent failures slow deployment cycles, reduce team velocity"
        },
        {
          risk: "Scope creep from new requirements",
          severity: "medium",
          impact: "Team morale declining, timeline pressure increasing, burnout risk"
        }
      ],

      actionItems: [
        {
          task: "Escalate backend API dependency to Platform team lead immediately",
          owner: "Project Manager",
          priority: "urgent",
          deadline: "Today EOD"
        },
        {
          task: "Secure backup QA resource or reschedule testing timeline",
          owner: "Resource Manager",
          priority: "urgent",
          deadline: "Tomorrow 9 AM"
        },
        {
          task: "Schedule stakeholder alignment on Friday demo scope",
          owner: "Project Manager",
          priority: "high",
          deadline: "Tomorrow"
        },
        {
          task: "DevOps to diagnose and fix pipeline stability issues",
          owner: "DevOps Lead",
          priority: "high",
          deadline: "This week"
        },
        {
          task: "Requirements triage: defer non-critical items to next sprint",
          owner: "Product Owner",
          priority: "medium",
          deadline: "This week"
        }
      ],

      stakeholderMessage: `Hi [Stakeholder],

Quick update on our Friday demo:

**Current Status:** We've hit a blocker—our backend API dependency is delayed 3 days by the Platform team, which is blocking frontend progress. Additionally, our QA resource is out sick this week.

**What We're Doing:**
- Escalating the API dependency to Platform leadership today
- Securing backup QA resources
- Re-scoping Friday demo to focus on completed features

**What I Need From You:**
Flexibility on demo scope for Friday, or option to reschedule to Monday with full feature set.

**Recommendation:** Reschedule to Monday for higher-quality demo, or proceed Friday with reduced scope.

Let me know your preference by EOD today so we can adjust sprint priorities accordingly.

Best regards,
[Your name]`,

      deliveryConfidence: {
        score: 62,
        factors: [
          { factor: "Technical readiness", status: "negative" },
          { factor: "Resource availability", status: "negative" },
          { factor: "Stakeholder alignment", status: "neutral" },
          { factor: "Timeline feasibility", status: "negative" },
          { factor: "Team capacity", status: "negative" },
          { factor: "Scope clarity", status: "neutral" }
        ]
      },

      recommendations: [
        "**Immediate escalation required**: Backend API dependency is critical path blocker. Elevate to executive level if Platform team cannot commit to recovery timeline by EOD.",
        "**Scope negotiation**: Friday demo is high-risk with current blockers. Recommend reschedule to Monday or scope reduction to completed features only.",
        "**Resource backup plan**: Identify cross-functional QA resources or postpone testing phase. Current single-point-of-failure is unacceptable for critical sprint.",
        "**Team morale intervention**: Scope creep and timeline pressure creating burnout risk. Schedule retrospective to address process issues and prevent future overcommitment.",
        "**DevOps stability**: Pipeline issues are velocity drain. Allocate dedicated time for infrastructure hardening—short-term investment for long-term gains.",
        "**Requirements governance**: Implement change control process. New requirements mid-sprint are root cause of morale issues and timeline pressure."
      ]
    }

    setOutput(mockOutput)
    setLoading(false)
  }

  const tabs = [
    { label: "Executive Summary", icon: Brain },
    { label: "Risk Analysis", icon: AlertTriangle },
    { label: "Action Items", icon: CheckCircle },
    { label: "Stakeholder Comm", icon: Users },
    { label: "Delivery Confidence", icon: TrendingUp },
    { label: "AI Recommendations", icon: Sparkles }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Flagship Feature
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">AI PM Copilot</span> Simulator
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform project chaos into operational clarity using AI. Paste messy meeting notes, sprint updates,
            or stakeholder feedback and watch AI generate executive-ready insights.
          </p>
        </div>

        {/* Main Interface */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Left: Input Panel */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Project Input</h3>
                  <p className="text-sm text-muted-foreground">Paste raw project data</p>
                </div>
              </div>

              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste project notes, sprint updates, blockers, stakeholder feedback, or any project chaos here...

Example:
- Backend API delayed 3 days
- QA resource unavailable
- Stakeholder demo Friday at risk
- New requirements came in mid-sprint
- Team morale concerns
- Budget review pending"
                className="w-full h-64 p-4 bg-muted/50 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary text-sm font-mono"
              />

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={analyzeProject}
                  disabled={!input.trim() || loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      <span>Analyze Project</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Sample Scenarios */}
            <div className="bg-background rounded-2xl p-6 border border-border">
              <h4 className="font-semibold mb-4 flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Load Sample Scenario</span>
              </h4>
              <div className="space-y-2">
                {SAMPLE_SCENARIOS.map((scenario, idx) => (
                  <button
                    key={idx}
                    onClick={() => loadSample(scenario)}
                    className="w-full px-4 py-3 bg-muted/50 hover:bg-muted rounded-lg text-left text-sm font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>{scenario.title}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Output Panel */}
          <div className="bg-background rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI Analysis Output</h3>
                  <p className="text-sm text-muted-foreground">Operational intelligence insights</p>
                </div>
              </div>

              {loading && (
                <div className="flex flex-col items-center justify-center py-16 space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                  </div>
                  <p className="text-sm text-primary font-medium animate-pulse">{loadingMessage}</p>
                </div>
              )}

              {!loading && !output && (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">No analysis yet</p>
                    <p className="text-sm text-muted-foreground">
                      Paste project data and click "Analyze Project"
                    </p>
                  </div>
                </div>
              )}

              {output && !loading && (
                <div>
                  {/* Tabs */}
                  <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
                    {tabs.map((tab, idx) => {
                      const Icon = tab.icon
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
                            activeTab === idx
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "bg-muted/50 text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{tab.label}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Tab Content */}
                  <div className="space-y-4">
                    {activeTab === 0 && (
                      <div className="p-6 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl border border-primary/10">
                        <p className="text-sm leading-relaxed">{output.executiveSummary}</p>
                      </div>
                    )}

                    {activeTab === 1 && (
                      <div className="space-y-3">
                        {output.risks.map((risk, idx) => (
                          <div key={idx} className="p-4 bg-muted/50 rounded-lg border border-border">
                            <div className="flex items-start space-x-3">
                              <div className={`mt-0.5 px-2 py-1 rounded text-xs font-semibold ${
                                risk.severity === "high" ? "bg-red-500/20 text-red-400" :
                                risk.severity === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                                "bg-blue-500/20 text-blue-400"
                              }`}>
                                {risk.severity.toUpperCase()}
                              </div>
                              <div className="flex-1">
                                <p className="font-semibold text-sm mb-1">{risk.risk}</p>
                                <p className="text-xs text-muted-foreground">{risk.impact}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 2 && (
                      <div className="space-y-3">
                        {output.actionItems.map((item, idx) => (
                          <div key={idx} className="p-4 bg-muted/50 rounded-lg border border-border">
                            <div className="flex items-start justify-between mb-2">
                              <p className="font-semibold text-sm flex-1">{item.task}</p>
                              <div className={`px-2 py-1 rounded text-xs font-semibold ml-2 ${
                                item.priority === "urgent" ? "bg-red-500/20 text-red-400" :
                                item.priority === "high" ? "bg-orange-500/20 text-orange-400" :
                                "bg-blue-500/20 text-blue-400"
                              }`}>
                                {item.priority.toUpperCase()}
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>👤 {item.owner}</span>
                              <span>📅 {item.deadline}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 3 && (
                      <div className="p-6 bg-muted/50 rounded-xl border border-border">
                        <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">{output.stakeholderMessage}</pre>
                      </div>
                    )}

                    {activeTab === 4 && (
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="none" className="text-muted" />
                              <circle
                                cx="64"
                                cy="64"
                                r="56"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="none"
                                className={output.deliveryConfidence.score >= 70 ? "text-green-500" : output.deliveryConfidence.score >= 40 ? "text-yellow-500" : "text-red-500"}
                                strokeDasharray={`${2 * Math.PI * 56}`}
                                strokeDashoffset={`${2 * Math.PI * 56 * (1 - output.deliveryConfidence.score / 100)}`}
                                strokeLinecap="round"
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-4xl font-bold">{output.deliveryConfidence.score}%</span>
                              <span className="text-xs text-muted-foreground">Confidence</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {output.deliveryConfidence.factors.map((factor, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                              <span className="text-sm">{factor.factor}</span>
                              <div className={`w-3 h-3 rounded-full ${
                                factor.status === "positive" ? "bg-green-500" :
                                factor.status === "negative" ? "bg-red-500" :
                                "bg-yellow-500"
                              }`}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 5 && (
                      <div className="space-y-4">
                        {output.recommendations.map((rec, idx) => (
                          <div key={idx} className="p-4 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg border border-purple-500/10">
                            <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: rec }} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-background rounded-xl border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Instant Analysis</h4>
            <p className="text-sm text-muted-foreground">Transform project chaos into structured insights in seconds</p>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-purple-500" />
            </div>
            <h4 className="font-semibold mb-2">Operational Intelligence</h4>
            <p className="text-sm text-muted-foreground">AI-powered risk detection and mitigation recommendations</p>
          </div>
          <div className="p-6 bg-background rounded-xl border border-border text-center">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-pink-500" />
            </div>
            <h4 className="font-semibold mb-2">Executive-Ready</h4>
            <p className="text-sm text-muted-foreground">Generate stakeholder communications and executive summaries</p>
          </div>
        </div>
      </div>
    </section>
  )
}
