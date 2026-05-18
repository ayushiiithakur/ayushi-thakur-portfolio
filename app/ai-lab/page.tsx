import { AIPMCopilot } from "@/components/ai-pm-copilot"
import { AIInteractiveLab } from "@/components/ai-interactive-lab"
import { Footer } from "@/components/footer"

export default function AILabPage() {
  return (
    <>
      <div className="pt-16">
        <AIPMCopilot />
        <AIInteractiveLab />
      </div>
      <Footer />
    </>
  )
}
