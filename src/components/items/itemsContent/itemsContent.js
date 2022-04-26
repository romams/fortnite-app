import './itemsContent.css'
import { Pagination } from "components/pagination/pagination";
import Spinner from "components/spinner/spinner";
import { useItems } from "hooks/useItems";
import { usePagination } from "hooks/usePagination";
import Cosmetic from "../cosmetic/cosmetic";


const ItemsContent = ({type}) => {

    const {cosmetics} = useItems(type)

    const {currentData, activePage, setActivePage, itemsPerPage, indexOfFirstItem, indexOfLastItem} = usePagination(cosmetics);
    
    return <div className={`tab-pane fade show active`} id={`pills-${type}`} role="tabpanel" aria-labelledby={`pills-${type}-tab`}>
        <div className="cosmetic-content">
            
            {
                currentData?.length > 0 ? (
                    
                    <Cosmetic type={type} cosmetics={currentData}/>
                ): <Spinner />
            }
        </div>
        
        <Pagination 
            dataLength={cosmetics.length}
            setActivePage={setActivePage}
            activePage={activePage}
            itemsPerPage={itemsPerPage}
            indexOfFirstItem={indexOfFirstItem}
            indexOfLastItem={indexOfLastItem}/>
    </div>

}

export default ItemsContent;