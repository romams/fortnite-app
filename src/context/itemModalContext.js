const { createContext, useState } = require("react");

const INITIAL_STATE = {};

const Context = createContext(INITIAL_STATE);

export function ItemContextProvider({children}){
    const [currentItem, setCurrentItem] = useState({});
    const [cosmeticSet, setCosmeticSet] = useState([])

    return <Context.Provider value={{
        currentItem, setCurrentItem,
        cosmeticSet, setCosmeticSet
    }}>
        {children}
    </Context.Provider>
}

export default Context;