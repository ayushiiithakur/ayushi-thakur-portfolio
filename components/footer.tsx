"use client"

import { Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">Ayushi Thakur</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Agile Project Manager turning AI from buzzword to competitive advantage. Built with Next.js and a lot of Claude.
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Powered by AI & built with Next.js</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ai-lab" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Lab
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/ai-toolkit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI Toolkit
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/resume.pdf" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Download Resume
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ayushi-thakur-617036199/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="mailto:ayushiiithakur99@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Ayushi Thakur. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>and AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
