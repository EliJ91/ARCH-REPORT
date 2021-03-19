import {useState} from 'react'
import '../caravanReports.scss'
import axios from 'axios'


function UpdateFine({fine,id,setReports}){
    const [hide, setHide] = useState(true)
    const [newFine, setNewFine] = useState(fine)

    async function updateFine(newFine, id){
      console.log(newFine, id)
      await axios.post(process.env.REACT_APP_API_PREFIX+"/api/caravan_report/updatefine",{ newFine, id })
      .then(function (response) {
          setReports(response.data[0], setHide(true))
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  return (
    <div className="fineContainer">
        <input onClick={()=>setHide(false)} type="number" placeholder={newFine} onChange={(e)=>setNewFine(e.target.value)}/>
        <button className={`fineSaveButton ${hide && "hide"}`} onClick={()=>updateFine(newFine, id)}>SAVE</button>
    </div>
  );
}

export default UpdateFine;
//setNewFine(e.target.value)