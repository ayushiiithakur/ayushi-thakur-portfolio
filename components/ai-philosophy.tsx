"use client"

import { Brain, Zap, TrendingUp, Users, Target, Workflow } from "lucide-react"

export function AIPhilosophy() {
  const principles = [
    {
      icon: Brain,
      title: "AI as Operational Leverage",
      description: "AI isn't a tool—it's a force multiplier. I use it to compress time-intensive workflows (risk analysis, reporting, documentation) so teams can focus on high-value decision-making instead of execution mechanics."
    },
    {
      icon: Zap,
      title: "Decision Acceleration, Not Replacement",
      description: "AI doesn't make decisions—it surfaces the right information faster. My approach: use Claude to analyze constraints, generate options, and highlight risks, then let human judgment make the call with better context."
    },
    {
      icon: Workflow,
      title: "Workflow Design > Tool Selection",
      description: "Most PMs ask 'What AI tool should I use?' I ask 'What workflow friction can AI remove?' The tool is secondary to understanding where human time is wasted and designing AI systems to eliminate that waste."
    },
    {
      icon: TrendingUp,
      title: "Scale Through Systematization",
      description: "One-off AI prompts are experiments. Repeatable AI workflows are systems. I build operational intelligence systems—dashboards, automated reports, risk pipelines—that scale impact beyond individual project execution."
    },
    {
      icon: Users,
      title: "Adoption Requires Proof, Not Evangelism",
      description: "Teams don't adopt AI because you tell them to—they adopt it when they see measurable value in their own work. I demonstrate ROI with pilot implementations, then let results drive organic adoption."
    },
    {
      icon: Target,
      title: "Measure Everything, Optimize Continuously",
      description: "Every AI workflow I implement has metrics: time saved, accuracy improved, delays prevented. If I can't measure the impact, I can't justify the investment. Data-driven AI adoption is the only sustainable approach."
    }
  ]

  return (
    <section id="ai-philosophy" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Strategic Perspective
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How I Think About{" "}
            <span className="gradient-text">AI in Operations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI-enabled project management isn't about replacing humans with automation—it's about
            removing execution friction so teams can operate at a higher strategic level. Here's my framework
            for deploying AI in operational workflows.
          </p>
        </div>

        {/* Core Philosophy Statement */}
        <div className="mb-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-foreground/90 leading-relaxed mb-6">
              <strong className="text-primary">The future of project management isn't about managing tasks—it's about orchestrating AI systems that execute tasks.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In 2026, the best PMs aren't the ones who manually track every risk or spend hours formatting status reports.
              They're the ones who build AI-powered operational intelligence systems that automatically detect risks,
              generate executive summaries, and surface critical blockers before they impact delivery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've spent 4.5 years learning PMO governance, Agile execution, and stakeholder management.
              Now I'm spending every day learning how to <strong className="text-foreground">operationalize AI across those workflows</strong>—because
              that's where the next decade of competitive advantage lives.
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Where AI Fits in My Workflow */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-3xl font-bold text-center mb-12">
            Where AI Fits in My Daily Workflow
          </h3>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="text-4xl font-bold text-primary/20 flex-shrink-0">01</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Risk Intelligence</h4>
                <p className="text-muted-foreground mb-3">
                  Every Monday, I feed Claude my project schedules, dependency maps, and resource allocations.
                  It identifies misalignments (e.g., "Team A needs Server B deployed by June 3, but Team C owns that deployment and doesn't have it scheduled until June 10").
                </p>
                <p className="text-sm text-primary font-medium">Result: 20% reduction in delivery delays by catching conflicts before they escalate.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="text-4xl font-bold text-purple-500/20 flex-shrink-0">02</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Executive Communication</h4>
                <p className="text-muted-foreground mb-3">
                  I draft status reports by feeding Claude raw Jira data, meeting notes, and blockers.
                  It generates narrative summaries tailored to executive stakeholders—highlighting business impact, not technical details.
                </p>
                <p className="text-sm text-purple-400 font-medium">Result: 40% faster reporting, more time for strategic planning.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="text-4xl font-bold text-pink-500/20 flex-shrink-0">03</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Requirements Clarification</h4>
                <p className="text-muted-foreground mb-3">
                  When requirements are vague, I use reverse prompting: ask Claude to generate questions that expose gaps.
                  This helps me go back to stakeholders with precise clarifications instead of vague "can you explain more?"
                </p>
                <p className="text-sm text-pink-400 font-medium">Result: Fewer mid-sprint scope changes and clearer acceptance criteria.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="text-4xl font-bold text-green-500/20 flex-shrink-0">04</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Operational Intelligence Dashboards</h4>
                <p className="text-muted-foreground mb-3">
                  I build Power BI dashboards that integrate AI-generated insights—automated health scores,
                  risk flags, and trend predictions. Stakeholders get real-time visibility without needing me to manually update slides.
                </p>
                <p className="text-sm text-green-400 font-medium">Result: Executives make faster decisions with better data visibility.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20 max-w-4xl">
            <p className="text-xl font-semibold text-foreground mb-4">
              "The PMs who thrive in the next 5 years won't be the ones who resist AI—they'll be the ones who
              learn to orchestrate it."
            </p>
            <p className="text-sm text-muted-foreground">
              I'm building that capability now, one AI system at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
