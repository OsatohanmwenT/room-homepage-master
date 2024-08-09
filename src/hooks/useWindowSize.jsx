import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleChange = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleChange);

        return () => {
            window.removeEventListener('resize', handleChange);
        };
    }, []);

    return width;
};

export default useWindowSize;