"use client"

import { ArrowRight, GitBranch, Clock, Zap, TrendingUp } from "lucide-react"

export function AIWorkflowsVisual() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <GitBranch className="w-4 h-4 mr-2" />
            AI Systems Architecture
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Workflows</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual breakdown of the AI-powered operational systems I've built and deployed
          </p>
        </div>

        {/* Workflow 1: Risk Intelligence */}
        <div className="mb-16 bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">AI Risk Intelligence Workflow</h3>
              <p className="text-sm text-muted-foreground">Automated cross-project conflict detection</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-xl p-8 border border-red-500/10">
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 p-4 bg-background rounded-lg border border-border text-center">
                  <div className="font-mono text-sm font-semibold mb-1">Monday Morning</div>
                  <div className="text-xs text-muted-foreground">Weekly sync trigger</div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                <div className="flex-1 p-4 bg-background rounded-lg border border-border text-center">
                  <div className="font-mono text-sm font-semibold mb-1">Extract Project Data</div>
                  <div className="text-xs text-muted-foreground">Jira schedules, Azure DevOps dependencies</div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                <div className="flex-1 p-4 bg-background rounded-lg border border-border text-center">
                  <div className="font-mono text-sm font-semibold mb-1">Feed to Claude</div>
                  <div className="text-xs text-muted-foreground">13+ projects × dependencies</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-purple-500"></div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border-2 border-purple-500 text-center">
                  <div className="font-mono text-sm font-semibold mb-1">Claude Analyzes</div>
                  <div className="text-xs text-muted-foreground">Resource conflicts, timeline misalignments, dependency risks</div>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-400 rotate-90 md:rotate-0" />
                <div className="flex-1 p-4 bg-background rounded-lg border border-border text-center">
                  <div className="font-mono text-sm font-semibold mb-1">Risk Report</div>
                  <div className="text-xs text-muted-foreground">Prioritized by severity & impact</div>
                </div>
                <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                <div className="flex-1 p-4 bg-background rounded-lg border border-border text-center">
                  <div className="font-mono text-sm font-semibold mb-1">Action Items</div>
                  <div className="text-xs text-muted-foreground">Assigned to PMs before standup</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-background/50 rounded-lg border border-green-500/20">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="font-medium">Impact:</span>
                </div>
                <span className="text-green-400 font-semibold">20% reduction in delivery delays</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow 2: Executive Reporting */}
        <div className="mb-16 bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Executive Communication Pipeline</h3>
              <p className="text-sm text-muted-foreground">Automated narrative generation workflow</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-xl p-8 border border-blue-500/10">
            <div className="grid md:grid-cols-5 gap-4">
              <div className="relative">
                <div className="p-4 bg-background rounded-lg border border-border h-full">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div className="font-semibold text-sm mb-1">Jira API</div>
                    <div className="text-xs text-muted-foreground">Extract tasks, status, blockers</div>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              </div>

              <div className="relative">
                <div className="p-4 bg-background rounded-lg border border-border h-full">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div className="font-semibold text-sm mb-1">Claude AI</div>
                    <div className="text-xs text-muted-foreground">Analyze & synthesize</div>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>

              <div className="relative">
                <div className="p-4 bg-background rounded-lg border border-border h-full">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div className="font-semibold text-sm mb-1">Narrative</div>
                    <div className="text-xs text-muted-foreground">Generate summary</div>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-pink-500 to-transparent"></div>
              </div>

              <div className="relative">
                <div className="p-4 bg-background rounded-lg border border-border h-full">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div className="font-semibold text-sm mb-1">Power BI</div>
                    <div className="text-xs text-muted-foreground">Integrate metrics</div>
                  </div>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-green-500 to-transparent"></div>
              </div>

              <div>
                <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg border-2 border-primary h-full">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold">5</span>
                    </div>
                    <div className="font-semibold text-sm mb-1">Gamma.ai</div>
                    <div className="text-xs text-muted-foreground">Auto-generate deck</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-background/50 rounded-lg border border-blue-500/20">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="font-medium">Time Saved:</span>
                  </div>
                  <span className="text-blue-400 font-semibold">3-4 hours → 10 minutes</span>
                </div>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-green-500/20">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="font-medium">Efficiency:</span>
                  </div>
                  <span className="text-green-400 font-semibold">40% faster reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow 3: BI Dashboard Intelligence */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Operational Intelligence System</h3>
              <p className="text-sm text-muted-foreground">Real-time BI dashboard pipeline with AI insights</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl p-8 border border-purple-500/10">
            {/* Vertical Flow */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  1
                </div>
                <div className="flex-1 p-4 bg-background rounded-lg border border-border">
                  <div className="font-semibold text-sm mb-2">Multiple Data Sources</div>
                  <div className="text-xs text-muted-foreground">Sales systems, inventory databases, billing platforms, ERP data</div>
                </div>
              </div>

              <div className="ml-5 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-purple-500/50"></div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">
                  2
                </div>
                <div className="flex-1 p-4 bg-background rounded-lg border border-border">
                  <div className="font-semibold text-sm mb-2">Standardized Data Pipeline</div>
                  <div className="text-xs text-muted-foreground">SQL transformations, data cleaning, KPI calculations</div>
                </div>
              </div>

              <div className="ml-5 w-0.5 h-6 bg-gradient-to-b from-purple-500/50 to-pink-500/50"></div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 text-pink-400 font-bold">
                  3
                </div>
                <div className="flex-1 p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border-2 border-pink-500">
                  <div className="font-semibold text-sm mb-2">Power BI / Tableau Dashboards</div>
                  <div className="text-xs text-muted-foreground">20+ interactive dashboards with drill-down capabilities</div>
                </div>
              </div>

              <div className="ml-5 w-0.5 h-6 bg-gradient-to-b from-pink-500/50 to-primary/50"></div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 font-bold">
                  4
                </div>
                <div className="flex-1 p-4 bg-background rounded-lg border border-border">
                  <div className="font-semibold text-sm mb-2">AI-Enhanced Insights Layer</div>
                  <div className="text-xs text-muted-foreground">Claude analyzes trends, flags anomalies, generates executive summaries</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-background/50 rounded-lg border border-purple-500/20">
              <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">20+</div>
                  <div className="text-xs text-muted-foreground">Dashboards Deployed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-400 mb-1">30%</div>
                  <div className="text-xs text-muted-foreground">Time Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">Global</div>
                  <div className="text-xs text-muted-foreground">Multi-Region Adoption</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-foreground">These aren't theoretical workflows.</strong> These are production systems running daily,
            processing real project data, and delivering measurable operational improvements across 13+ concurrent projects.
          </p>
        </div>
      </div>
    </section>
  )
}
