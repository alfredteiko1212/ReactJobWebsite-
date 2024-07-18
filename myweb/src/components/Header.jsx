
// // import React from 'react'

// // function GoalForm(props){
// //   const [formData, setFormData] = React.useState({
// //     goal:"",
// //     by:"",
// //   });

// //   function changeHandler(e) {
// //     setFormData({...formData, [e.target.name]: e.target.value});
// //   }

// //   function submitHandler(e) {
// //     e.preventDefault();
// //     props.onAdd(formData);
// //     setFormData({goal:"", by:""});
// //   };

// //   return (
// //     <>
// //     <h1>My little Lemon Goals</h1>
// //     <form onSubmit={submitHandler}>
// //       <input type="text" name="goal" placeholder='Goal' value={formData.goal} onChange={changeHandler} />
// //       <input type="text" name="by" placeholder='By...' value={formData.by} onChange={changeHandler} />
// //       <button>Submit Goal</button>
// //     </form>
// //     </>
// //   );
// // }

// // function ListOfGoals(props){
// //   return(
// //     <ul>
// //       {props.allGoals.map((g)=>{
// //         <li key={g.goal}>
// //           <span>My goal is to {g.goal}, by {g.by}</span>
// //         </li>
// //       })}
// //     </ul>
// //   );
// // }
  

// // export default function Header() {
// //   const [allGoals, updateAllGoals] = React.useState([]);

// //   function addGoal(goal) { updateAllGoals([...allGoals, goal]);}


// //   return (
// //     <div>
// //       <GoalForm onAdd={addGoal}/>
// //       <ListOfGoals allGoals={allGoals}/>
// //     </div>
// //   )
// // }
 


// import React from 'react'


// function Square({value}){

//   return(
//     <button className="square" >{value}</button>
//   )
// }

// export default function Board() {
// const [squares, setSquares] = React.useState(Array(9).fill(null));

// function handleClick(){
//   const nextSquares=squares.slice();
//   nextSquares[0]="X";
//   setSquares(nextSquares);
// }

//   return (
//     <>
//     <div className="board-row">
//     <Square value={squares[0]}/>
//     <Square value={squares[1]}/>
//     <Square value={squares[2]}/>
//     </div>

//     <div className="board-row">
//     <Square value={squares[3]}/>
//     <Square value={squares[4]}/>
//     <Square value={squares[5]}/>
//     </div>

//     <div className="board-row">
//     <Square value={squares[6]}/>
//     <Square value={squares[7]}/>
//     <Square value={squares[8]}/>
//     </div>
//     </>
//   )
// }


  

