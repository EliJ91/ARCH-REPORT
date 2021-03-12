import './guildButton.scss'
import useGuildButton from './guildButtonLogic';

function GuildButton(props) {
    const {addGuild} = useGuildButton(props.currentGuilds, props.setCurrentGuilds,props.guild)
  return (
        <div className={`guildButton ${props.selected}`}  onClick={()=>addGuild(props.guild)}>{props.guild.Name}</div>
  );
}

export default GuildButton;
