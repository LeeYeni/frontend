"use client"

import { useState } from "react";
import { Mail, Tag, MessageSquareText } from "lucide-react";
import ContactInput from "@/components/ContactInput";
import ActionableInput from "@/components/ActionableInput";

export default function MailSenderCard() {
    const [formData, setFormData] = useState({
        email: "",
        title: "",
        content: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="fixed top-16 p-4 flex flex-col w-full gap-4">
            <div className="flex flex-col gap-4">
                <ContactInput
                    label="이메일"
                    placeholder="이메일 주소를 입력해주세요"
                    value={formData.email}
                    onChange={(value) => handleInputChange("email", value)}
                    icon={Mail}
                />

                <ContactInput
                    label="제목"
                    placeholder="제목을 입력해주세요"
                    value={formData.title}
                    onChange={(value) => handleInputChange("title", value)}
                    icon={Tag}
                />

                <ActionableInput
                    label="내용"
                    placeholder="내용을 입력해주세요"
                    value={formData.content}
                    onChange={(value) => handleInputChange("content", value)}
                    icon={MessageSquareText}
                />
            </div>

            <div className="flex justify-center items-center text-xs py-2">
                메일 전송 Agent를 사용해보세요
            </div>
        </div>
    )
}