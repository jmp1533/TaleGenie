'use client';

import { useState } from 'react';
import StorySlide from '@/components/StorySlide';

interface Slide {
    text: string;
    imageUrl: string;
}

interface Props {
    slides: Slide[];
}

export default function StoryBook({ slides }: Props) {
    const [pageIndex, setPageIndex] = useState(0);

    const isFirst = pageIndex === 0;
    const isLast = pageIndex === slides.length - 1;

    const handleNext = () => {
        if (!isLast) setPageIndex((prev) => prev + 1);
        else alert('이야기가 끝났어요!');
    };

    const handlePrev = () => {
        if (!isFirst) setPageIndex((prev) => prev - 1);
    };

    return (
        <div className="w-full px-4 py-8">
            <StorySlide
                imageUrl={slides[pageIndex].imageUrl}
                text={slides[pageIndex].text}
                onNext={handleNext}
                onPrev={handlePrev}
                isFirst={isFirst}
                isLast={isLast}
            />
        </div>
    );
}
