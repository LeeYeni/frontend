"use client"

import { useState } from "react";
import ChatBubble from "@/components/ChatBubble";
import ChatInput from "@/components/ChatInput";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot"
}

export default function ChatbotPage() {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = (text: string) => {
        const newMessage: Message = {
            id: Date.now(),
            text: text,
            sender: "user"
        };

        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <div className="fixed z-0 w-full top-16 h-full px-12">
            <div className="flex flex-col justify-start items-end py-4 gap-4">
                {messages.map((message) => (
                    <ChatBubble key={message.id} content={message.text} />
                ))}
            </div>

            <div className="bg-[#FAFAFA]">
                <ChatInput onSendMessage={handleSendMessage} placeholder="챗봇에게 물어보기" chatbot />
            </div>
        </div>
    )
}