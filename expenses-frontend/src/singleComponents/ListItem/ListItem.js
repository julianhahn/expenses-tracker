import './ListItem.css'

function ListItem(props){

    var formData = new FormData()
    
    // TODO for "Laden"
    // get the most current 20 shops from the database and look on any change if there matches any in this local list
    // if there is no match then aks the database if there is a sub match left

    /**
     * TODO for "Datum"
     * decide if you want to use the Date of the latest entry or the date today as a default value in the date picker
     * i think the latest date makes more sense, because the use-case will be that i add a bulk of data later on.
     */
    return (
        <form className="entryForm" > 
            <div id="Preis" className="Preis">
                <label htmlFor="preis_input" id="preis_label" className="preis_label">{props.price}</label>
                <input type="number"/>
            </div>
            <div id="Laden" className="Laden">
                <label htmlFor="" id="laden_label" className="laden_label">{props.shopName}</label>
                <input type="text"/>
            </div>
            <div id="Datum" className="Datum">
                <label htmlFor="" id="datum_label" className="datum_label">{props.date}</label>
                <input type="date"/>
            </div>
        </form>
    )
}

export default ListItem