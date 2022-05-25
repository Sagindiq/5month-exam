import { Link } from "react-router-dom";
import { useData } from "../../contexts/data";
import "./comments.scss";
import mailImg from "../../assets/images/email.svg";
import titleImg from "../../assets/images/title.svg";
import descImg from "../../assets/images/desc.svg";

const Comments = () => {

    const {posts, setPost} = useData();
    
    
    return (

        <main className="main">
            <article className="main__container container">

                <ul className="main__comment-list">

                    {
                        posts.map(post => {
                            const {id, postId, name, email, body} = post;
                            
                            return (
                                <div key={id} className="main__comment-item">

                                <div className="comment__title">
                                    <img src={titleImg} alt="" className="comment__title-img comment__img" />
                                    <Link className="comment__title-text" to={`/info/${id}`}>{name}</Link>
                                </div>

                                <div className="comment__email">
                                    <img className="comment__img" src={mailImg} alt="" />
                                    <p className="comment__email-text">{email}</p>
                                </div>

                                <div className="comment__description">
                                    <img src={descImg} alt="" className="comment__description-img comment__img" />
                                    <p className="comment__description-text">{body}</p>
                                </div>

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