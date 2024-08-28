import logo from './logo.svg';
import './App.css';
import schoolLogo from './images/urdanetaLogo.jpg'
import schoolLogo2 from './images/logo2.jpg'
import { Route, Routes,useLocation,useNavigate } from 'react-router-dom';
import { Component, useEffect, useState } from 'react';
import axios from 'axios';
import "./appStyle.sass"
import config from "./config.json"
import headerLogo from "./images/navigation.jpg"
import Questionaire from './Questionaire';
import DusQuestionaire from './NSICQuestionaire';
import samplequestionaire from "./sampleQuestion.json";
import { useCookies } from 'react-cookie';

function LoginAdministrator(){
  return (
    <>
    administator
    </>
  )
}

function LoginController(){
  let navigate = useNavigate();
  const [modalController, setModalController ] = useState(true)
  const [cookies, setCookie] = useCookies(['quizApp']);
  const [administartorModalController, setAdministartorModalController ] = useState(false)
  const [identities,setIdentities] = useState({
    username: "",
    password:"",
    csrfmiddlewaretoken:"478ef26b83a4e405e9c6589226d996f471406ed5faeccaf17c3237d3e163a614"
  });
  const [ctrl, setCtrl] = useState({
    loading: false,
    checkCredentials: false,
    error: false
  });
  const [formData, setFormData] = useState({
    quizCode:"",
    lrn:"",
    lastName:"",
    firstName:"",
    middleName:"",
    csrfmiddlewaretoken:"478ef26b83a4e405e9c6589226d996f471406ed5faeccaf17c3237d3e163a614"
  })

  const modalHandler = (val)=>{
    setModalController(val);
  }

  const submitQuizCode = (val)=>{
    console.log(formData)
    //console.log("TEsting")
    // axios({
    //     method: "post",
    //     url: `http://${window.location.hostname}:8000/api/getRecord`,
    //     timeout: 5000
    //   })
    //   .then((response)=>{
    //     console.log(response.data)
    //       navigate('/quiz/no/2374890230498073532089')
    //   })
    //   .catch((error)=>console.log(error));

  }

  const inputHandler = (data,val)=>{
    setIdentities({...identities,[`${data}`]:val})
  }
  const loginHandler = ()=>{

    const datetoday = new Date();
    datetoday.setDate(datetoday.getDate()+1);
    setCtrl({...ctrl,checkCredentials:false,loading:true,error:false});
    axios({
      method: "post",
      url: `http://${window.location.hostname}:8000/api/login`,
      data: identities,
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 5000
    })
    .then(function (response) {
      if(response.data.error === undefined){
        const datetoday = new Date();
        datetoday.setDate(datetoday.getDate()+365);
        setCookie('rtoken',response.data.user,{expires:datetoday})
        window.location.replace("/home");
      }else{
        setCtrl({...ctrl,checkCredentials:true,loading:false});
      }
    })
    .catch(function (error) {
      console.log(error)
      setCtrl({...ctrl,checkCredentials:false,error:true,loading:false});
    });
  }

    return(
      <>
        <header className="App-header">
          <img src={schoolLogo} className="App-logo" alt="logo" />
          <p>
            Palina East Quiz App
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e)=>(modalHandler(true))}
          >
            START
          </a>
        </header>
        
        {modalController?
          <div className='modal'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1></h1>
                <a onClick={(e)=>(modalHandler(false))}>✖</a>
              </div>
              <div className='modal-body'>
                <div className='modal-form-control'>
                  <h2>
                  Enter Quiz Code
                  </h2>
                  <input type='text' onChange={(e)=>(setFormData({...formData,quizCode:e.target.value}))}/>
                </div>
                <div className='modal-form-control'>
                  <h2>
                  Learner Reference Number (LRN)
                  </h2>
                  <input type='text' onChange={(e)=>(setFormData({...formData,lrn:e.target.value}))}/>
                </div>
                <div className='modal-form-control'>
                  <h2>
                  Last Name
                  </h2>
                  <input type='text' onChange={(e)=>(setFormData({...formData,lastName:e.target.value}))}/>
                </div>
                <div className='modal-form-control'>
                  <h2>
                  First Name
                  </h2>
                  <input type='text' onChange={(e)=>(setFormData({...formData,firstName:e.target.value}))}/>
                </div>
                <div className='modal-form-control'>
                  <h2>
                  Middle Name
                  </h2>
                  <input type='text' onChange={(e)=>(setFormData({...formData,middleName:e.target.value}))}/>
                </div>
              </div>
              <div className='modal-footer'>
                  <button onClick={(e)=>(submitQuizCode(true))}>Take Quiz</button>
              </div>
            </div>
          </div>
        :
        <></>
        }
      </>
    )
  
}

function QuizForm(){
  const [questionaire, setQuestionaire] = useState([])
  const [answer, setAnswer] = useState([[],[]])
  useEffect(()=>{
    setQuestionaire(samplequestionaire);
    console.log(questionaire)
  })
  
  const selectAnswer = (choices,no,uniqueKey,type,row)=>{
    answer[row][no] = choices
    setAnswer(answer)

    //Remove All selected answer
    const radioButtons = document.getElementsByClassName(`${type}`)
   for (const radioButton of radioButtons) {
      radioButton.classList.remove("active")
  }
    //console.log(document.getElementById(`Choices${choices}${no}`))
    document.getElementById(`${uniqueKey}`).classList.add("active")
    document.getElementById(`${choices}${no}`).checked = true
  }

  return(
    <div className='form'>
      <div className='form-content'>
        {true?
        <div className='form-header'>
            <img src={schoolLogo} />
           <div className="form-header-details">
            <p>
              Republic of the Philippines
            </p>
            <p className='bold'>
             DEPARTMENT OF EDUCATION
            </p>
            <p>
              Region 1
            </p>
            <p>
              Schools Division Office of Urdaneta City
            </p>
            <p className='bold'>
              PALINA EAST NATIONAL HIGH SCHOOL
            </p>
            <p>
              Urdaneta City, Pangasinan
            </p>
           </div>
          <img src={schoolLogo2}/>
        </div>:<></>
        }
        <div className='form-body'>
          <p className='bold text-center'>
            FIRST QUARTER EXAMINATION
          </p>
            <p className='bold text-center'>
              Technology and Livelihood Education-ICT (CSS) 8 
            </p>
            <br></br>
            <p className="question-details">
              <span className='bold'>LRN:</span> 1341579623872
            </p>
            <p className="question-details">
              <span className='bold'>Name:</span>  Dela Cruz, Juan
            </p>
            <div className='question-form'>
              {
                questionaire.map((type,row)=>(
                  <>
                    <p className='question-title'>
                      {type.type==="multipleChoice"?"Multiple Choice":""}
                      {type.type==="trueOrFalse"?"True or False":""}
                    </p>
                    {type.question.map((item,i)=>(
                    <div className='question-item'>
                      <p><span>{i+1}.</span>{item.question}</p>
                        {type.type === "multipleChoice"?
                          <div className='question-choices'>
                              <div className='choices-choices'>
                              <div className={[`choice Choices${i}` ]} id={`ChoicesA${i}`} onClick={(e)=>(selectAnswer(`A`,i,`ChoicesA${i}`,`Choices${i}`,row))}>
                                <input type='radio' name={i} id={`A${i}`}/>
                                <span>
                                  {item.choices.a}
                                </span>
                              </div>
                            </div>
                            <div className='choices-choices'>
                              <div className={[`choice Choices${i}` ]} id={`ChoicesB${i}`} onClick={(e)=>(selectAnswer(`B`,i,`ChoicesB${i}`,`Choices${i}`,row))}>
                                <input type='radio' name={i} id={`B${i}`}/>
                                <span>
                                  {item.choices.b}
                                </span>
                              </div>
                            </div>
                            <div className='choices-choices'>
                              <div className={[`choice Choices${i}` ]} id={`ChoicesC${i}`}  onClick={(e)=>(selectAnswer(`C`,i,`ChoicesC${i}`,`Choices${i}`,row))}>
                              <input type='radio'name={i} id={`C${i}`}/>
                                <span>
                                  {item.choices.c}
                                </span>
                              </div>
                            </div>
                            <div className='choices-choices '>
                              <div className={[`choice Choices${i}` ]} id={`ChoicesD${i}`}  onClick={(e)=>(selectAnswer(`D`,i,`ChoicesD${i}`,`Choices${i}`,row))}>
                                <input type='radio' name={i}  id={`D${i}`}/>
                                  <span>
                                    {item.choices.d}
                                  </span>
                              </div>
                            </div>
                            
                          </div>
                        :<></>}
                        {type.type === "trueOrFalse"?
                        <div className='question-choices'>
                          <div className='choices-choices'>
                            <div className={[`choice tof${i}` ]} id={`ChoicesTrue${i}`} onClick={(e)=>(selectAnswer(`true`,i,`ChoicesTrue${i}`,`tof${i}`,row))}>
                              <input type='radio' name={i} id={`true${i}`}/>
                              <span>
                                True
                              </span>
                            </div>
                          </div>
                          <div className='choices-choices'>
                            <div className={[`choice tof${i}` ]} id={`ChoicesFalse${i}`} onClick={(e)=>(selectAnswer(`false`,i,`ChoicesFalse${i}`,`tof${i}`,row))}>
                              <input type='radio' name={i} id={`false${i}`}/>
                              <span>
                                False
                              </span>
                            </div>
                          </div>
                        </div>
                        :<></>}
                    </div>
                    ))}
                    </>
                ))
              }

            </div>
            <div className="text-center">
              <button onClick={(e)=>(console.log(answer))}>
                Submit 
              </button>
              </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginController />}/>
        <Route path='/quiz/no/:formID' element={<QuizForm />}/>
        <Route path="/questionaireNSIC" element={<DusQuestionaire />}/>
        <Route path="/questionaire" element={<Questionaire />}/>
        <Route path="/administrator/login" element={<Questionaire />}/>
      </Routes>
    </div>
  );
}

export default App;
