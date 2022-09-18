import { createContext, useState } from "react";


const SearchContext = createContext();

export function SearchProvider({children}){
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState(JSON.parse(sessionStorage.getItem('user-query')) || "");
  
    //darkMode/LightMode Switch
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('is-light')) || false);



    return(
        <SearchContext.Provider value={{users, setUsers, query, setQuery, darkMode, setDarkMode}}>{children}</SearchContext.Provider>
    )
}
export default SearchContext;