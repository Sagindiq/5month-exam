import { useState } from "react";
import { useData } from "../../contexts/data";
import "./filter.scss";
const Filter = () => {

    const [searchValue, setSearch] = useState("");
    const {posts, setPost} = useData();
    const [oldValue, setValue] = useState(posts);
    // const oldValue = posts;

    const inputChange = (evt) => {
        setSearch(evt.target.value);
    }

    const handleSearchBtn = (evt) => {
        evt.preventDefault();

        if (searchValue) {

            // setValue(
            //     posts
            // )

            return setPost(
                posts.filter((post) => {
                    const searchRegExp = new RegExp(searchValue, "gi");
        
                    return post.name.match(searchRegExp);
                })
            )
        } else {

            return setPost(
                oldValue
                )

            }
        }
            
            


    return (
        <div className="filter">
            <div className="filter__container container">
                <form className="filter__form">
                    <label className="filter__search-label">
                        <span className="filter__search-label-span">Search:</span>
                        <input value={searchValue} onChange={inputChange} type="search" className="filter__search-input" />
                    </label>

                    <button onClick={handleSearchBtn} className="filter__search-btn">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Filter;