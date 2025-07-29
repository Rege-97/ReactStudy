import './App.css'

function BasicExpressions() {
  const name = "John";
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age next year: {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} ix ${age} year old`}</p>
      {/*boolean 타입은 문자열로 변환하여 사용 가능 */}
      <p>Admin status: {String(isAdmin)}</p>
    </div>
  )
}

function ObjectArrayExpressions() {
  const user = {
    name: "Jane",
    email: "jane@example.com"
  };
  const colors = ["red", "blue", "green"];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>User: {user.name}({user.email})</p>
      <p>First color: {colors[0]}</p>
      <p>Color count: {colors.length}</p>

      <p>Doubleds: {
        numbers.map(n => n * 2).join(", ")
      }</p>

      <p>Evens: {
        numbers.filter(n => n % 2 === 0).join(", ")
      }</p>
    </div>
  )
}

function FunctionExpressions() {
  const getGreeting = (name) => `Hello, ${name}!`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const items = [{ id: 1, price: 10 }, { id: 2, price: 20 }];

  return (
    <div>
      <p>{getGreeting("Alice")}</p>
      <p>Today: {formatDate(new Date())}</p>
      <p>Total: ${calculateTotal(items)}</p>
      <p>Good {(() => {
        const hours = new Date().getHours;
        return hours < 12 ? "morning!" : "afternoon!";
      })()}</p>
    </div>
  )
}

const language = "JavaScript"

const element1 = <h2>Hello, world!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

function ElementExpressions() {
  return (
    <section>
      {element1}
      {element2}
    </section>
  )
}

// function App() {
//   return (
//     <>
//       {/* JSX Practices */}
//       <h1>JSX</h1>
//       <ElementExpressions />
//     </>
//   )
// }

// 삼항 연산자 활용
// const isLoggedIn = true

// function App() {
//   return (
//     <>
//       {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}
//       {isLoggedIn ? (
//         <>
//           <h2>Welcome back!</h2>
//           <p>You are logged in. Enjoy your time here!</p>
//         </>
//       ) : (
//         <>
//           <h2>Hello,Guest!</h2>
//           <p>Please log in to access more features.</p>
//         </>
//       )}
//     </>
//   )
// }

// 삼항 연산자 복수 조건 활용
// function getUserContent(userStatus) {
//   return (
//     userStatus === "admin" ? (
//       <>
//         <h2>Admin Dashboard</h2>
//         <button>Manage Users</button>
//       </>
//     ) : userStatus === "member" ? (
//       <p>Welcome to the community!</p>
//     ) : (
//       <a href="/signup">Sign up here</a>
//     )
//   );
// }

// function App() {
//   return (
//     <>
//       {getUserContent("admin")}
//     </>
//   )
// }


// 논리 연산자 활용
// const hasMessages = true
// const message = null

// function App() {
//   return (
//     <>
//       {/**
//        * AND 연산자
//        * 앞의 요소가 true면 뒤의 요소 렌더링
//        */}
//       {hasMessages && <h2>You have new messages!</h2>}
//       {message && <p>Message: {message}</p>}

//       {/**
//        * null 병합 연산자
//        * 앞의 요소가 null 또는 undefined 일 때 뒤의 요소가 대신 렌더링
//        */}
//       <p>
//         Message: {message ?? <em>No message</em>}
//       </p>

//       {/**
//        * OR 연산자
//        * 앞의 요소가 falsy(null,'',false)면 뒤의 요소가 렌더링
//        */}
//       <p>
//         Message: {message || <em>Empty</em>}
//       </p>
//     </>
//   )
// }

// 리스트 렌더링
// function App() {
//   const fruits = ["Apple", "Banana", "Cherry"]
//   return (
//     <>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{index + 1} {fruit}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

function App() {
  const books = [
    { id: 1, title: 'React Basics', published: true, publisher: 'Manning' },
    { id: 2, title: 'Advanced Hooks', published: false, publisher: 'OReilly' },
    { id: 3, title: 'JSX in Depth', published: true, publisher: 'Packt' }
  ];

  const publisheds = books.filter(book => book.published)

  return (
    <>
      {publisheds.length > 0 && <h2>Published Books</h2>}
      {publisheds.length ?
        publisheds.map(book =>
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em> - {book.publisher}</em>
          </article>
        )
        : <p>No published book found.</p>
      }
    </>
  )
}


export default App