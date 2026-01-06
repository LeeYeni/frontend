"use client"
import { useState } from "react";
import ProjectButton from "@/components/ProjectButton";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage() {
    const [isVisible, setIsVisible] = useState(false);
    const STACK = [
        "DATA SCIENCE", "ML", "NLP", "BACKEND", "FULLSTACK"
    ]

    return (
        <div className="fixed w-full top-16">
            <div className="flex flex-col p-10 gap-4">
                <div className="flex flex-row gap-4">
                    {STACK.map((s) => (
                        <ProjectButton key={s} label={s} />
                    ))}
                </div>
            </div>
        </div>
    )
}