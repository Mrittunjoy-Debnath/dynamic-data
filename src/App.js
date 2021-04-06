import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Ruhul Amin','Mrittu','Prosen'];
  const products = [
  {name:'Photoshop',price : '200$'},
  {name:'Illustrator',price : '150$'},
  {name:'Adobe',price : '100$'}
  ]


  const productsName= products.map(product=>product.name);
  console.log(productsName);
 const productsPrice= products.map(product=>product.price);
   console.log(productsPrice);


  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>

        <ul>
            {nayoks.map(nayok=><li>{nayok}</li>)}

            {products.map(product=><li>{product.name}</li>)}
        </ul>

        {
          products.map(product =><Product product={product}></Product> )
        }

      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease =()=>{
    const newCount = count+1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}



function Product(props){
  const productStyle={
border : '2px solid yellow',
borderRadius : '5px solid white',
backgroundColor: 'skyblue',
height : '300px',
width : '300px',
float : 'left'
  }

  const {name,price}=props.product;
  return (
    <div style={productStyle}>
      <h1>Name : {props.product.name}</h1>
      <h3>Play : {props.product.price}</h3>
      <button>Buy Now</button>
    </div>
    )
}
export default App;
