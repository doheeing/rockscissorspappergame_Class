// import { useState } from "react";
// import "./App.css";
// import BoxClass from "./component/BoxClass";

// const choice = {
//   rock: {
//     name: "rock",
//     img: "https://akash.dev/rps/img/rock-right.png",
//   },
//   scissor: {
//     name: "scissor",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5xt_damKrVj0cWAjda417qoicTVUT0sdWA&usqp=CAU",
//   },
//   paper: {
//     name: "paper",
//     img: "https://www.pngitem.com/pimgs/m/592-5920636_rock-paper-scissors-clipart-rock-paper-scissors-png.png",
//   },
// };
// function App() {
//   const [userSelect, setUserSelect] = useState(null);
//   const [ComputorSelect, setComputorSelect] = useState(null);
//   const [result, setResult] = useState("");
//   const [comResult, setComResult] = useState("");
//   const [resultBox, setResultBox] = useState("");
//   const play = (userChoice) => {
//     setUserSelect(choice[userChoice]);
//     let computorChoice = randomChoice();
//     setComputorSelect(computorChoice);
//     setResult(judgement(choice[userChoice], computorChoice));
//     setComResult(reverseJudgement(choice[userChoice], computorChoice));
//   };
//   const judgement = (user, computor) => {
//     if (user.name === computor.name) {
//       return "tie";
//     } else if (user.name === "rock")
//       return computor.name === "scissor" ? "win" : "lose";
//     else if (user.name === "paper")
//       return computor.name === "rock" ? "win" : "lose";
//     else if (user.name === "scissor")
//       return computor.name === "paper" ? "win" : "lose";
//   };
//   const reverseJudgement = (user, computor) => {
//     if (user.name === computor.name) {
//       return "tie";
//     } else if (user.name === "rock")
//       return computor.name === "scissor" ? "lose" : "win";
//     else if (user.name === "paper")
//       return computor.name === "rock" ? "lose" : "win";
//     else if (user.name === "scissor")
//       return computor.name === "paper" ? "lose" : "win";
//   };
//   const randomChoice = () => {
//     let itemArray = Object.keys(choice);
//     let randomItem = Math.floor(Math.random() * itemArray.length);
//     let final = itemArray[randomItem];
//     return choice[final];
//   };

//   return (
//     <div className="containor">
//       <div className="mainbox">
//         <div className="main">
//           <BoxClass title="You" item={userSelect} result={result} />
//           <BoxClass title="Computor" item={ComputorSelect} result={comResult} />
//         </div>
//         <div className="button">
//           <button className="buttoneach" onClick={() => play("scissor")}>가위</button>
//           <button className="buttoneach"onClick={() => play("rock")}>바위</button>
//           <button className="buttoneach" onClick={() => play("paper")}>보</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
