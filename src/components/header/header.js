import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import FilterRadio from "../filter-radio/filter-radio";
import { useData } from "../../contexts/data";

const Header = () => {

    const [modal, setModal] = useState(false);
    const [option, setOption] = useState(1);
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
            },
            {
                id: 3,
                name: "Recently added"
            }
        ];

        useEffect(() => {
            setPost(

            [
                ...posts,
                posts.sort((a, b) => {
                    switch (option) {
                        case 1:
                            if (a.name > b.name) {
                                return 1;
                            } else if (b.name > a.name) {
                                return -1;
                            } else {
                                return 0;
                            }
                        case 2:
                            if (b.name > a.name) {
                                return 1;
                            } else if (a.name > b.name) {
                                return -1;
                            } else {
                                return 0;
                            }
                    
                        default:
                            return 0;
                    }
                })
            ]
            
        )
        
        }, [option]);

        const HandleSortBtn = () => {
            
            return !modal ? setModal(true) : setModal(false);
        }

        const ModalChange = (evt) => {
            const option = +evt.target.dataset.id;
            setOption(option);
            // evt.target.checked = true;
            // // const input = sortModalRef.current.querySelector(`.sort__radio[data-id='${option}']`);
            // input.checked = true;

            setModal(false);

            

        console.log(posts);
        

        }

        

        
    
    return (
        <header className="header">
            <div className="header__container container">
                <img className="header__img" src="/sd/sd.jpg" alt="" />
                <button onClick={HandleSortBtn} className="header__sort-btn">Sort: {sorts.find((sort) => sort.id === option).name}</button>

                {
                    <div ref={sortModalRef} onChange={ModalChange} className={`header__sort-modal ${modal ? " header__sort-modal--active" : ""}`}>
                    {
                        sorts.map((sort) => {
                            

                            return (
                                <FilterRadio key={sort.id} data-id={sort.id}  className="sort__radio visually-hidden" labelcname="sort__label" spanCName="sort__span" >{sort.name}</FilterRadio>
                            )
                        })
                    }
                </div>
                }

                <Link className="header__add-btn" to="/add">Add comment</Link>
            </div>
        </header>
    );
}

export default Header;