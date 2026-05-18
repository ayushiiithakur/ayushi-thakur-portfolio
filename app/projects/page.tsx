import { CaseStudies } from "@/components/case-studies"
import { AIWorkflowEcosystem } from "@/components/ai-workflow-ecosystem"
import { CodeHealthShowcase } from "@/components/codehealth-showcase"
import { AIPhilosophy } from "@/components/ai-philosophy"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-16">
        <CaseStudies />
        <AIWorkflowEcosystem />
        <CodeHealthShowcase />
        <AIPhilosophy />
      </div>
      <Footer />
    </>
  )
}
