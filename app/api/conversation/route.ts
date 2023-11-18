import {auth} from "@clerk/nextjs"
import { NextResponse } from "next/server";
import {Configuration, OpenAIApi, ChatCompletionRequestMessage} from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are Jarvis a personal assistant, on your first response you will answer by saying 'hello it Jarvis here!' buy say it once on the follow up question answer normally'",
}

export async function POST(
    req: Request
){
    try {
        const {userId} = auth()
        const body = await req.json();
        const {messages} = body

        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        if(!configuration.apiKey) { 
            return new NextResponse("OpenAI Key not configured", {status: 500 })
        }

        if(!messages) {
            return new NextResponse("message not found", {status: 400});
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages]
        })

        return NextResponse.json(response.data.choices[0].message)

    } catch(error) {
        console.log("[CONVERSATION_ERROR]", error)
        return new NextResponse("internal error", {status: 500})
    }
}
