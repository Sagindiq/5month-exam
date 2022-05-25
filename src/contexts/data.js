import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const CommentProvider = ({ children }) => {
    const [posts, setPost] = useState();
    const [isFetch, setFetch] = useState(false);
    
    useEffect(() => {
        if (!isFetch) {
        setFetch(true);
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => setPost(data))
    }
    }, [isFetch]);
    console.log(isFetch);
    


    if (!posts) {
        return null;
    }

    return (
        <DataContext.Provider value={{posts, setPost}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext)
}

export default CommentProvider;