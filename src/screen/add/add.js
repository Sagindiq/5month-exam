import { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/data";
import "./add.scss";
const AddComment = () => {

    const {posts, setPost} = useData();

    const [titleValue, setTitleValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [descValue, setDescValue] = useState("");

    const navigator = useNavigate();

    const titleRef = useRef();
    const emailRef = useRef();
    const descRef = useRef();

    const titleChange = (evt) => {
        setTitleValue(evt.target.value);
        titleRef.current.style = "outline: 1px solid aqua";
        titleRef.current.placeholder = "";
    }

    const emailChange = (evt) => {
        setEmailValue(evt.target.value);
        emailRef.current.style = "outline: 1px solid aqua";
        emailRef.current.placeholder = "";
    }

    const descChange = (evt) => {
        setDescValue(evt.target.value);
        descRef.current.style = "outline: 1px solid aqua";
        descRef.current.placeholder = "";
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (titleValue.trim() && emailValue.trim() && descValue.trim()) {

           const ps = posts.unshift(
                {
                    postId: posts.length + 1,
                    id: posts.length + 1,
                    email: emailValue,
                    name: titleValue,
                    body: descValue
                }
            )

            console.log(posts);
            

            setPost([
                ...posts
        ])
        
        navigator('/');
        
        }

        if (!titleValue.trim()) {
            titleRef.current.focus();
            titleRef.current.style = "outline: 1px solid red";
            titleRef.current.placeholder = "Please fill out title";
        }

        if (!emailValue) {
            emailRef.current.focus();
            emailRef.current.style = "outline: 1px solid red";
            emailRef.current.placeholder = "Please fill out email address";
        }

        if (!descValue) {
            !titleValue ? titleRef.current.focus() : !emailValue ? emailRef.current.focus() : descRef.current.focus();
            descRef.current.style = "outline: 1px solid red";
            descRef.current.placeholder = "Please fill out description";
        }
        
    }
    


    return (

        <div className="add">
            <div className="add__container container">

                <h1 className="add__title">Add comments</h1>

                <form className="add__form">

                    <label className="add__label">
                        Comment title:
                        <input ref={titleRef} value={titleValue} onChange={titleChange} className="add__comment-title add__input" type="text" />
                    </label>

                    <label className="add__label">
                        Comment email:
                        <input required ref={emailRef} value={emailValue} onChange={emailChange} className="add__comment-email add__input" type="email"/>
                    </label>

                    <label className="add__label">
                        Comment description:
                        <textarea ref={descRef} value={descValue} onChange={descChange} className="add__comment-description " type="text"/>
                    </label>

                    <div className="add__buttons">
                        <Link className="add__back-btn add__btn" to="/" >Go back</Link>
                        <button onClick={handleSubmit} className="add__comment-btn add__btn">Add Comment</button>
                    </div>

                </form>
                
            </div>
        </div>

    );
}

export default AddComment;