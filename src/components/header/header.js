import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import FilterRadio from "../filter-radio/filter-radio";
import { useData } from "../../contexts/data";
import logoImg from "../../assets/images/logo.png";
import Filter from "../filter/filter";

const Header = () => {

    const [modal, setModal] = useState(false);
    const [option, setOption] = useState();
    const sortModalRef = useRef();
    // const {posts, setPost} = useData();
    const { posts, setPost} = useData();

    const sorts = [
            {
                id: 1,
                name: "A - Z"
            },
            {
                id: 2,
                name: "Z - A"
            }
        ];

        useEffect(() => {
            setPost([
                ...posts
            ])

        
        }, [option]);

        const HandleSortBtn = () => {
            
            return !modal ? setModal(true) : setModal(false);
        }

        const ModalChange = (evt) => {
            const option = +evt.target.dataset.id;
            setOption(option);

            setModal(false);

            


            setPost(
                    posts.sort((a, b) => {
                        switch (option) {
                            case 1:
                                return a.name > b.name ? 1 :  -1
                            case 2:
                                return b.name > a.name ? 1 : -1
                            default:
                                return 0;
                        }
                    })
            )
        }
            
            
    return (
        <header className="header">
            <div className="header__container container">
                <a href="/" className="header__logo">
                    <img className="header__img" src={logoImg} alt="" />
                    <strong>Comments</strong>
                    </a>

                <div className="header__sort">
                    <button onClick={HandleSortBtn} className="header__sort-btn">Sort {option ? `: ${sorts.find((sort) => sort.id === option).name}` : ""}</button>
                    
                        <div className={`header__sort-modal ${modal ? " header__sort-modal--active" : ""}`}>
                            <form className="header__sort-form" ref={sortModalRef} onChange={ModalChange}>
                                {
                                    sorts.map((sort) => {
                                        return (
                                            <FilterRadio  key={sort.id} data-id={sort.id}  className="sort__radio visually-hidden" labelcname="sort__label" spanCName="sort__span" >{sort.name}</FilterRadio>
                                            )
                                        })
                                }
                            </form>
                    
                        </div>
                </div>

                    <Filter />
                

                <Link className="header__add-btn" to="/add">Add comment</Link>
            </div>
        </header>
    );
}

export default Header;