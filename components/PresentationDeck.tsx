import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Presentation, Moon, Sun } from 'lucide-react';
import { slides } from './slides/utils';

type PageIndicatorProps = {
    number: string;
    isDark: boolean;
};

type AnimationDirection = 'left' | 'right' | 'up' | 'down';

const SlideTransition = ({
    children,
    direction
}: {
    children: React.ReactNode;
    direction: AnimationDirection;
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const getAnimationClass = () => {
        switch (direction) {
            case 'right':
                return 'animate-slide-left';
            case 'left':
                return 'animate-slide-right';
            case 'up':
                return 'animate-slide-down';
            case 'down':
                return 'animate-slide-up';
        }
    };

    return (
        <div
            className={`transform ${mounted ? getAnimationClass() : ''}`}
        >
            {children}
        </div>
    );
};

const PageIndicator = ({ number, isDark }: PageIndicatorProps) => {
    if (!number) return null;

    return (
        <div className="fixed top-4 right-4 z-50">
            <div className={`
        px-4 py-2 rounded-lg text-lg font-bold
        ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}
        shadow-lg border-2 
        ${isDark ? 'border-gray-600' : 'border-gray-200'}
        transition-all duration-200
      `}>
                Page: {number}
            </div>
        </div>
    );
};

const PresentationDeck = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [viewMode, setViewMode] = useState<'slides' | 'details'>('slides');
    const [isDark, setIsDark] = useState(false);
    const [numberBuffer, setNumberBuffer] = useState('');
    const [bufferTimeout, setBufferTimeout] = useState<NodeJS.Timeout | null>(null);
    const [slideDirection, setSlideDirection] = useState<AnimationDirection>('right');
    const [key, setKey] = useState(0);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setIsDark(prev => {
            const newTheme = !prev;
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            if (newTheme) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return newTheme;
        });
    }, []);

    const nextSlide = useCallback(() => {
        setSlideDirection('right');
        setKey(prev => prev + 1);
        setCurrentSlide(curr => (curr + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setSlideDirection('left');
        setKey(prev => prev + 1);
        setCurrentSlide(curr => (curr - 1 + slides.length) % slides.length);
    }, []);

    const toggleViewMode = useCallback(() => {
        const newMode = viewMode === 'slides' ? 'details' : 'slides';
        setSlideDirection(viewMode === 'slides' ? 'up' : 'down');
        setKey(prev => prev + 1);
        setViewMode(newMode);
    }, [viewMode]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowRight':
                    nextSlide();
                    setNumberBuffer('');
                    break;
                case 'ArrowLeft':
                    prevSlide();
                    setNumberBuffer('');
                    break;
                case 'd':
                case 'D':
                    if (viewMode !== 'details') toggleViewMode();
                    break;
                case 's':
                case 'S':
                    if (viewMode !== 'slides') toggleViewMode();
                    break;
                default:
                    if (/^\d$/.test(e.key)) {
                        if (bufferTimeout) clearTimeout(bufferTimeout);

                        setNumberBuffer(prev => {
                            const newBuffer = prev + e.key;
                            const slideNum = parseInt(newBuffer) - 1;

                            const timeout = setTimeout(() => {
                                setNumberBuffer('');
                            }, 750);
                            setBufferTimeout(timeout);

                            if (slideNum >= 0 && slideNum < slides.length) {
                                setSlideDirection(slideNum > currentSlide ? 'right' : 'left');
                                setKey(prev => prev + 1);
                                setCurrentSlide(slideNum);
                                setTimeout(() => setNumberBuffer(''), 200);
                                return newBuffer;
                            }
                            return newBuffer;
                        });
                    }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            if (bufferTimeout) clearTimeout(bufferTimeout);
        };
    }, [nextSlide, prevSlide, toggleViewMode, bufferTimeout, currentSlide, viewMode]);

    return (
        <>
            <PageIndicator number={numberBuffer} isDark={isDark} />
            <div className={`w-full max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden
        ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {slides[currentSlide].title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg transition-colors ${isDark ?
                                    'bg-gray-700 text-yellow-400 hover:bg-gray-600' :
                                    'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                    }`}
                                aria-label="Toggle theme"
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {currentSlide + 1} / {slides.length}
                            </div>
                            <button
                                onClick={toggleViewMode}
                                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${isDark ?
                                    'bg-gray-700 text-white hover:bg-gray-600' :
                                    'bg-purple-100 hover:bg-purple-200 text-gray-800'
                                    }`}
                            >
                                {viewMode === 'slides' ? (
                                    <><BookOpen className="w-5 h-5 mr-2" />Details</>
                                ) : (
                                    <><Presentation className="w-5 h-5 mr-2" />Slides</>
                                )}
                            </button>
                        </div>
                    </div>

                    <h2 className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {slides[currentSlide].subtitle}
                    </h2>

                    <div className="min-h-[400px] overflow-hidden relative">
                        <SlideTransition key={key} direction={slideDirection}>
                            <div className="w-full">
                                {viewMode === 'slides' ? slides[currentSlide].content : slides[currentSlide].details}
                            </div>
                        </SlideTransition>
                    </div>

                    <div className="flex justify-between mt-8">
                        <button
                            onClick={prevSlide}
                            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${isDark ?
                                'bg-gray-700 text-white hover:bg-gray-600' :
                                'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" />
                            Previous
                        </button>
                        <button
                            onClick={nextSlide}
                            className="flex items-center px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-white"
                        >
                            Next
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PresentationDeck;