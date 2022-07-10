import { renderHook } from '@testing-library/react-hooks';
import { useScroller } from '.';

test('should scrollTo a position', () => {
    const spy = jest.spyOn(window, 'scrollTo').mockImplementation();
    const { result } = renderHook(() => useScroller({ x: 20, y: 0 }));

    result.current();

    expect(spy).toBeCalledWith({
        left: 20,
        top: 0,
        behavior: 'auto',
    });

    spy.mockRestore();
});
