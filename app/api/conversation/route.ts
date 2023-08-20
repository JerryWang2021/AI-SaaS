import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { useId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!useId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apikey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    return NextResponse.json(response.data.choices[0], message);
  } catch (err) {
    console.log("[CONVERSATION_ERROR]", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
