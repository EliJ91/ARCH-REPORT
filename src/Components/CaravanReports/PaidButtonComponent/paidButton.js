import {useState} from 'react'
import '../caravanReports.scss'


function PaidButton({paid,id,update}){
  return (
    <div className="paidButton">
        <button className={paid? "paid" : "unpaid"} onClick={()=>update(!paid, id)}>{paid ? "PAID" : "UNPAID"}</button>
    </div>
  );
}

export default PaidButton;
