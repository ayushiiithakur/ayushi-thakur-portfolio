"use client"

import { ArrowRight } from "lucide-react"

interface WorkflowStep {
  label: string
  sublabel?: string
  color?: string
}

interface WorkflowDiagramProps {
  title: string
  steps: WorkflowStep[]
  variant?: "horizontal" | "vertical"
}

export function WorkflowDiagram({ title, steps, variant = "horizontal" }: WorkflowDiagramProps) {
  if (variant === "vertical") {
    return (
      <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-8 border border-primary/10">
        <h4 className="text-lg font-semibold text-center mb-8">{title}</h4>
        <div className="space-y-4 max-w-md mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full ${step.color || 'bg-primary/20'} flex items-center justify-center flex-shrink-0 border-2 ${step.color?.replace('bg-', 'border-') || 'border-primary'}`}>
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <div className="flex-1 p-3 bg-background/70 rounded-lg border border-border">
                  <div className="font-medium text-sm">{step.label}</div>
                  {step.sublabel && (
                    <div className="text-xs text-muted-foreground mt-1">{step.sublabel}</div>
                  )}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-5 w-0.5 h-4 bg-gradient-to-b from-primary/50 to-purple-500/50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl p-8 border border-primary/10">
      <h4 className="text-lg font-semibold text-center mb-8">{title}</h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`px-6 py-4 rounded-lg border-2 ${step.color || 'border-primary bg-primary/10'} min-w-[180px]`}>
                <div className="font-semibold text-sm text-center">{step.label}</div>
                {step.sublabel && (
                  <div className="text-xs text-muted-foreground text-center mt-1">{step.sublabel}</div>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-6 h-6 text-primary mx-2 hidden md:block flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
