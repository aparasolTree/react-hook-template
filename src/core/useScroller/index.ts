import { useCallback } from 'react';

export interface UseScrollerOptions {
    x?: number;
    y?: number;
    isSmooth?: boolean;
}

export const useScroller = ({ x, y, isSmooth }: UseScrollerOptions = {}) => useCallback(() => {
    if (!window) return;
    window.scrollTo({
        top: y,
        left: x,
        behavior: isSmooth ? 'smooth' : 'auto',
    });
}, []);
