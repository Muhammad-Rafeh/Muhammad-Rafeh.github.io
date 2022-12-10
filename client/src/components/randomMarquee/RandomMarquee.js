import React, { useEffect, useRef, useState } from 'react'
import './randomMarquee.css'
import MouseSpeed from 'mouse-speed'
var speed = new MouseSpeed();

const RandomMarquee = () => {

    const [ offsetFirstBlock, setOffsetFirstBlock] = useState(0)
    const [ offsetSecondBlock, setOffsetSecondBlock] = useState(0)

    const [interval1, setInterval1] = useState();

    const firstBlock = useRef();
    const secondBlock = useRef();
    const container = useRef();

    const moveLeft = () => {
        let offsetFirstBlock;
        let offsetSecondBlock;

        const firstBlockDimensions = firstBlock.current.getBoundingClientRect()
        const secondBlockDimensions = secondBlock.current.getBoundingClientRect()

        console.log("first block dimension")
        console.log(firstBlockDimensions)
        console.log("second block dimension")
        console.log(secondBlockDimensions)


        if(blockOutOfViewAndThereIsSpaceForOtherBlock(secondBlockDimensions)){
            console.log("a")

            setOffsetFirstBlock(prev => {
                offsetFirstBlock = prev;
                return prev + 10
            })

            firstBlock.current.style.position = 'relative'
            firstBlock.current.style.left = `${offsetFirstBlock}px`;

            setOffsetSecondBlock(prev => {
                offsetSecondBlock = prev;
                return prev + 10
            })
    
            secondBlock.current.style.position = 'relative'
            secondBlock.current.style.left = `${offsetSecondBlock}px`;
        }

        if(blockInView(secondBlockDimensions)){
            console.log("b")

            setOffsetSecondBlock(prev => {
                offsetSecondBlock = prev;
                return prev + 10
            })
    
            secondBlock.current.style.position = 'relative'
            secondBlock.current.style.left = `${offsetSecondBlock}px`;
        }

        if(blockCompletelyOffScreen(secondBlockDimensions)){
            console.log("c")

            setOffsetSecondBlock(prev => {
                offsetSecondBlock = -2 * secondBlockDimensions.width;
                return offsetSecondBlock
            })
    
            secondBlock.current.style.position = 'relative'
            secondBlock.current.style.left = `${offsetSecondBlock}px`;
        }

        if(blockOutOfViewAndThereIsSpaceForOtherBlock(firstBlockDimensions)){
            console.log("d")

            setOffsetFirstBlock(prev => {
                offsetFirstBlock = prev;
                return prev + 10
            })

            firstBlock.current.style.position = 'relative'
            firstBlock.current.style.left = `${offsetFirstBlock}px`;

            setOffsetSecondBlock(prev => {
                offsetSecondBlock = prev;
                return prev + 10
            })

            secondBlock.current.style.position = 'relative'
            secondBlock.current.style.left = `${offsetSecondBlock}px`;
        }

        if(blockInView(firstBlockDimensions)){
            console.log("e")

            setOffsetFirstBlock(prev => {
                offsetFirstBlock = prev;
                return prev + 10
            })
    
            firstBlock.current.style.position = 'relative'
            firstBlock.current.style.left = `${offsetFirstBlock}px`;
        }

        if(blockCompletelyOffScreen(firstBlockDimensions)){
            console.log("f")

            setOffsetFirstBlock(prev => {
                offsetFirstBlock = -1 * firstBlockDimensions.width;
                return offsetFirstBlock
            })
    
            firstBlock.current.style.position = 'relative'
            firstBlock.current.style.left = `${offsetFirstBlock}px`;
        }

    }

    const moveLeft2 = () => {
        let offsetFirstBlock;
        let offsetSecondBlock;

        const firstBlockDimensions = firstBlock.current.getBoundingClientRect()
        const secondBlockDimensions = secondBlock.current.getBoundingClientRect()

        setOffsetFirstBlock(prev => {
            offsetFirstBlock = prev;
            return prev + 0.5
        })

        if(blockCompletelyOffScreen(firstBlockDimensions)){
            setOffsetFirstBlock(prev => {
                offsetFirstBlock = -1 * window.innerWidth;
                return offsetFirstBlock
            })
        }

        firstBlock.current.style.left = `${offsetFirstBlock}px`;

        setOffsetSecondBlock(prev => {
            offsetSecondBlock = prev;
            return prev + 0.5
        })


        if(blockCompletelyOffScreen(secondBlockDimensions)){
            setOffsetSecondBlock(prev => {
                offsetSecondBlock = -1 * (window.innerWidth + secondBlockDimensions.width);
                return offsetSecondBlock
            })
        }

        secondBlock.current.style.left = `${offsetSecondBlock}px`;

    }

    useEffect(() => {
        // setOffsetFirstBlock(-1 * window.innerWidth)
        // setOffsetSecondBlock(-1 * secondBlock.current.getBoundingClientRect().width)

        setInterval1(setInterval(moveLeft2, 10))
    }, [])

    useEffect(() => {
        container.current.addEventListener('mousedown', () => {
            speed.init(handleDrag)
            container.current.addEventListener('mousemove', log)
        })

        window.addEventListener('mouseup', () => {
            container.current.removeEventListener('mousemove', log)
            speed.destroy(()=>{})
        })
    }, [])

    const stopMarquee = () => {
        clearInterval(interval1)
    }

    const startMarquee = () => {
        setInterval1(setInterval(moveLeft2, 10))
    }

    const handleDrag = () => {
        console.log(speed.speedX)

        const firstBlockDimensions = firstBlock.current.getBoundingClientRect()
        const secondBlockDimensions = secondBlock.current.getBoundingClientRect()

        firstBlock.current.style.left = `${firstBlockDimensions.left + speed.speedX}px`;
        secondBlock.current.style.left = `${secondBlockDimensions.left + speed.speedX}px`;

        setOffsetFirstBlock(firstBlockDimensions.left + speed.speedX)
        setOffsetSecondBlock(secondBlockDimensions.left + speed.speedX)

    }

    const log = () => {

    }

    return(
        <div className='d-flex flex-row w-100'
        onMouseEnter={stopMarquee}
        onMouseLeave={startMarquee}
        ref = {container}
        >
            <div ref={firstBlock} className='bg-primary firstblock'>
                <div className='random-marquee-wrapper m1 d-flex flex-12'>
                    <div className='random-marquee-item'>a</div>
                    <div className='random-marquee-item'>b</div>
                    <div className='random-marquee-item'>c</div>
                </div>
            </div>
            <div ref={secondBlock} className='bg-danger secondblock'>
                <div className='random-marquee-wrapper m1 d-flex flex-12'>
                    <div className='random-marquee-item'>a</div>
                    <div className='random-marquee-item'>b</div>
                    <div className='random-marquee-item'>c</div>
                </div>
            </div>
        </div>
        
    )

}

const blockOutOfViewAndThereIsSpaceForOtherBlock = (blockDimensions) => {

    if((blockDimensions.left + blockDimensions.width ) > window.innerWidth  && blockDimensions.left > 0 && blockDimensions.left < window.innerWidth) return true

    return false
}

const blockInView = (blockDimensions) =>{
    if(blockDimensions.left >= 0 && (blockDimensions.left + blockDimensions.width ) <= window.innerWidth ) return true

    return false
}

const blockCompletelyOffScreen = (blockDimensions) => {
    if(blockDimensions.left > window.innerWidth) return true

    return false
}

export default RandomMarquee