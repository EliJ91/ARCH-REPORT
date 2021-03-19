
import '../caravanReports.scss'
import axios from 'axios'

function PaidButton({paid,id,setReports}){

  async function updatePaid(value,id){
    await axios.get(process.env.REACT_APP_API_PREFIX+"/api/caravan_report/updatepaid",{ params: { value, id }})
    .then(function (response) {
        setReports(response.data[0])
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="paidButton">
        <button className={paid? "paid" : "unpaid"} onClick={()=>updatePaid(!paid, id)}>{paid ? "PAID" : "UNPAID"}</button>
    </div>
  );
}

export default PaidButton;
