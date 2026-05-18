import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { scenario, step } = await req.json();

    const apiUrl = process.env.LITELLM_API_URL || 'https://np-litellm.connect.te.com';
    const apiKey = process.env.LITELLM_API_KEY;
    const model = process.env.LITELLM_MODEL || 'claude-sonnet-4-5';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    let prompt = '';

    switch (step) {
      case 'analyze':
        prompt = `As an AI-enabled PM, analyze this scenario and identify key risks, stakeholders, and success criteria:\n\n${scenario}`;
        break;
      case 'breakdown':
        prompt = `Break down this project into Agile sprints/phases with clear deliverables:\n\n${scenario}`;
        break;
      case 'risks':
        prompt = `Identify top 5 risks for this project and suggest AI-powered mitigation strategies:\n\n${scenario}`;
        break;
      case 'dashboard':
        prompt = `Suggest key metrics and KPIs to track for this project. What would you visualize in a Power BI dashboard?\n\n${scenario}`;
        break;
      default:
        prompt = scenario;
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
            content: 'You are Ayushi Thakur, an Agile PM based in Bengaluru, India, demonstrating how you use AI in your PM workflow. Be concise, practical, and consider Indian market context when relevant.',
          },
          {
            role: 'user',
            content: prompt,
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
        { error: 'Failed to process workflow' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'No response';

    return NextResponse.json({ result: text });
  } catch (error: any) {
    console.error('AI workflow error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process workflow' },
      { status: 500 }
    );
  }
}
