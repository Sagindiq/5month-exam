import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/data";
import "./add.scss";
const AddComment = () => {

    const {posts, setPost} = useData();
    const [titleValue, setTitleValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [descValue, setDescValue] = useState("");
    const navigator = useNavigate();

    const titleChange = (evt) => {
        setTitleValue(evt.target.value);
    }

    const emailChange = (evt) => {
        setEmailValue(evt.target.value);
    }

    const descChange = (evt) => {
        setDescValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        
        setPost([
            ...posts,
            {
                postId: posts.length + 1,
                id: posts.length + 1,
                email: emailValue,
                name: descValue
            }
        ])
        
        console.log(posts);
        // console.log(setPost);
        
        navigator('/');
    }



    return (

        <div className="add">
            <div className="add__container container">

                <h1 className="add__title">Add comments</h1>

                <form className="add__form">

                    <label className="add__label">
                        Comment title:
                        <input value={titleValue} onChange={titleChange} className="add__comment-title add__input" type="text" />
                    </label>

                    <label className="add__label">
                        Comment email:
                        <input value={emailValue} onChange={emailChange} className="add__comment-email add__input" type="email"/>
                    </label>

                    <label className="add__label">
                        Comment description:
                        <textarea value={descValue} onChange={descChange} className="add__comment-description " type="text"/>
                    </label>

                    <button onClick={handleSubmit} className="add__comment-btn">Add Comment</button>

                </form>
                
            </div>
        </div>

    );
}

export default AddComment;