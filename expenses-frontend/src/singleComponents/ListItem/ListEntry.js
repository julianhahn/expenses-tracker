import './ListEntry.css'
import {useRef, useEffect} from 'react'

function ListEntry(props){

    const rowContainer = useRef(null)    
    useEffect(()=>{
        //after the module is loaded set the background
        if(props.index % 2 == 0){
            rowContainer.current.classList.add("color_even")
            rowContainer.current.classList.remove("color_odd")
        } else {
            rowContainer.current.classList.add("color_odd")
            rowContainer.current.classList.remove("color_even")
        }
    }, [])
    // TODO for "Laden"
    // get the most current 20 shops from the database and look on any change if there matches any in this local list
    // if there is no match then aks the database if there is a sub match left

    /**
     * TODO for "Datum"
     * decide if you want to use the Date of the latest entry or the date today as a default value in the date picker
     * i think the latest date makes more sense, because the use-case will be that i add a bulk of data later on.
     */

    return (
        <div className="entryRow" ref={rowContainer}>
            <div className="entryCost">{props.data.price}€</div>
            <div className="entryShop">{props.data.shopName}</div>
            <div className="entryDate">{props.data.date}</div>
        </div>
    )
}

export default ListEntry