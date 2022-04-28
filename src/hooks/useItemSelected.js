import itemCotext from "context/itemModalContext";
import { useContext, useState } from "react";
import { useItems } from "./useItems";

const useItemSelected = () => {

    const {currentItem, setCurrentItem, cosmeticSet, setCosmeticSet} = useContext(itemCotext)
    const {cosmetics} = useItems('');

    const onSelectItem = (itemSelected) => {
        var modal = document.getElementById("myModal");

        setCurrentItem(itemSelected);

        modal.style.display = "block";

        const currentItemSet = cosmetics.filter(item => item?.set?.value === itemSelected?.set?.value);

        setCosmeticSet(currentItemSet)
    }
    
    return {currentItem, onSelectItem, cosmeticSet}
}

export default useItemSelected;