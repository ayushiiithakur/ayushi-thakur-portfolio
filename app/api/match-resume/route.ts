import { NextResponse } from 'next/server';

const AYUSHI_PROFILE = `Ayushi Thakur - Agile Project Manager Profile:

Experience: 4.5 years at TE Connectivity
Current Role: IT Project Manager managing 13+ concurrent global projects ($1.3M)

Location: Bengaluru, India (open to remote opportunities and international relocation)

Core Strengths:
- PMO Governance & Agile/Scrum execution
- AI integration (Claude daily, built AI tools)
- Data analytics (Power BI, Tableau, SQL)
- Cross-functional leadership (70-80 person team engagement)
- Technical PM skills (Jira, Azure DevOps, Python basics)
- Global team collaboration across time zones

Key Achievements:
- Built Code Health Monitor (AI-powered, team-wide adoption)
- 40% faster reporting through AI automation
- 20% reduction in delivery delays via AI risk analysis
- 20+ BI dashboards for global stakeholders
- CAPM certified (Above Target Score)

AI/Tech Skills:
- Claude AI (expert, daily use)
- Prompt engineering, vibe coding, AI application development
- Power BI, Tableau, SQL, Python
- Jira, Confluence, Azure DevOps

Industries: Technology, Manufacturing (TE Connectivity)

Compensation Approach:
- Prefers to discuss after understanding full role scope and expectations
- Open to competitive packages aligned with market value and experience level
- Considers total compensation including growth opportunities, learning, and impact potential

Work Authorization: Indian citizen, eligible for most international work visas`;

export async function POST(req: Request) {
  try {
    const { jobDescription } = await req.json();

    const apiUrl = process.env.LITELLM_API_URL || 'https://np-litellm.connect.te.com';
    const apiKey = process.env.LITELLM_API_KEY;
    const model = process.env.LITELLM_MODEL || 'claude-sonnet-4-5';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(`${apiUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: 'You are an expert recruiter analyzing candidate fit for a role.',
          },
          {
            role: 'user',
            content: `Analyze the fit between this candidate profile and job description. Provide:
1. Overall fit score (0-100%)
2. Matching strengths (3-5 bullet points)
3. Potential gaps (if any)
4. Custom pitch highlighting most relevant experience

Candidate Profile:
${AYUSHI_PROFILE}

Job Description:
${jobDescription}`,
          },
        ],
        max_tokens: 1500,
        temperature: 0.7,
        timeout: 60000,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('LiteLLM API error:', error);
      return NextResponse.json(
        { error: 'Failed to match resume' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'No response';

    return NextResponse.json({ analysis: text });
  } catch (error: any) {
    console.error('Resume match error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to match resume' },
      { status: 500 }
    );
  }
}
