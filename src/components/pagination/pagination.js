import './pagination.css';
import {FcNext, FcPrevious} from 'react-icons/fc'
export const Pagination = ({dataLength, setActivePage, activePage, itemsPerPage, indexOfFirstItem, indexOfLastItem}) => {

    const countPages = Math.ceil(dataLength / itemsPerPage);
    
    const nextPage = () =>{
        if(activePage === countPages) return;
        
        setActivePage(activePage+1);
    }
    
    const previusPage = () => {
        if(activePage === 1) return;

        setActivePage(activePage-1);
    }

    return <>

        <div className="pagination-controls">

            Mostrando {indexOfFirstItem+1}-{indexOfLastItem >= dataLength ? indexOfFirstItem+1 : indexOfLastItem} items de {dataLength} <br />
            <div>
                <FcPrevious className='pagination-buttons' onClick={()=>previusPage()} />

                <FcNext className='pagination-buttons' onClick={()=>nextPage()} />
            
            </div>
        </div>
    </>

}