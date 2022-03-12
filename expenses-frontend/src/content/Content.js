import './Content.css'
import EntryList from '../singleComponents/List/EntryList'

function Content(props){
    return (
        <div className="content"> 
          <EntryList title="Essen"/>
        </div>
    )
}

export default Content