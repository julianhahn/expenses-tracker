import './EntryList.css'
import listHead from './listForm.svg'
import ListItem from '../ListItem/ListItem'

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
                {entries.map((entry, i) => {
                    return <ListItem/>
                })}
            </div>
        </div>
    )
}

export default EntryList