"use client"

import { Code2, Sparkles, Zap, CheckCircle, TrendingUp, Mic, Shield, Clock } from "lucide-react"

export function CodeHealthShowcase() {
  const features = [
    {
      icon: Code2,
      title: "Automated Repository Scanning",
      description: "Real-time analysis across Azure DevOps repos detecting code smells, security vulnerabilities, and technical debt"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Fix Suggestions",
      description: "Claude analyzes code context and generates intelligent, actionable fixes with confidence scores"
    },
    {
      icon: Mic,
      title: "Voice Assistant",
      description: "Hands-free code quality insights. Just ask: 'Show me all high-severity issues in authentication'"
    },
    {
      icon: Shield,
      title: "Security Vulnerability Detection",
      description: "Automated scanning with Bandit flags SQL injection risks, hardcoded secrets, and security gaps"
    }
  ]

  const metrics = [
    { value: "A-F", label: "Health Score System", icon: TrendingUp },
    { value: "50%", label: "Faster Code Reviews", icon: Clock },
    { value: "2h → 5min", label: "Review Time Saved", icon: Zap },
    { value: "Team-wide", label: "Adoption", icon: CheckCircle }
  ]

  const techStack = [
    "Claude AI API",
    "Azure DevOps Integration",
    "Python (Backend)",
    "React (Dashboard)",
    "Voice Recognition",
    "Real-time Analytics"
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-sm font-medium text-green-600 dark:text-green-400 mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Adopted Team-wide
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">CodeHealth</span> AI System Implementation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An enterprise AI-powered code analysis platform integrating Claude API, Azure DevOps, and real-time analytics.
            From concept to team-wide production deployment.
          </p>
        </div>

        {/* The Problem → Constraints → Solution Story */}
        <div className="mb-16 bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h3 className="text-2xl font-bold">The Problem</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>• Developers juggling multiple fragmented tools</p>
                <p>• No centralized codebase health visibility</p>
                <p>• Manual reviews taking <strong>2 hours per repository</strong></p>
                <p>• Technical debt accumulating silently</p>
                <p>• Production bugs costing <strong>100x more</strong> than early detection</p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <h3 className="text-2xl font-bold">Constraints</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>• <strong>Zero budget</strong> for commercial tools</p>
                <p>• Azure DevOps integration required</p>
                <p>• Needed <strong>rapid deployment</strong> (weeks, not months)</p>
                <p>• Team adoption without mandatory rollout</p>
                <p>• Real-time scanning at organization scale</p>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="text-2xl font-bold">AI Solution</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>• <strong>Unified AI dashboard</strong> consolidating all metrics</p>
                <p>• <strong>Claude API integration</strong> for intelligent fix suggestions</p>
                <p>• <strong>Weighted health scoring</strong> (A-F grading system)</p>
                <p>• <strong>Voice-enabled insights</strong> for hands-free queries</p>
                <p>• <strong>5-minute reviews</strong> via automation (96% time reduction)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why AI? */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span>Why AI Was Critical</span>
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Traditional static analysis tools flag issues but provide no context or solutions. Developers still had to:
              manually investigate each issue, understand the codebase context, research best practices, and write fixes.
            </p>
            <p>
              <strong>By integrating Claude AI</strong>, I transformed CodeHealth from a "problem detector" into an "operational intelligence system."
              Claude analyzes the surrounding code context, understands the intent, suggests intelligent fixes with explanations,
              and provides confidence scores—turning a 2-hour manual process into a 5-minute automated workflow.
            </p>
            <p className="text-primary font-medium">
              AI didn't just speed up the workflow—it fundamentally changed how the team approaches code quality.
            </p>
          </div>
        </div>

        {/* System Architecture & Workflow */}
        <div className="mb-16 bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-3xl font-bold text-center mb-8">System Architecture & AI Workflow</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            End-to-end AI-powered pipeline from repository scanning to intelligent fix recommendations
          </p>

          <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-8 border border-primary/10">
            <div className="space-y-6">
              {/* Row 1: Data Sources */}
              <div className="flex items-center justify-center space-x-4">
                <div className="px-6 py-3 bg-background rounded-lg border border-border font-mono text-sm font-medium">
                  Azure DevOps API
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border border-border font-mono text-sm font-medium">
                  Repository Files
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border border-border font-mono text-sm font-medium">
                  Git Metadata
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-purple-500"></div>
              </div>

              {/* Row 2: Analysis Engine */}
              <div className="flex items-center justify-center">
                <div className="px-8 py-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg border-2 border-primary font-semibold text-center">
                  Python Analysis Engine<br/>
                  <span className="text-sm font-normal text-muted-foreground">Pylint • Bandit • Radon • pytest</span>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              </div>

              {/* Row 3: AI Layer */}
              <div className="flex items-center justify-center">
                <div className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border-2 border-purple-500 font-semibold text-center">
                  Claude AI API<br/>
                  <span className="text-sm font-normal text-muted-foreground">Context Analysis • Fix Generation • Confidence Scoring</span>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex justify-center">
                <div className="w-0.5 h-8 bg-gradient-to-b from-pink-500 to-primary"></div>
              </div>

              {/* Row 4: Output Layer */}
              <div className="flex items-center justify-center space-x-4">
                <div className="px-6 py-3 bg-background rounded-lg border border-border font-mono text-sm font-medium">
                  React Dashboard
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border border-border font-mono text-sm font-medium">
                  Voice Assistant
                </div>
                <div className="px-6 py-3 bg-background rounded-lg border border-border font-mono text-sm font-medium">
                  Real-time Alerts
                </div>
              </div>
            </div>

            {/* Key Integration Points */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
                <div className="text-sm font-semibold text-primary mb-1">Data Collection</div>
                <div className="text-xs text-muted-foreground">Azure DevOps REST API integration for real-time repository access</div>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-purple-500/20">
                <div className="text-sm font-semibold text-purple-400 mb-1">AI Intelligence</div>
                <div className="text-xs text-muted-foreground">Claude analyzes code context and generates actionable fixes with explanations</div>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-pink-500/20">
                <div className="text-sm font-semibold text-pink-400 mb-1">User Interface</div>
                <div className="text-xs text-muted-foreground">Multi-modal access via dashboard, voice queries, and automated notifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 lg:p-12 border border-primary/20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Business Impact & Operational Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-background/50 backdrop-blur flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 border border-border mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Scan Repositories</h4>
                <p className="text-muted-foreground">Connect to Azure DevOps and scan single repos, entire projects, or the whole organization. Real-time analysis detects code smells, security issues, and dependency vulnerabilities.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Calculate Health Scores</h4>
                <p className="text-muted-foreground">Each repository gets an A-F grade based on weighted metrics: 40% code quality (cyclomatic complexity, duplication), 30% test coverage, 20% dependency health, 10% documentation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">AI-Powered Fix Suggestions</h4>
                <p className="text-muted-foreground">Click any issue and Claude analyzes the code context, generates an intelligent fix with explanation, and provides a confidence score. Copy, apply, ship.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Voice-Enabled Insights</h4>
                <p className="text-muted-foreground">Use the voice assistant for hands-free development: "Show me all high-severity issues in the authentication module" and get natural language responses.</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Role */}
        <div className="mb-16 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl p-8 lg:p-12 border border-primary/20">
          <h3 className="text-3xl font-bold mb-8 text-center">My Role</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Project Management</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Defined product vision and requirements through stakeholder interviews</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Managed development lifecycle from concept to team-wide deployment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Drove adoption strategy and gathered continuous user feedback</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">AI Workflow Design & Implementation</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Architected AI integration strategy with Claude API for fix generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Designed prompt engineering workflows for code analysis and suggestions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Built end-to-end system using Claude as co-architect ("vibe coding")</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Integrated Azure DevOps, implemented scanning engine, and deployed dashboard</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-background/50 rounded-lg border border-primary/20">
            <p className="text-muted-foreground text-center">
              <strong className="text-foreground">Key Insight:</strong> I wore multiple hats—PM, AI strategist, and technical implementer.
              This cross-functional approach allowed me to move from concept to production deployment rapidly without traditional engineering bottlenecks.
            </p>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-16 bg-background rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-3xl font-bold mb-8 text-center">Lessons Learned</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">AI Adoption Requires Demonstration, Not Explanation</h4>
                <p className="text-muted-foreground">
                  Rather than pitching "AI code analysis," I built a working prototype and let developers experience the value firsthand.
                  Team-wide adoption came from word-of-mouth after early users saw 96% time savings in their own workflows.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Prompt Engineering Is a Product Skill</h4>
                <p className="text-muted-foreground">
                  The quality of Claude's fix suggestions depended entirely on how I structured the prompts. I iterated on prompt design
                  like feature design—testing, refining, and optimizing based on output quality and user feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 text-pink-400 font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">PMs Can Build AI Systems Without Traditional Coding</h4>
                <p className="text-muted-foreground">
                  Using Claude as a co-architect, I built a production-ready tool without being a software engineer.
                  This proved that AI unlocks a new class of "builder PMs" who can operationalize ideas without engineering bottlenecks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 text-green-400 font-bold text-sm">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Start Small, Scale With Proof</h4>
                <p className="text-muted-foreground">
                  I launched with a single-repo pilot, gathered metrics (2h → 5min), then expanded to organization-wide scanning.
                  Measurable impact at a small scale made it easy to secure buy-in for broader deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-background rounded-2xl p-8 border border-border mb-16">
          <h3 className="text-2xl font-bold text-center mb-6">Technical Components & Integration Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg text-sm font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="bg-background rounded-2xl p-8 border border-border mb-16">
          <h3 className="text-2xl font-bold text-center mb-6">Application Screenshots</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/dashboard.png" target="_blank" className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all">
              <img src="/dashboard.png" alt="CodeHealth Dashboard" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Dashboard View</span>
              </div>
            </a>
            <a href="/repositories.png" target="_blank" className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all">
              <img src="/repositories.png" alt="Repositories List" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Repositories</span>
              </div>
            </a>
            <a href="/code_smells.png" target="_blank" className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all">
              <img src="/code_smells.png" alt="Code Smells Detection" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Code Smells</span>
              </div>
            </a>
            <a href="/vulnerabilities.png" target="_blank" className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all">
              <img src="/vulnerabilities.png" alt="Security Vulnerabilities" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Vulnerabilities</span>
              </div>
            </a>
            <a href="/repo_detail.png" target="_blank" className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all">
              <img src="/repo_detail.png" alt="Repository Details" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Repository Details</span>
              </div>
            </a>
            <a href="/settings.png" target="_blank" className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all">
              <img src="/settings.png" alt="Settings Configuration" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">Settings</span>
              </div>
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">Click any screenshot to view full size</p>
        </div>

        {/* Technical Execution & AI Implementation */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
          <div className="flex items-start space-x-4">
            <Sparkles className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3">AI-Native Development Approach</h3>
              <p className="text-muted-foreground mb-4">
                This wasn't traditional software development—it was <strong>AI-orchestrated system building</strong>. Using Claude as a co-architect,
                I iteratively designed the API architecture, built the scanning engine, created the dashboard UI, and integrated voice recognition
                through structured prompt engineering and "vibe coding."
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>What makes this significant:</strong> I moved from concept to production deployment in weeks rather than months,
                without a traditional engineering team. This demonstrated a new execution model where technical PMs can operationalize
                AI-powered systems at enterprise scale using AI as the implementation layer.
              </p>
              <p className="text-sm text-primary font-medium">
                Production deployment • Team-wide adoption • Zero traditional engineering resources • 96% efficiency gain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
