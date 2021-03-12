import './guildButton.scss'
import useGuildButton from './guildButtonLogic';

function GuildButton(props) {
    const {selected, addGuild} = useGuildButton(props.currentGuilds, props.setCurrentGuilds,props.guild)


  return (
        <div className={`guildButton ${selected && "selected"} ${props.currentGuilds.includes(props.guild.Name) && "selected"} `} onClick={()=>addGuild(props.guild)}>{props.guild.Name}</div>
  );
}

export default GuildButton;
