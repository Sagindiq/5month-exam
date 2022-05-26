import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useData } from "../../contexts/data";
import "./edit.scss";
const EditComment = () => {

    const {posts, setPost} = useData();

    const [titleValue, setTitleValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [descValue, setDescValue] = useState("");

    const navigator = useNavigate();
    const params = useParams();

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


    const commentItem = posts.find((post) => post.id === +params.id)
    const commentIndex = posts.findIndex((post) => post.id === +params.id);
    
    
    const { id, postId, name, email, body} = commentItem;
    
    useEffect(() => {
        setTitleValue(name);
        setEmailValue(email);
        setDescValue(body);
    }, []);
    


    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (titleValue.trim() && emailValue.trim() && descValue.trim()) {
            setPost([
            ...posts.slice(0, commentIndex),
            {
                postId: postId,
                id: id,
                email: emailValue,
                name: titleValue,
                body: descValue
            },
            ...posts.slice(commentIndex + 1)
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
            descRef.current.style = "outline: 1px solid red";
            descRef.current.placeholder = "Please fill out description";
        }
        
    }

    const handleDeleteBtn = () => {

        setPost([
            ...posts.slice(0, commentIndex),
            ...posts.slice(commentIndex + 1)
        ])

        navigator('/');
    }


    return (

        <div className="edit">
            <div className="edit__container container">

                <h1 className="edit__title">Edit comments</h1>

                <form className="edit__form">

                    <label className="edit__label">
                        Comment title:
                        <input ref={titleRef} value={titleValue} onChange={titleChange} className="edit__comment-title edit__input" type="text" />
                    </label>

                    <label className="edit__label">
                        Comment email:
                        <input required ref={emailRef} value={emailValue} onChange={emailChange} className="edit__comment-email edit__input" type="email"/>
                    </label>

                    <label className="edit__label">
                        Comment description:
                        <textarea ref={descRef} value={descValue} onChange={descChange} className="edit__comment-description " type="text"/>
                    </label>

                    <div className="edit__buttons">
                        <Link className="edit__back-btn edit__btn" to="/" >Go back</Link>
                        <button onClick={handleDeleteBtn} className="edit__delete-button edit__btn" type="button">Delete comment</button>
                        <button onClick={handleSubmit} className="edit__comment-btn edit__btn">Edit Comment</button>
                    </div>

                </form>
                
            </div>
        </div>

    );
}

export default EditComment;