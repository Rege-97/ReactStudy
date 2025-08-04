import './App.css'
import Child1 from './Child1'
import Child3 from './Child3'
import { CountProvider } from './contexts/CountContext'
import { ToggleProvider } from './contexts/ToggleContext'

function App() {
  return (
    <>
      <CountProvider>
        <h2>App</h2>
        <Child1 />
      </CountProvider>
      <ToggleProvider>
        <Child3 />
      </ToggleProvider>
    </>
  )
}

export default App