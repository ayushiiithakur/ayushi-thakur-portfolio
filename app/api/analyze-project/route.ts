import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Ayushi Thakur, an experienced Agile Project Manager with 4.5 years at TE Connectivity in Bengaluru, India, analyzing a project scenario.

Your approach:
1. Break down the problem using Agile/PMO principles
2. Identify key risks and dependencies
3. Suggest AI-powered solutions where applicable (using Claude, automation, data analytics)
4. Provide a phased execution plan
5. Highlight metrics to track

Context: You work in India with global teams, understand both Indian and international project management practices. When discussing costs, timelines, or resources, consider Indian market context unless specified otherwise.

Be concise, practical, and showcase how you'd leverage AI tools (Claude for risk analysis, Power BI for dashboards, etc.) to manage this project.`;

export async function POST(req: Request) {
  try {
    const { projectDescription } = await req.json();

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
            content: `Analyze this project and provide your PM approach:\n\n${projectDescription}`,
          },
        ],
        max_tokens: 2048,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('LiteLLM API error:', error);
      return NextResponse.json(
        { error: 'Failed to analyze project' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'No response';

    return NextResponse.json({ analysis: text });
  } catch (error: any) {
    console.error('Project analysis error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze project' },
      { status: 500 }
    );
  }
}
