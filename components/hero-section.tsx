"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Download, Mail, Linkedin, Award, Briefcase, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12">

          {/* Profile Picture with Premium Styling */}
          <div className={`flex flex-col items-center space-y-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative group">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-md group-hover:blur-lg transition-all duration-300 opacity-60"></div>

              {/* Profile image container */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Ayushi Thakur"
                  width={160}
                  height={160}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <a
                href="https://www.linkedin.com/in/ayushi-thakur-617036199/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-purple-500 text-white rounded-full p-3 shadow-xl border-4 border-background hover:scale-110 transition-transform duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Role Badge */}
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30 backdrop-blur">
              <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Project Manager
              </span>
            </div>
          </div>

          {/* Credentials Bar */}
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur border border-border shadow-lg">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Certified Project Manager</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur border border-border shadow-lg">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI Operations Expert</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur border border-border shadow-lg">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Enterprise Adoption Leader</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30 backdrop-blur shadow-lg">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Pursuing PMP Certification</span>
            </div>
          </div>

          {/* Availability Badge */}
          <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">Open to Project & Program Management Roles</span>
          </div>

          {/* Main Heading */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="block text-foreground/40 text-2xl sm:text-3xl font-normal mb-4">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                Ayushi Thakur
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground max-w-4xl mx-auto leading-tight">
              AI-Native Project Leader &
              <br className="hidden sm:block" />
              <span className="text-primary"> Operations Strategist</span>
            </p>
          </div>

          {/* Value Proposition */}
          <div className={`transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              I don't just use AI tools—I <span className="text-foreground font-medium">architect and deploy</span> AI systems that improve
              <span className="text-foreground font-medium"> organizational execution at scale</span>
            </p>
          </div>

          {/* Key Achievements */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-border backdrop-blur hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Faster executive reporting</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-border backdrop-blur hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">20%</div>
              <div className="text-sm text-muted-foreground">Reduction in delivery delays</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/5 to-primary/5 border border-border backdrop-blur hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-primary mb-2">96%</div>
              <div className="text-sm text-muted-foreground">Time reduction (Code Health)</div>
            </div>
          </div>

          {/* Premium CTAs */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              href="/ai-lab"
              className="group relative px-10 py-4 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Explore AI Lab</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="px-10 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Link>
          </div>

          {/* Social Links - Refined */}
          <div className={`flex justify-center items-center space-x-8 pt-12 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="https://www.linkedin.com/in/ayushi-thakur-617036199/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <div className="p-3 rounded-xl bg-background/50 border border-border group-hover:border-primary/50 group-hover:shadow-lg transition-all">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>

            <a
              href="mailto:ayushiiithakur99@gmail.com"
              className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="Email"
            >
              <div className="p-3 rounded-xl bg-background/50 border border-border group-hover:border-primary/50 group-hover:shadow-lg transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="Download Resume"
            >
              <div className="p-3 rounded-xl bg-background/50 border border-border group-hover:border-primary/50 group-hover:shadow-lg transition-all">
                <Download className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
