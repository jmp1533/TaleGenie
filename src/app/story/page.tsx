'use client';

import { useEffect, useState } from 'react';
import StorySlide from '@/components/StorySlide';

interface Slide {
    text: string;
    imageUrl: string;
}

export default function StoryPage() {
    const [slides, setSlides] = useState<Slide[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('generatedSlides');
        if (stored) {
            setSlides(JSON.parse(stored));
        }
    }, []);

    return (
        <div className="flex overflow-x-auto snap-x">
            {slides.map((slide, index) => (
                <StorySlide
                    key={index}
                    imageUrl={slide.imageUrl}
                    text={slide.text}
                />
            ))}
        </div>
    );
}
