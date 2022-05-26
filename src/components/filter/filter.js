import { useState } from "react";
import { useData } from "../../contexts/data";
import "./filter.scss";
import searchImg from "../../assets/images/search-icon.svg";
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

            setSearch("");

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

        <form className="filter__form">
            <label className="filter__search-label">
                <input value={searchValue} onChange={inputChange} type="text" className="filter__search-input" />

            <button onClick={handleSearchBtn} className="filter__search-btn">
            </button>
            </label>
        </form>
    )
}

export default Filter;