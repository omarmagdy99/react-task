import { useState } from "react";
import "./profile.css";
const questions = [
    {
        id: 3457,
        question: "What language is React based on?",
        answer: "JavaScript"
    },
    {
        id: 7336,
        question: "What are the building blocks of React apps?",
        answer: "Components"
    },
    {
        id: 8832,
        question: "What's the name of the syntax we use to describe a UI in React?",
        answer: "JSX"
    },
    {
        id: 1297,
        question: "How to pass data from parent to child components?",
        answer: "Props"
    },
    {
        id: 9103,
        question: "How to give components memory?",
        answer: "useState hook"
    },
    {
        id: 2002,
        question:
            "What do we call an input element that is completely synchronised with state?",
        answer: "Controlled element"
    }
];
export default function Profile() {

    return <><FlashCards /></>
}
function FlashCards() {
    let [questionId, SetQuestionId] = useState(null)
    // answer function 
    let AnswerSelect = (id) => {
        id === questionId ? SetQuestionId(null) : SetQuestionId(id)
    }
    // answer function 
    return <div className="flashcards">

        {questions.map(question => {

            return <div key={question.id} className={`${questionId === question.id && "selected"}`} onClick={() => AnswerSelect(question.id)}>{questionId != question.id ? question.question : question.answer}</div>
        })}
    </div>;
}
