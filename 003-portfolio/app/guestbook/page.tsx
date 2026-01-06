"use client"

import { useState } from "react"
import GuestProfile from "@/components/GuestProfile"
import ChatInput from "@/components/ChatInput"

interface Message {
    id: number;
    text: string;
    color: string;

}
export default function GuestBookPage() {
    const [messages, setMessages] = useState<Message[]>([]);

    const COLORS = [
        'bg-red-400', 'bg-blue-400', 'bg-green-400', 
        'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'
    ];
    
    const handleSendMessage = (text: string) => {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]
        console.log(randomColor)
        const newMessage: Message = {
            id: Date.now(),
            text: text,
            color: randomColor
        };

        setMessages((prev) => [...prev, newMessage]);
    };

    return (
        <div className="w-full">
            <div className="fixed top-16 w-full">
                <div className="flex flex-col gap-2 px-6 w-full">
                    {messages.map((message) => (
                        <GuestProfile
                            color={message.color}
                            nickname="닉네임"
                            message={message.text}
                        />
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 py-4">
                <ChatInput onSendMessage={handleSendMessage} placeholder="방문해주셔서 감사합니다. 따뜻한 한 마디를 남겨주세요." chatbot={false}/>
            </div>
        </div>
    )
}