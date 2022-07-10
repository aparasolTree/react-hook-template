import React from 'react';
import { useScroller } from '../core/useScroller';

export default {
    title: 'useScroller',
};

export function UseScrollerEcample() {
    const scroller = useScroller({ x: 0, y: 200, isSmooth: true });

    return (
        <div style={{ height: '200vh' }}>
            <button type="button" onClick={scroller}>
                Scroll
            </button>
        </div>
    );
}
