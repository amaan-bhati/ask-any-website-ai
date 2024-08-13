import { RAGChat } from "@upstash/rag-chat";

export const ragChat = new RAGChat({
    model: upstash("meta-llama/Meta-Llama-3-8B-Instruct"),
})

function upstash(arg0: string): import("@upstash/rag-chat").ChatOpenAI<import("@langchain/openai").ChatOpenAICallOptions> | undefined {
    throw new Error("Function not implemented.");
}
