
const Button = ({ text, colors, styles }) => {
    const gradientStyle = {
        background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]} )`
    }

    return (
        <>
            <button 
            style={gradientStyle}
            className={`${styles ? styles : ""} px-4 py-2 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}>{text}</button>
        </>
    )
}

export default Button