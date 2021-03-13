import './setGuildComs.scss'
import useSetGuildComs from  './setGuildComsLogic'
import GuildButton from './guildButton/guildButton'
import {ToastContainer} from 'react-toastify';

function SetGuildComs() {

    const {currentGuilds,setCurrentGuilds,alphabetical,saveGuilds} = useSetGuildComs()



  return (
    <>
    <div className="guildComsMainTitle">AC & Co Voice</div>
    <div className="guildComsContainer">
      <div className="guildComsAllGuildsContainer">
        <div className="guidComsSubTitle">Select A Guild To Be Approved</div>
        {alphabetical.map(g=>(
          <GuildButton key={g.Id}  guild={g} setCurrentGuilds={setCurrentGuilds}  currentGuilds={currentGuilds}/>
        ))}
      </div>
      <div className="guildComsSelectedGuildsContainer">
      <div className="guidComsSubTitle">Currently Approved Guilds</div>
        {currentGuilds.map(g=>(
            <GuildButton key={g.Id} selected="selected" guild={g} setCurrentGuilds={setCurrentGuilds}  currentGuilds={currentGuilds}/>
          ))}
      </div>
    </div>
    <div className="guildComsButton" onClick={()=>saveGuilds(currentGuilds)}>Save</div>
    <ToastContainer
    progressClassName="toastProgress"
    bodyClassName="toastBody"
    className="toastContainer"
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    />
    </>
  );
}

export default SetGuildComs;
