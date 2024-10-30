import { useEffect } from 'react';

const useScrollDelay = (scrollAmount = 51) => {
    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();

            const delta = Math.sign(event.deltaY);

            window.scrollBy({
                top: delta * scrollAmount,
                left: 0,
                behavior: 'smooth',
            });
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollAmount]);
};

export default useScrollDelay;
