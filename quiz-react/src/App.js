import logo from './logo.svg';
import './App.css';
import schoolLogo from './images/urdanetaLogo.jpg'
import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';
import "./appStyle.sass"

class LoginController extends Component{
  constructor(props){
    super(props);
    this.state = {
      modalControl:true
    }
  }
  modalController = (val)=>{
    this.setState({modalControl:val});
  }

  submitQuizCode = (val)=>{
    axios({
        method: "post",
        url: `${window.location.hostname}:${window.location.port}/list`,
        data: {testing:"Testiong"},
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 5000
      })
      .then((response)=>{
        console.log(response.data)
      })
      .catch((error)=>console.log(error));
  }

  render(){
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
            onClick={(e)=>(this.modalController(true))}
          >
            START
          </a>
        </header>
        {this.state.modalControl?
          <div className='modal'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1></h1>
                <a onClick={(e)=>(this.modalController(false))}>✖</a>
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
                  <button onClick={(e)=>(this.submitQuizCode(true))}>Take Quiz</button>
              </div>
            </div>
          </div>
        :
        <></>
        }
      </>
    )
  }
}

function QuizForm(){
  return(
    <>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginController />}/>
        <Route path='/quiz/no/:formID' element={<LoginController />}/>
      </Routes>
    </div>
  );
}

export default App;
