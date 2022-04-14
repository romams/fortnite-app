const { createContext, useState } = require("react");

const INITIAL_STATE = {};

const Context = createContext(INITIAL_STATE);

export function NewsContextProvider({ children }){
    const [ftNews, setFtNews] = useState([]);

    return <Context.Provider value={
        {
            ftNews,
            setFtNews
        }
    }>
        { children }
    </Context.Provider>
}

export default Context;