import './Content.css'
import EntryList from '../singleComponents/EntryList/EntryList'

function Content(props){
    return (
        <div className="content"> 
          <EntryList title="Essen"/>
        </div>
    )
}

export default Content