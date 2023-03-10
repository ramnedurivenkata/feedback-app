import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Card from "./components/shared/Card";
import { v4 } from "uuid";
function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
        setFeedback([newFeedback,...feedback])

    }
    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete?'))
        setFeedback(feedback.filter((item)=>item.id!==id))
    }
    return (
       <> 
            <Header/>
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}
export default App;









//     const title='Blog Post'
//     const body='This is my blog post'
//     const comments=[
//         {id:1,text:'Comment one'},
//         {id:2,text:'Comment two'},
//         {id:3,text:'Comment three'},
//     ]
//     const loading=false
//     const showComments=true
//     const commentBlock=(
//         <div className="comments">
//         <h3>Comments({comments.length})</h3>
//         <ul>
//             {comments.map((comment,index)=>(
//                     <li key={index}>{comment.text}</li>
//             ))}
//         </ul>
//     </div>
//    )
//     if(loading) return <h1>Loading...</h1>