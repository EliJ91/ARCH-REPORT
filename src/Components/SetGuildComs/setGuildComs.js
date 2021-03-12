import './setGuildComs.scss'
import useSetGuildComs from  './setGuildComsLogic'
import GuildButton from './guildButton/guildButton'

function SetGuildComs() {

    const {currentGuilds,setCurrentGuilds,alphabetical,saveGuilds} = useSetGuildComs()



  return (
    <div className="guildComsContainer">
        {alphabetical.map(g=>(
          <GuildButton className="guildComsGuildButton" guild={g} setCurrentGuilds={setCurrentGuilds}  currentGuilds={currentGuilds}/>
        ))}
        <div className="button" onClick={()=>saveGuilds(currentGuilds)}>Save</div>

    </div>
  );
}

export default SetGuildComs;
