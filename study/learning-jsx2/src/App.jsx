import './App.css'
import CardLayout from './CardLayout';
import InfoCard from './InfoCard'
import ProductCard from './ProductCard';
import SimpleCard from './SimpleCard';
import withConditionalCard from './withConditionalCard';


// const cardData1 = {
//   title: "Props in React",
//   content: "Props pass data from one component to another.",
//   author: "Alice"
// };
// const cardData2 = {
//   title: "React Composition",
//   content: "Composition makes your components more reusable"
// };

// const cards = [
//   {
//     idx: 1,
//     title: "Props in React",
//     content: "Props pass data from one component to another.",
//     author: "Alice"
//   }, {
//     idx: 2,
//     title: "React Composition",
//     content: "Composition makes your components more reusable"
//   }
// ]


// // 스프레드 연산자 사용 가능
// function App() {
//   return (
//     <>
//       {cards.map(cardData => (
//         <InfoCard key={cardData.idx} {...cardData} />
//       ))}
//     </>
//   )
// }

// const App = () => {
//   const product = {
//     name: "Laptop",
//     price: 123.4567
//   };

//   return (
//     <ProductCard
//       {...product}
//       formatPrice={(p) => `$${p.toFixed(2)}`} 
//     />
//   );
// }


// children 컴포넌트
// const App = () => (
//   <div>
//     <CardLayout title="About">
//       <p>Props of Components</p>  
//     </CardLayout>

//     <CardLayout title="Details">
//       <ul>
//         <li>Feature A</li>
//         <li>Feature B</li>
//         <li>Feature C</li>
//       </ul>
//     </CardLayout>

//     <CardLayout title="Contact">
//       <p>Email: example@example.com</p>
//       <p>Phone: 123-456-7890</p>
//     </CardLayout>
//   </div>
// )

const ConditionalSimpleCard = withConditionalCard(SimpleCard)

const App = () => (
  <>
    <ConditionalSimpleCard
      title="Active Card"
      content="This card is active."
      disabled={false}
    />

    <ConditionalSimpleCard
      title="Disabled Card"
      content="This card is disabled."
      disabled={true}
    />
  </>
)
export default App