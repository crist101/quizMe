import logo from './logo.svg';
import './App.css';
import schoolLogo from './images/urdanetaLogo.jpg'
import schoolLogo2 from './images/logo2.jpg'
import { Route, Routes,useLocation,useNavigate } from 'react-router-dom';
import { Component, useState } from 'react';
import axios from 'axios';
import "./appStyle.sass"
import config from "./config.json"
import headerLogo from "./images/navigation.jpg"

function LoginController(){
  let navigate = useNavigate();
  const [modalController, setModalController ] = useState(false)

  const modalHandler = (val)=>{
    setModalController(val);
  }

  const submitQuizCode = (val)=>{
    //console.log("TEsting")
    axios({
        method: "post",
        url: `http://${window.location.hostname}:8000/api/getRecord`,
        timeout: 5000
      })
      .then((response)=>{
        console.log(response.data)
          navigate('/quiz/no/2374890230498073532089')
      })
      .catch((error)=>console.log(error));
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
                <div className='form-control'>
                  <h2>
                  Enter Quiz Code
                  </h2>
                  <input type='text'/>
                </div>
                <div className='form-control'>
                  <h2>
                  Learner Reference Number (LRN)
                  </h2>
                  <input type='text'/>
                </div>
                <div className='form-control'>
                  <h2>
                  Last Name
                  </h2>
                  <input type='text'/>
                </div>
                <div className='form-control'>
                  <h2>
                  First Name
                  </h2>
                  <input type='text'/>
                </div>
                <div className='form-control'>
                  <h2>
                  Middle Name
                  </h2>
                  <input type='text'/>
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
  return(
    <div className='form'>
      <div className='form-content'>
        <div className='form-header'>
            <img src={schoolLogo} />
           <div>
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
        </div>
        <div className='form-body'>
          <p className='bold text-center'>
            FIRST QUARTER EXAMINATION
          </p>
            <p className='bold text-center'>
              Technology and Livelihood Education-ICT (CSS) 8 
            </p>
            <p>
              LRN: 1341579623872
            </p>
            <p>
              Dela Cruz, Juan
            </p>
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
      </Routes>
    </div>
  );
}

export default App;
