import './deleteStyle.scss'
import React,{useState} from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from 'axios'

function Delete({ id, setReports}){
    const [hide, setHide] = useState(false)

    async function deleteReport(value,id){
      await axios.get(process.env.REACT_APP_API_PREFIX+"/api/caravan_report/updatenote",{ params: { value, id }})
      .then(function (response) {
          setReports(response.data[0])
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  return (
      <div className="deleteButton">
        <div title="delete" className={`deleteButton}`}><DeleteForeverIcon onClick={()=>setHide(!hide)} className="deleteIcon"/></div>
    </div>
  );
}

export default Delete;
