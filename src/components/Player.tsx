import { DefaultUi, Embed, Player as Play, Youtube } from "@vime/react";
import { Add, Dislike, Like, PlayModule, Reveal } from "../assets/Icons";
import InfoModule from "./InfoModule";

import '@vime/core/themes/default.css';
import { LegacyRef, useRef } from "react";

interface PlayerProps {
    lesson: {
        videoId: string
        title: string
    }
    module: {
        title: string
        priority: number
        number: number
    }
}

export default function Player({ lesson, module }: PlayerProps) {
    return (
        <div>
            <div>
                <div className="pt-20 mx-auto h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <iframe
                        src={`https://www.youtube.com/embed/${lesson.videoId}?autoplay=0`}
                        className='w-full h-[78vh]'
                    ></iframe>
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-2">
                        <Add />
                        <Like />
                        <Dislike />
                    </div>
                    <Reveal />
                </div>
                <InfoModule title={module.title} priority={module.priority} number={module.number} />
                <p>{lesson.title}</p>
            </div>
        </div>
    )
}