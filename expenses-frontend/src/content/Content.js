import EntryForm from'./entryForm/entryForm.js'
import './Content.css'
import listForm from '../singleComponents/EntryList/listForm.svg'


function Content(props){
    return (
        <div className="content"> 
            <EntryForm/>
            <img src={listForm}/>
        </div>
    )
}

export default Content