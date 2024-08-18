import React, { useEffect, useState } from "react";

import schoolLogo from './images/urdanetaLogo.jpg'
import schoolLogo2 from './images/logo2.jpg'

export default function DusQuestionaires(){
    const [questionaire, setQuestionaire] = useState([])
    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")
    const [yearSection, setYearSection] = useState("")
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

    useEffect(() => {
        setQuestionaire(JSON.parse(localStorage.getItem("item")))
      }, [1000]);

    const updateForm = () =>{
        console.log(questionaire)
        localStorage.setItem("item",JSON.stringify(questionaire))
    }
    const addTitleHandler = () => {
        const data = {
            uniqueKey:makeid(15),
            category:makeid(25),
            categoryDialect:makeid(30),
            question:[]
        }
        questionaire.push(data)
        setQuestionaire([...questionaire])
        updateForm()
    }
    const questionHandler = (i)=>{
        const data = {
            uniqueKey:makeid(15),
            question:makeid(20),
            questionDialect:makeid(25),
            choices:[]
        }
        questionaire[i].question.push(data)
        setQuestionaire([...questionaire])
        updateForm()
    }
    const answerHandler = (t,q) =>{
        questionaire[t].question[q].choices.push([`${makeid(5)}`,`${makeid(5)}`])
        setQuestionaire([...questionaire])
        updateForm()
    }
    const categoryEditHandler = (val,t,handler)=>{
        if(handler === "categoryDialect"){
        questionaire[t].categoryDialect = val
        }else if(handler === "category"){
        questionaire[t].category = val
        }
        setQuestionaire([...questionaire])
        updateForm()
    }

    const questionEditHandler = (val,t,q,handler)=>{
        if(handler === "questionDialect"){
        questionaire[t].question[q].questionDialect = val
        }else if(handler === "question"){
            questionaire[t].question[q].question = val
        }
        setQuestionaire([...questionaire])
        updateForm()
    }
    const choicesEditHandler = (val,t,q,c,handler)=>{
        if(handler === "choicesDialect"){
            questionaire[t].question[q].choices[c][0] = val
        }else if(handler === "choices"){
            questionaire[t].question[q].choices[c][1] = val
        }
        setQuestionaire([...questionaire])
        updateForm()
    }
    const removeCategoryHandler  = (t)=>{
        const category_ =  (questionaire.filter((casd,index) => t !== index ))
        console.log(category_)
        setQuestionaire([...category_])
        localStorage.setItem("item",JSON.stringify(category_))
        //ShowForm();
        window.location.reload()
    }
    const removeQuestionHandler = (t,q)=>{
        const questions_ = (questionaire[t].question.filter((casd,index) => q !== index ))
        const q_ = questionaire
        q_[t].question = questions_
        setQuestionaire([...q_])
        localStorage.setItem("item",JSON.stringify(q_))
        //ShowForm();
        window.location.reload()
    }  
    const removeAnswerHandler = (t,q,c) =>{
        const choices_  = (questionaire[t].question[q].choices.filter((casd,index) => c !== index ))
        const ar_ = questionaire
        ar_ [t].question[q].choices = choices_
        setQuestionaire([...ar_])
        localStorage.setItem("item",JSON.stringify(ar_))
        //ShowForm();
        window.location.reload()
    }
    const removeHandler = (handler,t,q,c) =>{

    }
    const checkForm = () =>{
        localStorage.setItem("item",JSON.stringify([
            {
                "uniqueKey": "IyZrAtyiBpIaBus",
                "category": "dJKG5kfGiLE1QSVPDdKm6cv9Q1zk50asdasdasd",
                "categoryDialect": "dJKG5kfGiLE1QSVPDdKm6cv9Q1zk50",
                "question": [
                    {
                        "uniqueKey": "7rMIymbRKpLDPBA",
                        "question": "zlGOV3cOcJ2MOytT1xFc",
                        "questionDialect": "I0oYp0N1oJgWPv1DKMv2ADvZw",
                        "choices": [
                            [
                                "FHctG",
                                "5CQyQ"
                            ],
                            [
                                "ULldM",
                                "k0z5s"
                            ]
                        ]
                    },
                    {
                        "uniqueKey": "8DPS82nZSqsYBBn",
                        "question": "d2BEQIoX8mE4uf2x7nAw",
                        "questionDialect": "0FaX7usMgnBJuoNtR82MljNJQ",
                        "choices": []
                    }
                ]
            },
            {
                "uniqueKey": "NmzHD1e3GsEv75u",
                "category": "NiNJh3lJXN3E0F0QIa563ZKpo",
                "categoryDialect": "05eoVKDH40SZNcFeZ72FtOUE8udWDU",
                "question": [
                    {
                        "uniqueKey": "1gedFHcSJRCnjfT",
                        "question": "T169T2X2eLY6djd970CB",
                        "questionDialect": "J5YUpsVqOXqVydXkmpiCerHdN",
                        "choices": [
                            [
                                "SIHgn",
                                "HdA1N"
                            ]
                        ]
                    },
                    {
                        "uniqueKey": "9DBAR2mjv6ooUHz",
                        "question": "bWz7LlURwlBLTY8watQF",
                        "questionDialect": "m7tg95MqdO6fWbiRq8ATpROpR",
                        "choices": []
                    }
                ]
            },
            {
                "uniqueKey": "AqsGuPVst07yZQB",
                "category": "SNfNHzhARNZdlsHK6XCCiUKxA",
                "categoryDialect": "hnfKClHoORXbCIgo6SdmyYUyo2u0Ww",
                "question": [
                    {
                        "uniqueKey": "6MaUjE7Y4YQfQKP",
                        "question": "sv7Z2woJIqd6QDZ1OT2Z",
                        "questionDialect": "oeNinStO0En2OAZBRcSeiCgHD",
                        "choices": [
                            [
                                "PeTjk",
                                "rm6ck"
                            ]
                        ]
                    }
                ]
            }
        ]))
    }

    //
    return <>
    <div className="form"> 
        <div className="form-content">
            <div className="form-header border">
                <h1 id="questionaire">
                    Questionnaire Maker
                    <p>Farmer Descriptors </p>
                </h1>
            </div>
            <div className="form-body">
                <button onClick={(e)=>(checkForm())}>Add Form</button>
                { questionaire && questionaire.length >0 ?
                questionaire.map((val, t)=>(
                    <div className="questionTitle">
                        <div className="block-block">
                        </div>
                        <div className="item-right cat-testing">
                            <p>Category: {val.categoryDialect} <i>({val.category})</i></p>
                            <button className="delete-button" onClick={(e)=>(removeCategoryHandler(t))} >Remove Category</button>
                        </div>
                        <div className="form-group">
                            <div className="form-control codeAlign">
                                <input type="text" className="code" id={`${t}readOnly`} readOnly value={String.fromCharCode(t + 'A'.charCodeAt(0))}/>
                            </div>
                            <div className="form-control questionAlign">
                                <input type="text" placeholder="Dialect (Category)" onKeyUp={(e)=>(categoryEditHandler(e.target.value,t,"categoryDialect"))} defaultValue={val.categoryDialect}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-control codeAlign">
                            </div>
                            <div className="form-control questionAlign">
                            <input type="text" placeholder="English (Category)" onKeyUp={(e)=>(categoryEditHandler(e.target.value,t,"category"))} defaultValue={val.category}/>
                            </div>
                        </div>
                        <div className="question-border-left">
                            {
                                questionaire[t].question && questionaire[t].question.length >0 ?
                                questionaire[t].question.map((question,q)=>(
                                    <div className="questionQuestion">
                                        <div className="item-right  cat-testing">
                                            <p>Question</p>
                                            <button className="delete-button" onClick={(e)=>(removeQuestionHandler(t,q))}>Remove Question</button>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-control codeAlign">
                                                <input type="text" className="code" readOnly value={`${String.fromCharCode(t + 'A'.charCodeAt(0))}.${q+1}`}/>
                                            </div>
                                            <div className="form-control questionAlign">
                                                <input type="text" placeholder="Dialect (Question)" onKeyUp={(e)=>(questionEditHandler(e.target.value,t,q,"questionDialect"))} defaultValue={question.questionDialect}/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-control codeAlign">
                                            </div>
                                            <div className="form-control questionAlign">
                                                <input type="text" placeholder="English (Question)" onKeyUp={(e)=>(questionEditHandler(e.target.value,t,q,"question"))} defaultValue={question.question}/>
                                            </div>
                                        </div>
                                        <div className="choice-border-left">
                                        <p>Choices</p>
                                            { 
                                                questionaire[t].question[q].choices && questionaire[t].question[q].choices.length > 0 ?
                                                    questionaire[t].question[q].choices.map((item,c)=>(
                                                        <div className="questionAnswer">
                                                            <div className="removeDesign cat-testing">
                                                                <div className="delete-button" onClick={(e)=>(removeAnswerHandler(t,q,c))}>✖</div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="form-control codeAlign">
                                                                    <input type="text" className="code" readOnly value={c+1}/>
                                                                </div>
                                                                <div className="form-control questionAlign">
                                                                    <input type="text" placeholder="Dialect (Choices)" onBlur={(e)=>(choicesEditHandler(e.target.value,t,q,c,"choicesDialect"))} defaultValue={item[0]}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="form-control codeAlign">
                                                                    
                                                                </div>
                                                                <div className="form-control questionAlign">
                                                                    <input type="text" placeholder="English (Choices)" onBlur={(e)=>(choicesEditHandler(e.target.value,t,q,c,"choices"))} defaultValue={item[1]}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                :
                                                <></>
                                            }
                                            <div className="questionAnswer">
                                                <button className="answerButton" onClick={(e)=>(answerHandler(t,q))}>Add Choices</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :<></>
                            }
                            <div className="">
                                <button className="questionButton" onClick={(e)=>(questionHandler(t))}>Add Question</button>
                            </div>
                        </div>
                    </div>
                ))
                :
                <>
                </> }
                <div className="item-center">
                    <button onClick={(e)=>(addTitleHandler())} className="categoryButton">Create Category</button>
                </div>
            </div>
        </div>
    </div>
    </>

}