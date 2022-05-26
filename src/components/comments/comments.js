import { Link } from "react-router-dom";
import { useData } from "../../contexts/data";
import "./comments.scss";
import mailImg from "../../assets/images/email.svg";
import titleImg from "../../assets/images/title.svg";
import descImg from "../../assets/images/desc.svg";
import editImg from "../../assets/images/edit.png";

const Comments = () => {
    
    const {posts} = useData();
    
    
    return (

        <main className="main">
            <article className="main__container container">

                <h2 className="main__title">Comments</h2>

                <ul className="main__comment-list">

                    {
                        posts.map(post => {
                            const {id, postId, name, email, body} = post;
                            
                            return (
                                <div key={id} className="main__comment-item">
    
                                    <div className="comment__card">
                                        <div className="comment__title">
                                            <img src={titleImg} alt="" className="comment__title-img comment__img" />
                                            <h3 className="comment__title-text">{name}</h3>
                                        </div>
                                        <div className="comment__email">
                                            <img className="comment__img" src={mailImg} alt="" />
                                            {/* <p className="comment__email-text">{email}</p> */}
                                            <a className="comment__email-text" href={`mailto:${email}`} target="_blank">{email}</a>
                                        </div>
                                        <div className="comment__description">
                                            <img src={descImg} alt="" className="comment__description-img comment__img" />
                                            <p className="comment__description-text">{body}</p>
                                        </div>
                                    </div>
    
                                    <Link className="comment__edit-btn" to={`/edit/${id}`}>
                                        <img src={editImg} alt="" />
                                    </Link>
    
                                </div>
                            )

                        }).reverse()
                    }

                </ul>

            </article>
        </main>

    );
}

export default Comments;