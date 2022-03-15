import './EntryList.css'
import listHead from './listForm.svg'
import ListEntry from '../ListItem/ListEntry'
import AddEntry from '../ListItem/AddEntry'

function EntryList(props){

    const entries = [{
        price: 20,
        shopName: "Rewe",
        date: "01.02.2021"
    },{
        price: 30,
        shopName: "Edeka",
        date: "02.02.2021"
    }]

    return (
        <div className="list"> 
            <div className="listhead">
                <img src={listHead} className="head_background"/>
                <div className="title">{props.title}</div>
            </div>
            <div className="listBody">
                <div className="entriesContainer">
                    {entries.map((entry, i) => {
                        return <ListEntry data={entry} index = {i} key={i}/>
                    })}
                </div>
                <AddEntry/>
            </div>
        </div>
    )
}

export default EntryList