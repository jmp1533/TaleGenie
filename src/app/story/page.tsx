'use client';

import { useEffect, useState } from 'react';
import StorySlide from '@/components/StorySlide';

interface Slide {
    text: string;
    imageUrl: string;
}

export default function StoryPage() {
    const [slides, setSlides] = useState<Slide[]>([]);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem('generatedSlides');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setSlides(parsed);
                }
            } catch (e) {
                console.error('슬라이드 파싱 오류:', e);
            }
        }
    }, []);

    const handleNext = () => {
        if (pageIndex < slides.length - 1) {
            setPageIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (pageIndex > 0) {
            setPageIndex((prev) => prev - 1);
        }
    };

    const current = slides[pageIndex];
    const isFirst = pageIndex === 0;
    const isLast = pageIndex === slides.length - 1;

    if (!current) {
        return (
            <p className="text-center mt-10 text-gray-500">저장된 동화가 없습니다.</p>
        );
    }

    return (
        <div className="w-full px-4 py-8">
            <StorySlide
                imageUrl={current.imageUrl}
                text={current.text}
                onNext={handleNext}
                onPrev={handlePrev}
                isFirst={isFirst}
                isLast={isLast}
            />
        </div>
    );
}