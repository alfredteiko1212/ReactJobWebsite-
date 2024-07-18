// // import React from 'react'




// // export default function Coursera() {
// //     const [toggle, setToggle] = React.useState(false);

// //     function changeHandler(){
// //         setToggle(!toggle)
// //     }

// //     // React.useEffect(() => {
// //     //     document.title = toggle ? "Welcome Home": "Not Welcome";
// //     // },[toggle])

// //     // const [btcData, setBtcData] = React.useState([]);

// //     // const fetchData = () => {
// //     //     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
// //     //      .then((response) => response.json())
// //     //      .then(jsonData => setBtcData(jsonData.bpi.USD))
// //     //      .catch((error) => console.log(error))

// //     // };

// //     // React.useEffect(()=>{
// //     //     fetchData();
// //     // },[]);

// //     const[user, setUser] = React.useState([]);

// //     const fetchData = () =>{
// //         fetch(`https://randomuser.me/api/?results=1`)
// //         .then(response => response.json)
// //         .then(data => setUser(data))
// //     };

// //     React.useEffect(()=>{
// //         fetchData();
// //     },[]);

// //   return Object.keys(user).length > 0 ?(
// //     <>
// //     <h1>Using the UseEffect Hook</h1>
// //     <button onClick={changeHandler}>Toggle Message</button>
// //     {toggle && <h2>Welcome Home</h2>}
// //     {/* <h1>Current BTC/USD data</h1> 
// //       <p>Code: {btcData.code}</p> 
// //       <p>Symbol: {btcData.symbol}</p> 
// //       <p>Rate: {btcData.rate}</p> 
// //       <p>Description: {btcData.description}</p> 
// //       <p>Rate Float: {btcData.rate_float}</p>  */}
// //       <h1>Data Returned:</h1>
// //       <h2>First Name:{user.results[0].name.first}</h2>
// //       <h2>Last Name:{user.results[0].name.last}</h2>
// //     </>
// //   ):
// //   (<h2>Data Pending</h2>)
// // }

// // import React, { useReducer } from 'react'

// // const reducer = (state, action ) => {
// //   if ( action.type === 'buy_ingredient') return {money: state.money - 10};
// //   if ( action.type === 'sell_a_meal') return {money: state.money + 10};
// //   return state;
// // }

// // export default function Coursera() {
  
// //   const initialState = {money:100};

// //   const[state, dispatch] = useReducer (reducer, initialState);

// //   return (
// //     <div>
// //       <h1>Wallet: {state.money}</h1>
// //       <div>
// //         <button onClick={()=> dispatch({type: 'buy_ingredient'})}>Shopping for veggies!</button>
// //         <button onClick={()=> dispatch({type: 'sell_a_meal'})}>Serve a meal to the customer!</button>
// //       </div>
// //     </div>
// //   )
// // }

// import React from 'react'



// export default function Coursera(){
//   const formInputRef =React.useRef(null);

// const focusInput = () => {
//   formInputRef.current.focus();
// }

//   return(
//     <>
//      <h1>Using useRef</h1>
//      <input ref={formInputRef} type="text" />
//      <button onClick={focusInput}>Focus Input</button>
//     </>
//   )
// }

















// // export default function Coursera() {
// //   const formInputRef = React.useRef(null);

// //   const focusInput = () => {
// //     formInputRef.current.focus();
// //   }

// //   return (
// //     <div>
// //       <h1>Using useRef to acess underlying DOM</h1>
// //       <input ref={formInputRef} type="text" />
// //       <button onClick={focusInput}>Focus input</button>
// //     </div>
// //   )
// // }


