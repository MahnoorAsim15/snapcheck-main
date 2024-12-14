import React from 'react'

const Heading = ({ text, size }) => {
    return (
        <>
            <h1 className={`uppercase text-${size} font-bold text-purple-950`}>
                {text}
            </h1>
        </>
    )
}

export default Heading