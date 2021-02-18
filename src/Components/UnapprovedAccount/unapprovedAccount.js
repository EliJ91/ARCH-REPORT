import './unapprovedAccount.scss'
import useUnapprovedAccount from  './unapprovedAccountLogic'
import unapproved from '../../img/notapproved.png'

function UnapprovedAccount() {

    const {} = useUnapprovedAccount()

  return (
    <div className="unapprovedAccountMainContainer">
        <div className="unapprovedAccountContainer">
                    <img src={unapproved}/>
        </div>
    </div>
  );
}

export default UnapprovedAccount;
