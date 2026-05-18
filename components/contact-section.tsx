"use client"

import { Mail, Linkedin, Download } from "lucide-react"

export function ContactSection() {

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Interested in a PM who operationalizes AI systems, not just uses AI tools?
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl p-6 border border-primary/20 max-w-3xl mx-auto">
              <p className="text-base text-foreground font-medium">
                I&apos;m looking for <strong>Project Manager and Program Manager roles</strong> at GCCs and technology companies in <strong>Bengaluru</strong>.
                If your team is building AI-powered products or scaling operational systems, I&apos;d love to talk.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Primary Actions */}
            <div className="space-y-6">
              {/* Quick Actions - Most Important */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <a
                  href="/resume.pdf"
                  download
                  className="group flex items-center justify-center space-x-3 px-8 py-5 bg-gradient-to-r from-primary to-purple-500 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="mailto:ayushiiithakur99@gmail.com"
                  className="flex items-center justify-center space-x-3 px-8 py-5 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
              </div>

              {/* Direct Contact */}
              <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/ayushi-thakur-617036199/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg hover:bg-background transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">View profile & connect</div>
                    </div>
                  </a>

                  <a
                    href="mailto:ayushiiithakur99@gmail.com"
                    className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg hover:bg-background transition-colors"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Email</div>
                      <div className="text-xs text-muted-foreground">ayushiiithakur99@gmail.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Status */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
                <div className="flex items-center space-x-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">Actively seeking opportunities</div>
                    <div className="text-xs text-muted-foreground">Project Manager • Program Manager • PMO • Technical PM roles in Bengaluru</div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-background rounded-2xl p-6 border border-border">
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response time:</strong> I respond to all opportunities within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
