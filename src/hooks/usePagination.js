import { useState, useEffect } from 'react';


export const usePagination = (data) => {
    const [currentData, setCurrentData] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [indexOfFirstItem, setIndexOfFirstItem] = useState(0);
    const [indexOfLastItem, setIndexOfLastItem] = useState();
    
    let itemsPerPage = 36;
    
    useEffect(() => {
        setIndexOfLastItem(activePage * itemsPerPage);
        setIndexOfFirstItem(indexOfLastItem - itemsPerPage);

        setCurrentData(data?.slice(indexOfFirstItem, indexOfLastItem));
    }, [indexOfFirstItem, indexOfLastItem, activePage, data])

    return {currentData, setCurrentData, activePage, setActivePage, itemsPerPage, indexOfFirstItem, indexOfLastItem}
}