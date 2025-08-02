import './App.css'
import { useState } from 'react'
import Profile from './Profile'
import TempInput from './TempInput'
import UnitSelector from './UnitSelector'

// // 부모 컴포넌트의 status가 자식 컴포넌트로 props로 전달 가능
// function App() {
//   const users = ['Alice', 'Bob', 'Clark']
//   const [user, setUser] = useState(users[0])
//   const [status, setStatus] = useState(true)

//   console.log('App Rendered')

//   return (
//     <>
//       <h2>User Profile</h2>
//       <button onClick={() => setStatus(!status)}>
//         Toggle Status
//       </button>
//       <button onClick={
//         () => setUser(
//           users[(users.indexOf(user) + 1) % users.length]
//         )}>
//         Switch User
//       </button>
//       <p>
//         {status ? 'Active' : 'Inactive'}
//       </p>

//       <Profile name={user} />
//     </>
//   )

// }

// 부모 컴포넌트의 세터함수를 props로 전달하여 활용 가능 
// const App = () => {
//   const [temperature, setTemperature] = useState("")
//   const [unit, setUnit] = useState("Celsius")

//   const convertedTemp = unit === "Celsius"
//     ? (temperature * 9 / 5 + 32).toFixed(1)
//     : ((temperature - 32) * 5 / 9).toFixed(1)

//   return (
//     <div>
//       <h2>Temperature Converter</h2>
//       <p>
//         Converted: {temperature ? convertedTemp : "--"}
//         {unit === "Celsius" ? "°F" : "°C"}
//       </p>
//       <TempInput
//         value={temperature}
//         unit={unit}
//         onChange={setTemperature}
//       />
//       <UnitSelector
//         unit={unit}
//         onUnitChange={setUnit}
//       />
//     </div>
//   )
// }

function Form() {
  const [formData, setFormData] = useState(
    {
      username: '',
      isSubscribed: false,
      role: 'user'
    }
  )
  const roles = ['user', 'admin', 'guest']

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  return (
    <form>
      <p>
        Name: {formData.username}
        {formData.isSubscribed && ' (Subscribed)'}
      </p>
      <p>Role: {formData.role}</p>
      <input
        type='text' 
        name='username'
        placeholder='Username'
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type='checkbox'
        name='isSubscribed'
        checked={formData.isSubscribed}
        onChange={handleChange} />
      <label>Subscribe</label>

      <select 
      name='role'
      value={formData.role} 
      onChange={handleChange}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </form>
  )
}

export default Form