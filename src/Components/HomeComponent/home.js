import './home.scss'
import useHomePage from  './homeLogic'
import construction from '../../img/underConstruction.png'

function HomePage() {

    const {} = useHomePage()

  return (
    <div className="homePageContainer">
        <div className="homePageImage">
                    <img src={construction}/>
        </div>
    </div>
  );
}

export default HomePage;
