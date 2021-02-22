import './serverLoading.scss'
import useUnapprovedAccount from  './serverLoadingLogic'
import serverLoading from '../../img/loading.gif'

function Loading() {

    const {} = useUnapprovedAccount()

  return (
    <div className="serverLoadingMainContainer">
        <div className="serverLoadingContainer">
            <img src={serverLoading}/>
            <p>Server Loading...</p>
        </div>
    </div>
  );
}

export default Loading;
