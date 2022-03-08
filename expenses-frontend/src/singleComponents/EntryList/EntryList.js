import './EntryList.css'
import listHead from './listForm.svg'


function EntryList(props){

    return (
        <div className="list"> 
            <div className="listhead">
                <img src={listHead} className="head_background"/>
                <div className="title">{props.title}</div>
            </div>
            <div className="listBody">

            </div>
        </div>
    )
}

export default EntryList