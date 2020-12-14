import React, { useState, useEffect, useRef } from 'react';
import is from '../../library/is';
import './Bounce.css'

interface Props {
    width: string,
    height: string
}

const Bounce: React.FC<Props> = (props) => {
    const [width, setWidth] = useState<number | undefined>();
    const [height, setHeight] = useState<number | undefined>();
    const touchRef = useRef(false);

    useEffect(() => {
        //discover if touchscreen
        touchRef.current = is.touchScreen();

        const interval = setInterval(() => {
            //set width and height to calculate game dimensions
            setWidth(document.getElementById('bounce-container')?.offsetWidth)
            setHeight(document.getElementById('bounce-container')?.offsetHeight)
        }, 100)

        return () => {
            clearInterval(interval)
        };
    }, [])

    return (
        <div 
            id="bounce-container" 
            style={{width: props.width + "%", height: props.height + '%'}}
            >
                {width}
                {height}
            {
                touchRef.current && <div>Touched!</div>
            }
        </div>
    )
}

export default Bounce