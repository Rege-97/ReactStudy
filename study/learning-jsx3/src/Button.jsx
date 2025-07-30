// const handleEvent = (name, which) => {
//     console.log(name, which)
// }

// const Button = ({ name }) => (
//     <button
//         onMouseEnter={
//             () => handleEvent(name, 'MouseEnter')
//         }
//         onMouseLeave={
//             () => handleEvent(name, 'MouseLeave')
//         }
//         onDoubleClick={
//             () => handleEvent(name, 'DoubleClick')
//         }
//         onContextMenu={
//             () => handleEvent(name, 'onContextMenu')
//         }
//     >
//         {name}
//     </button>
// )

const handleEvent = (name, e) => {
    console.log(name, e.clientX, e.clientY,e.shiftKey)
}

const Button = ({ name }) => (
    <button
        onClick={
            (e) => handleEvent(name, e)
        }
    >
        {name}
    </button>
)

export default Button