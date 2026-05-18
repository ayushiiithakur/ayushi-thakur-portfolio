"use client"

import { ExternalLink, TrendingUp, Zap, Award } from "lucide-react"

export function CaseStudies() {
  const projects = [
    {
      title: "13+ Concurrent Global IT Projects Portfolio",
      company: "TE Connectivity",
      description: "Orchestrating a $1.3M multi-domain project portfolio (engineering, quality, finance, AI) across global teams using AI-powered risk intelligence and PMO governance frameworks.",
      problem: "Managing 13+ concurrent projects across time zones with interdependencies, resource constraints, and competing priorities. Traditional manual tracking couldn't detect cross-project conflicts until they caused delays.",
      solution: "Built AI-powered risk intelligence workflow using Claude to analyze schedules, dependencies, and resource allocations weekly. Automated conflict detection, standardized PMO artifacts, and created Power BI dashboards for real-time portfolio health visibility across stakeholders.",
      impact: [
        { metric: "$1.3M", label: "Portfolio value managed" },
        { metric: "20%", label: "Reduction in delivery delays" },
        { metric: "13+", label: "Concurrent global projects" }
      ],
      tags: ["AI Risk Intelligence", "Portfolio Management", "PMO Governance", "Cross-functional Leadership"],
      aiTools: ["Claude AI (Risk Analysis)", "Power BI", "Jira", "Azure DevOps", "Confluence"],
      link: "#"
    },
    {
      title: "Code Health Monitor",
      company: "TE Connectivity",
      description: "Built an AI-powered application using Claude and vibe coding to track code quality in real time across active projects.",
      problem: "Development teams lacked real-time visibility into code quality metrics, making it difficult to proactively address technical debt",
      solution: "Developed AI-powered monitoring tool using Claude and vibe coding that provides real-time code quality insights and alerts",
      impact: [
        { metric: "Team-wide", label: "Adoption across projects" },
        { metric: "Real-time", label: "Code quality tracking" },
        { metric: "AI-powered", label: "Fix suggestions" }
      ],
      tags: ["AI Development", "Innovation", "Team-wide Impact"],
      aiTools: ["Claude AI", "Vibe Coding", "Prompt Engineering"],
      link: "#"
    },
    {
      title: "Operational Intelligence: 20+ BI Dashboards",
      company: "TE Connectivity",
      description: "Architected and deployed 20+ Tableau and Power BI dashboards transforming raw operational data into real-time executive intelligence across sales, inventory, and billings for global ISC team.",
      problem: "Global stakeholders relying on manual Excel reports updated weekly, causing 30% time waste and delayed decision-making. No centralized KPI visibility across regions, leading to reactive (not proactive) operational responses.",
      solution: "Built end-to-end operational intelligence system: standardized data pipelines from multiple sources, designed KPI hierarchies aligned to business objectives, deployed automated dashboards with drill-down capabilities, and integrated AI-assisted narrative summaries for executive consumption.",
      impact: [
        { metric: "20+", label: "Dashboards deployed" },
        { metric: "30%", label: "Reduction in manual reporting time" },
        { metric: "Global", label: "Stakeholder adoption (multi-region)" }
      ],
      tags: ["Operational Intelligence", "Data Analytics", "BI Systems", "Executive Visibility"],
      aiTools: ["Tableau", "Power BI", "SQL", "Claude AI (Insights)", "Excel"],
      link: "#"
    },
    {
      title: "AI-Powered Executive Communication Pipeline",
      company: "TE Connectivity",
      description: "Designed and deployed an AI-assisted executive reporting system transforming raw project data into narrative-driven insights, achieving 40% faster reporting cycles across 13+ projects.",
      problem: "Weekly status reports required 3-4 hours of manual synthesis: extracting Jira data, analyzing trends, drafting executive summaries, and formatting presentations. Inconsistent narrative quality across PMs and delayed visibility into portfolio health.",
      solution: "Built AI-enhanced reporting workflow: automated Jira data extraction → Claude analyzes progress/blockers/risks → generates executive-ready narrative summaries → integrates with Power BI dashboards → creates presentation decks via Gamma.ai. Standardized templates ensure consistency while reducing PM effort from hours to minutes.",
      impact: [
        { metric: "40%", label: "Faster reporting cycles" },
        { metric: "Weekly", label: "Automated executive updates" },
        { metric: "13+", label: "Projects tracked in real-time" }
      ],
      tags: ["AI Workflow Automation", "Executive Communication", "Process Optimization", "Operational Efficiency"],
      aiTools: ["Claude AI (Narrative)", "Power BI", "Gamma.ai", "Jira API", "Prompt Engineering"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Featured Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">AI-Native</span> Project Execution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world AI implementations: from risk intelligence systems to operational automation.
            Here's what enterprise AI adoption looks like in production.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-10">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">{project.company}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Challenge</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4">{project.problem}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Solution</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-4">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.aiTools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column - Impact Metrics */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-6 border border-primary/10">
                    <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Impact
                    </h4>
                    <div className="space-y-4">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-baseline justify-between">
                          <span className="text-3xl font-bold gradient-text">
                            {item.metric}
                          </span>
                          <span className="text-sm text-muted-foreground text-right ml-4">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition & Trust Signals */}
        <div className="mt-16 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Recognition & Leadership</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proven track record of innovation, execution excellence, and team leadership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">Multiple</div>
              <div className="text-sm font-medium text-primary mb-2">ECE Awards</div>
              <div className="text-xs text-muted-foreground">Excellence in Contribution & Execution</div>
            </div>
            <div className="bg-background/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">Spot Award</div>
              <div className="text-sm font-medium text-purple-400 mb-2">2023</div>
              <div className="text-xs text-muted-foreground">Outstanding Performance Recognition</div>
            </div>
            <div className="bg-background/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">70-80</div>
              <div className="text-sm font-medium text-pink-400 mb-2">Team Members</div>
              <div className="text-xs text-muted-foreground">Employee Engagement Lead</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-background/70 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Team-wide AI Tool Adoption</div>
                  <div className="text-xs text-muted-foreground">Code Health Monitor deployed across active project teams</div>
                </div>
              </div>
            </div>
            <div className="bg-background/70 rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-sm">CAPM Certified (Above Target Score)</div>
                  <div className="text-xs text-muted-foreground">Project Management Institute, 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
