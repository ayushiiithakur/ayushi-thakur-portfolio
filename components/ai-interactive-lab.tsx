"use client"

import { useState } from "react"
import { Bot, FileText, Target, Workflow, Mic, Send, Loader2, Sparkles } from "lucide-react"

type Tab = "chat" | "project" | "resume" | "workflow" | "voice"

export function AIInteractiveLab() {
  const [activeTab, setActiveTab] = useState<Tab>("chat")

  const tabs = [
    { id: "chat" as Tab, label: "AI Chat", icon: Bot, description: "Ask me anything" },
    { id: "project" as Tab, label: "Project Analyzer", icon: FileText, description: "AI PM analysis" },
    { id: "resume" as Tab, label: "Resume Matcher", icon: Target, description: "Job fit analysis" },
    { id: "workflow" as Tab, label: "AI Workflow", icon: Workflow, description: "See AI in action" },
    { id: "voice" as Tab, label: "Voice Assistant", icon: Mic, description: "Hands-free" }
  ]

  return (
    <section id="ai-lab" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Live AI Demonstration
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            AI <span className="gradient-text">Interactive Lab</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just read about my AI skills—experience them. These features run on actual AI,
            not demos. Try them out and see how I integrate AI into real PM workflows.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background border border-border hover:border-primary/50 hover:bg-accent"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <div className="text-left">
                <div className="text-sm font-semibold">{tab.label}</div>
                <div className="text-xs opacity-75">{tab.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-background rounded-2xl border border-border shadow-2xl overflow-hidden">
          {activeTab === "chat" && <ChatTab />}
          {activeTab === "project" && <ProjectAnalyzerTab />}
          {activeTab === "resume" && <ResumeMatcherTab />}
          {activeTab === "workflow" && <AIWorkflowTab />}
          {activeTab === "voice" && <VoiceAssistantTab />}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          ⚡ Powered by real AI • All responses generated live
        </p>
      </div>
    </section>
  )
}

// Chat Tab Component
function ChatTab() {
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState<{role: string, content: string}[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!message.trim()) return

    const userMessage = message
    setMessage("")
    setChat(prev => [...prev, { role: "user", content: userMessage }])
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      })

      const data = await res.json()
      setChat(prev => [...prev, { role: "assistant", content: data.response || data.error }])
    } catch (error) {
      setChat(prev => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please try again." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
        <Bot className="w-6 h-6 text-primary" />
        <span>Ask Me Anything About Ayushi</span>
      </h3>
      <p className="text-muted-foreground mb-6">
        This AI knows everything about my experience, projects, and skills. Try asking:
        "What's your experience with AI?" or "Tell me about the Code Health project"
      </p>

      {/* Chat Messages */}
      <div className="bg-muted/30 rounded-lg p-4 h-96 overflow-y-auto mb-4 space-y-4">
        {chat.length === 0 && (
          <div className="text-center text-muted-foreground py-16">
            <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Start a conversation! Ask me anything.</p>
          </div>
        )}
        {chat.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] px-4 py-2 rounded-lg ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-background border border-border"
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-background border border-border px-4 py-2 rounded-lg">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about experience, projects, skills..."
          className="flex-1 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading || !message.trim()}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Send</span>
        </button>
      </div>
    </div>
  )
}

// Project Analyzer Tab
function ProjectAnalyzerTab() {
  const [project, setProject] = useState("")
  const [analysis, setAnalysis] = useState("")
  const [loading, setLoading] = useState(false)

  const analyze = async () => {
    if (!project.trim()) return
    setLoading(true)
    setAnalysis("")

    try {
      const res = await fetch("/api/analyze-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectDescription: project })
      })

      const data = await res.json()
      setAnalysis(data.analysis || data.error)
    } catch (error) {
      setAnalysis("Sorry, something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
        <FileText className="w-6 h-6 text-primary" />
        <span>AI Project Analyzer</span>
      </h3>
      <p className="text-muted-foreground mb-6">
        Describe a project or problem, and I'll analyze it as an AI-enabled PM—risks, phases, AI solutions, and metrics.
      </p>

      <textarea
        value={project}
        onChange={(e) => setProject(e.target.value)}
        placeholder="Example: We need to migrate 50+ microservices to a new cloud provider with zero downtime..."
        className="w-full h-32 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none mb-4"
        disabled={loading}
      />

      <button
        onClick={analyze}
        disabled={loading || !project.trim()}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mb-6"
      >
        {loading ? (
          <><Loader2 className="w-5 h-5 animate-spin" /><span>Analyzing...</span></>
        ) : (
          <><Sparkles className="w-5 h-5" /><span>Analyze Project</span></>
        )}
      </button>

      {analysis && (
        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg p-6 border border-primary/20">
          <h4 className="font-semibold text-primary mb-3">AI Analysis:</h4>
          <div className="text-sm whitespace-pre-wrap">{analysis}</div>
        </div>
      )}
    </div>
  )
}

// Resume Matcher Tab
function ResumeMatcherTab() {
  const [jobDesc, setJobDesc] = useState("")
  const [match, setMatch] = useState("")
  const [loading, setLoading] = useState(false)

  const analyzeMatch = async () => {
    if (!jobDesc.trim()) return
    setLoading(true)
    setMatch("")

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 60000) // 60 second timeout

      const res = await fetch("/api/match-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: jobDesc }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!res.ok) {
        const error = await res.json()
        setMatch(error.error || "Failed to analyze. Please try a shorter job description.")
        return
      }

      const data = await res.json()
      setMatch(data.analysis || data.error || "No analysis received.")
    } catch (error: any) {
      if (error.name === 'AbortError') {
        setMatch("Request took too long. Please try with a shorter job description (under 500 words).")
      } else {
        setMatch("Sorry, something went wrong. Please try again with a shorter description.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
        <Target className="w-6 h-6 text-primary" />
        <span>AI Resume Matcher</span>
      </h3>
      <p className="text-muted-foreground mb-6">
        Paste a job description and AI will analyze my fit—match score, strengths, gaps, and a custom pitch.
      </p>

      <textarea
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
        placeholder="Paste job description here... (Keep it under 500 words for faster analysis)"
        className="w-full h-40 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none mb-4"
        disabled={loading}
        maxLength={3000}
      />
      <p className="text-xs text-muted-foreground mb-2">💡 Tip: For faster results, paste just the key requirements (not the entire job posting)</p>

      <button
        onClick={analyzeMatch}
        disabled={loading || !jobDesc.trim()}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mb-6"
      >
        {loading ? (
          <><Loader2 className="w-5 h-5 animate-spin" /><span>Analyzing Fit...</span></>
        ) : (
          <><Target className="w-5 h-5" /><span>Analyze Match</span></>
        )}
      </button>

      {match && (
        <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-lg p-6 border border-green-500/20">
          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3">Match Analysis:</h4>
          <div className="text-sm whitespace-pre-wrap">{match}</div>
        </div>
      )}
    </div>
  )
}

// AI Workflow Tab
function AIWorkflowTab() {
  const [scenario, setScenario] = useState("")
  const [step, setStep] = useState<string>("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const steps = [
    { id: "analyze", label: "1. Analyze Scenario", description: "Identify risks & stakeholders" },
    { id: "breakdown", label: "2. Break Into Sprints", description: "Agile phases & deliverables" },
    { id: "risks", label: "3. AI Risk Analysis", description: "Top 5 risks + AI mitigation" },
    { id: "dashboard", label: "4. Metrics Dashboard", description: "KPIs to track in Power BI" }
  ]

  const runStep = async (stepId: string) => {
    if (!scenario.trim()) {
      alert("Please enter a project scenario first")
      return
    }

    setStep(stepId)
    setLoading(true)
    setResult("")

    try {
      const res = await fetch("/api/ai-workflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario, step: stepId })
      })

      const data = await res.json()
      setResult(data.result || data.error)
    } catch (error) {
      setResult("Sorry, something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
        <Workflow className="w-6 h-6 text-primary" />
        <span>AI PM Workflow Demo</span>
      </h3>
      <p className="text-muted-foreground mb-6">
        Watch AI assist through my actual PM workflow. Enter a scenario and click each step to see AI in action.
      </p>

      <textarea
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        placeholder="Enter a project scenario... (e.g., 'Build a mobile app for 100K users in 6 months with a team of 5')"
        className="w-full h-24 px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none mb-6"
        disabled={loading}
      />

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => runStep(s.id)}
            disabled={loading || !scenario.trim()}
            className={`p-4 rounded-lg border text-left transition-all hover:border-primary/50 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed ${
              step === s.id ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            <div className="font-semibold text-sm mb-1">{s.label}</div>
            <div className="text-xs text-muted-foreground">{s.description}</div>
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="ml-3 text-muted-foreground">AI processing...</span>
        </div>
      )}

      {result && !loading && (
        <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg p-6 border border-purple-500/20">
          <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-3">AI Result:</h4>
          <div className="text-sm whitespace-pre-wrap">{result}</div>
        </div>
      )}
    </div>
  )
}

// Voice Assistant Tab
function VoiceAssistantTab() {
  const [listening, setListening] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const stopSpeaking = () => {
    window.speechSynthesis.cancel()
    setSpeaking(false)
  }

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Speech recognition not supported in this browser. Try Chrome or Edge.")
      return
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => setListening(true)
    recognition.onend = () => setListening(false)

    recognition.onresult = async (event: any) => {
      const text = event.results[0][0].transcript
      setTranscript(text)
      setLoading(true)

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text })
        })

        const data = await res.json()
        const aiResponse = data.response || data.error
        setResponse(aiResponse)

        // Speak response with female voice
        const speakResponse = () => {
          const utterance = new SpeechSynthesisUtterance(aiResponse)

          // Get voices and select female
          const voices = window.speechSynthesis.getVoices()

          // Try multiple female voice patterns
          const femaleVoice = voices.find(voice =>
            voice.name.toLowerCase().includes('female') ||
            voice.name.toLowerCase().includes('samantha') ||
            voice.name.toLowerCase().includes('karen') ||
            voice.name.toLowerCase().includes('zira') ||
            voice.name.toLowerCase().includes('microsoft zira') ||
            voice.name.toLowerCase().includes('google uk english female') ||
            voice.name.toLowerCase().includes('google us english female')
          ) || voices.find(voice =>
            voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female')
          ) || voices.find(voice =>
            voice.lang.startsWith('en-') && !voice.name.toLowerCase().includes('male')
          )

          if (femaleVoice) {
            utterance.voice = femaleVoice
            console.log('Using voice:', femaleVoice.name)
          } else {
            // Fallback: use higher pitch to sound more feminine
            console.log('No female voice found, using pitch adjustment')
          }

          utterance.rate = 0.95
          utterance.pitch = 1.3 // Higher pitch for more feminine sound
          utterance.volume = 1.0

          utterance.onstart = () => setSpeaking(true)
          utterance.onend = () => setSpeaking(false)

          window.speechSynthesis.speak(utterance)
        }

        // Wait for voices to load if needed
        if (window.speechSynthesis.getVoices().length === 0) {
          window.speechSynthesis.onvoiceschanged = () => {
            speakResponse()
          }
        } else {
          speakResponse()
        }
      } catch (error) {
        setResponse("Sorry, something went wrong.")
      } finally {
        setLoading(false)
      }
    }

    recognition.start()
  }

  return (
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
        <Mic className="w-6 h-6 text-primary" />
        <span>Voice Assistant</span>
      </h3>
      <p className="text-muted-foreground mb-6">
        Just like the voice assistant I built for Code Health. Click the mic and ask about my experience hands-free.
      </p>

      <div className="flex flex-col items-center py-12">
        <div className="flex items-center space-x-4">
          {/* Main Mic Button */}
          <button
            onClick={startListening}
            disabled={listening || loading || speaking}
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${
              listening
                ? "bg-red-500 animate-pulse"
                : "bg-primary hover:bg-primary/90"
            } disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl`}
          >
            {loading ? (
              <Loader2 className="w-16 h-16 text-white animate-spin" />
            ) : (
              <Mic className={`w-16 h-16 text-white ${listening ? "animate-pulse" : ""}`} />
            )}
          </button>

          {/* Stop/Pause Button (only show when speaking) */}
          {speaking && (
            <button
              onClick={stopSpeaking}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center shadow-xl transition-all animate-fade-in"
              aria-label="Stop speaking"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <rect x="6" y="4" width="8" height="12" rx="1" />
              </svg>
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {listening ? "🎤 Listening..." : loading ? "⏳ Processing..." : speaking ? "🔊 Speaking... (Click ⏹ to stop)" : "Click to speak"}
        </p>
      </div>

      {transcript && (
        <div className="bg-muted/50 rounded-lg p-4 mb-4">
          <p className="text-sm font-semibold mb-2">You said:</p>
          <p className="text-sm italic">{transcript}</p>
        </div>
      )}

      {response && (
        <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg p-6 border border-primary/20">
          <p className="text-sm font-semibold text-primary mb-2">AI Response:</p>
          <p className="text-sm whitespace-pre-wrap">{response}</p>
        </div>
      )}

      <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
        <p className="text-sm text-amber-600 dark:text-amber-400">
          💡 <strong>Tip:</strong> Works best in Chrome or Edge. Try asking: "What's your experience with AI?" or "Tell me about Code Health"
        </p>
      </div>
    </div>
  )
}
