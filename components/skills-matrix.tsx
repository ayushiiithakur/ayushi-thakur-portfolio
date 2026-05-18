"use client"

import { useState, useEffect, useRef } from "react"
import {
  Brain,
  Target,
  Zap,
  MessageSquare,
  Sparkles
} from "lucide-react"

export function SkillsMatrix() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  const skillCategories = [
    {
      title: "Project Management Core",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "PMO Governance", proof: "13+ concurrent programs, $1.3M portfolio", link: "/projects" },
        { name: "Project Scheduling & Planning", proof: "20% reduction in delivery delays", link: "/projects" },
        { name: "Risk & Change Management", proof: "Cross-project dependency analysis at scale", link: "/projects" },
        { name: "Agile/Waterfall/Hybrid", proof: "Multi-methodology execution across programs", link: "/projects" },
        { name: "Budget & Resource Management", proof: "$1.3M portfolio across 13+ projects", link: "/projects" },
        { name: "Stakeholder Engagement", proof: "40% faster executive reporting via AI", link: "/projects" }
      ]
    },
    {
      title: "AI & Advanced Skills",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Claude AI", proof: "Daily operational use for project intelligence", link: "/ai-lab" },
        { name: "Prompt Engineering", proof: "Custom AI workflows for PM tasks", link: "/ai-lab" },
        { name: "AI Workflow Design", proof: "8 production AI systems deployed", link: "/projects" },
        { name: "AI Application Development", proof: "Built AI PM Copilot simulator", link: "/ai-lab" },
        { name: "Enterprise AI Adoption", proof: "Team-wide AI tool rollout and training", link: "/projects" },
        { name: "Operational AI Integration", proof: "40%+ efficiency gains via AI automation", link: "/projects" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Jira & Confluence", proof: "13+ projects tracked, workflow automation", link: "/projects" },
        { name: "Azure DevOps", proof: "End-to-end CI/CD pipeline management", link: "/projects" },
        { name: "Power BI", proof: "20+ interactive dashboards deployed globally", link: "/projects" },
        { name: "Tableau", proof: "Executive-level data visualization & insights", link: "/projects" },
        { name: "SQL", proof: "Data pipeline design for BI systems", link: "/projects" },
        { name: "AI Tools", proof: "Claude, ChatGPT, Gamma.ai in daily workflow", link: "/ai-toolkit" }
      ]
    },
    {
      title: "Soft Skills & Leadership",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Executive Communication", proof: "40% faster reporting to C-level stakeholders", link: "/projects" },
        { name: "Cross-functional Leadership", proof: "70-80 team members in engagement programs", link: null },
        { name: "Data-Driven Decision Making", proof: "BI-backed project insights & risk analysis", link: "/projects" },
        { name: "Team Collaboration", proof: "Multi-region, cross-functional project coordination", link: "/projects" },
        { name: "Problem Solving", proof: "AI-powered risk detection & mitigation", link: "/projects" },
        { name: "Change Management", proof: "Enterprise-wide AI adoption initiatives", link: "/projects" }
      ]
    }
  ]

  const certifications = [
    { name: "CAPM (Above Target Score)", year: "2025", status: "certified", link: "/capm-certificate.jpg" },
    { name: "Google Project Management Certificate", year: "Certified", status: "certified", link: null },
    { name: "Tableau Data Analyst", year: "Certified", status: "certified", link: null },
    { name: "B.E. Computer Science - 8.0 CGPA", year: "2021", status: "education", link: null }
  ]

  const aiStack = [
    "Claude AI",
    "ChatGPT",
    "Gamma.ai",
    "Prompt Engineering",
    "Reverse Prompting",
    "Prompt Chaining",
    "Vibe Coding"
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Actually Do</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The intersection of Agile execution, data fluency, and AI obsession—backed by real tools and real results
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  skill.link ? (
                    <a
                      key={i}
                      href={skill.link}
                      className="block group p-4 rounded-lg border border-border hover:border-primary/50 bg-muted/30 hover:bg-muted/50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {skill.proof}
                          </div>
                        </div>
                        <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={i}
                      className="block p-4 rounded-lg border border-border bg-muted/30"
                    >
                      <div className="text-sm font-semibold text-foreground">
                        {skill.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {skill.proof}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Evidence-Based Note */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-foreground">Evidence-backed skills.</strong> Each capability is linked to actual projects, measurable outcomes, or production systems. Click any skill to see the work behind the claim.
          </p>
        </div>

        {/* AI Stack Highlight */}
        <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-primary/10 rounded-2xl p-8 border border-purple-500/20 mb-16">
          <div className="text-center mb-6">
            <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">AI Stack & Techniques</h3>
            <p className="text-sm text-muted-foreground">Advanced AI tools and methodologies used daily</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {aiStack.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-background/70 backdrop-blur rounded-lg text-sm font-medium border border-primary/20 hover:border-primary/50 hover:bg-background transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-background rounded-2xl p-8 border border-border mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Education</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              cert.link ? (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border border-primary/10 hover:border-primary/30 hover:from-primary/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-pulse"></div>
                    <span className="text-sm font-medium">{cert.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-primary font-medium">{cert.year}</span>
                    <span className="text-xs text-primary">→</span>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border border-primary/10"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium">{cert.name}</span>
                  </div>
                  <span className="text-xs text-primary font-medium">{cert.year}</span>
                </div>
              )
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            💡 Click CAPM to view certificate
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">4.5</div>
            <div className="text-sm text-muted-foreground">Years at TE Connectivity</div>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">13+</div>
            <div className="text-sm text-muted-foreground">Concurrent Projects</div>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">$1.3M</div>
            <div className="text-sm text-muted-foreground">Portfolio Value</div>
          </div>
          <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">20+</div>
            <div className="text-sm text-muted-foreground">BI Dashboards Built</div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20 text-center">
          <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Leadership & Engagement</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <strong>Employee Engagement Lead</strong> for a team of 70-80 people at TE Connectivity.
            Organizing team-building sessions, workshops, and events to strengthen collaboration and morale.
          </p>
        </div>
      </div>
    </section>
  )
}
