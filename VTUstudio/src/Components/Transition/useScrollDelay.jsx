import { useEffect } from 'react';

const useScrollDelay = (scrollAmount = 50) => {
    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();

            // Normalize scroll speed across browsers
            const delta = Math.sign(event.deltaY);

            window.scrollBy({
                top: delta * scrollAmount,
                left: 0,
                behavior: 'smooth',
            });
        };

        // Add the event listener to control scrolling
        window.addEventListener('wheel', handleWheel, { passive: false });

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollAmount]);
};

export default useScrollDelay;
