import React, {useState} from 'react';
import Ques from "./data/questions.json"
import "./App.css"


function App() {
  const [score, setScore] = useState(0); 
  const [showwScore, setShowwScore] = useState(false); 
  const [currentques,setCurrentques]=useState(0);
  const questions = Ques.questions[currentques] ;
  const numOfQuestions =Ques.questions.length;
  const totalPoints =Ques.questions.map((item => item.points)).reduce((a,b)=> +a + +b)
  //main function 

  const handelBtn = (numberAns)=>{
    //count score 
  if(numberAns === questions.correctOption){  
    setScore(score + questions.points)
    
     
  }
// show questions numbers

  if(currentques<=numOfQuestions-2){
    
    setCurrentques(currentques + 1) 
  }
  else {
      setShowwScore(true)
  }
}


  return (


    <div className='quize-container'>

      {showwScore ? <div className='end-score'>Your Score is : <span>{score}/{totalPoints}</span> </div> :
     
      <div>
          <div className='question'>{questions.question}</div>
          <div className='answer-container'>
            {questions.options.map((item,index)=>
            
            <button onClick={()=>handelBtn(index)}>{item}</button>
            
            
            )}</div>
            {currentques+1 > 15 ?<p>end</p>: <p className='number-of-question'>{currentques+1}/{numOfQuestions}</p>}
            
          </div>     
      }
      
     
       
    </div>
  );
}

export default App;
