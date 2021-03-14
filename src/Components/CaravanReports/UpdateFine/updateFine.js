import {useState} from 'react'
import '../caravanReports.scss'


function UpdateFine({fine,id,update}){
    const [hide, setHide] = useState(true)
    const [newFine, setNewFine] = useState(fine)

    async function save(){
      await update(newFine, id)
      setHide(true)
    }

  return (
    <div className="fineContainer">
        <input onClick={()=>setHide(false)} type="number" placeholder={newFine.toLocaleString()} onChange={(e)=>setNewFine(e.target.value)}/>
        <button className={`fineSaveButton ${hide && "hide"}`} onClick={()=>save()}>SAVE</button>
    </div>
  );
}

export default UpdateFine;
