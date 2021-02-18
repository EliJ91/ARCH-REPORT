import {useState} from 'react'
import '../caravanReports.scss'


function SaveButton({fine,id,update}){
    const [hide, setHide] = useState(true)
    const [newFine, setNewFine] = useState(fine)

    async function save(){
      await update(newFine, id)
      setHide(true)
    }

  return (
    <div className="Button">
        <input onClick={()=>setHide(false)} type="number" placeholder={newFine.toLocaleString()} onChange={(e)=>setNewFine(e.target.value)}/>
        <button className={hide && "hide"} onClick={()=>save()}>SAVE</button>
    </div>
  );
}

export default SaveButton;
