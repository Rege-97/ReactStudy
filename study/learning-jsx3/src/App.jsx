import './App.css'
import Button from './Button'

// function App() {

//   function handleClick() {
//     console.log('Event 1')
//   }

//   return (
//     <>
//       <button onClick={handleClick}>  {/** 중괄호 표현식에 함수를 넣어 이벤트 사용 */}
//         Button 1
//       </button>
//       <button onClick={() => { console.log('Event 2') }}>
//         Button 2
//       </button>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Button name={"Home"} />
//       <Button name={"Store"} />
//       <Button name={"Contact"} />
//     </>
//   )
// }

function App() {
  return (
    <>
      <input
        onFocus={() => console.log('Focus')}
        onBlur={() => console.log('Blur')}
        onChange={(e) => console.log(e.target.value)}
        onKeyDown={(e) => {
          console.log(e.key, 'DOWN')
          if (e.key === 'Enter' && e.shiftKey) {
            console.log('Shift + Enter DOWN')
          }
        }}
        onKeyUp={(e) => { console.log(e.key, 'UP') }}
      />
    </>
  )
}

export default App