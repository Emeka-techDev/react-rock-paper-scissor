import React from "react";
import Header from "./components/Header"
import Play from "./components/Play";
import Game from "./components/Game";
/* The modal component below was not used maybe that could be the cause of our error */
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";


export default function App() {
  const [myChoice, setMyChoice] = React.useState("");
  const [score, setScore] = React.useState(0);
 
  return (
    <div className="container"> 
      <Header score={score} />
      <Switch>
        <Route exact path="/" >
          <Play setMyChoice={setMyChoice} />
        </Route>

        <Route path="/game">
          <Game myChoice={myChoice} score={score} setScore={setScore}/>
        </Route>
      </Switch>
      
      <Footer />
    </div>
  )
}