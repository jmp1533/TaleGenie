import { motion } from 'framer-motion';

interface Props {
    imageUrl: string;
    text: string;
    onNext: () => void;
    onPrev: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function StorySlide({
   imageUrl,
   text,
   onNext,
   onPrev,
   isFirst,
   isLast,
}: Props) {
    return (
        <motion.div
            className="w-full flex flex-col items-center justify-start bg-white px-4 py-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img
                src={imageUrl}
                alt="story image"
                className="max-w-full max-h-96 rounded-2xl object-contain shadow-xl mb-6"
            />

            <p className="text-xl font-semibold md:text-2xl whitespace-pre-wrap mb-10">
                {text}
            </p>

            <div className="flex gap-4">
                <button
                    onClick={onPrev}
                    disabled={isFirst}
                    className={`px-6 py-3 rounded-full font-bold shadow-md text-white ${
                        isFirst
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-indigo-400 hover:bg-indigo-500'
                    }`}
                >
                    이전
                </button>

                <button
                    onClick={onNext}
                    disabled={isLast}
                    className={`px-6 py-3 rounded-full font-bold shadow-md text-white ${
                        isLast
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-yellow-400 hover:bg-yellow-500'
                    }`}
                >
                    다음
                </button>
            </div>
        </motion.div>
    );
}
