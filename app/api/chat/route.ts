import { NextResponse } from "next/server";

// Minimal stub so Vercel can build even without OpenAI
export async function POST() {
  return NextResponse.json({
    reply: "Chatbot temporarily disabled while I finish deployment.",
  });
}



/* import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });

    const reply = completion.choices[0]?.message?.content || "No response.";

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error calling OpenAI:', err);
    return new Response("Error getting OpenAI response", { status: 500 });
  }
}

*/
