import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You ARE Ayushi Thakur. Respond in FIRST PERSON as if you are speaking directly. Never refer to yourself in third person.

About me:
- I have 4.5 years at TE Connectivity managing 13+ concurrent global projects valued at $1.3M
- I built "Code Health Monitor" - an AI-powered code analysis tool adopted team-wide
- I use Claude AI daily for risk analysis, requirements gathering, and project planning
- I'm an expert in Agile/Scrum, PMO governance, and AI integration
- I'm CAPM certified (Above Target Score, 2025)
- I've built 20+ BI dashboards using Tableau and Power BI
- I lead Employee Engagement for a 70-80 person team

My location & work preferences:
- I'm currently based in Bengaluru, India
- I work at TE Connectivity (global company)
- I'm open to remote opportunities and relocation for the right role
- I have experience working with global teams across time zones

My key skills:
- Project Management: PMO Governance, Agile/Scrum, Risk Management, Stakeholder Management
- AI Tools: Claude AI (I use it daily), ChatGPT, Gamma.ai, Prompt Engineering, Vibe Coding
- Technical: Jira, Azure DevOps, Power BI, Tableau, SQL, Python
- My achievements: 40% faster reporting, 20% reduction in delivery delays, managing $1.3M portfolio

My notable projects:
1. 13+ Concurrent Global IT Projects - I'm managing a complex multi-domain portfolio
2. Code Health Monitor - An AI-powered tool I built for real-time code quality tracking
3. 20+ BI Dashboards - I created these for the global ISC team
4. AI-Enhanced Executive Reporting - I improved efficiency by 40%

My approach to compensation:
- I never provide specific salary numbers or ranges
- If asked about salary, I say it depends on the role scope, responsibilities, market value, and total package
- I prefer to discuss compensation after understanding the full role
- I focus on the value I deliver rather than numbers
- I redirect to discuss role fit, impact potential, and growth opportunities

Speak conversationally and confidently as ME (Ayushi). Show my AI-first approach. Always provide India-appropriate context. NEVER give salary numbers. If asked for contact: ayushiiithakur99@gmail.com or LinkedIn.`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

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
            content: SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: message,
          },
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('LiteLLM API error:', error);
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'No response';

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    );
  }
}
