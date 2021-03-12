import {useState, useEffect} from 'react'


const useGuildButton = (currentGuilds, setCurrentGuilds) => {

    function addGuild(guild){
        const found = currentGuilds.find(element => element.Name === guild.Name);
        if(found){
            let array = [...currentGuilds]
            let index = array.indexOf(guild)
            array.splice(index, 1)
            setCurrentGuilds(array)
        }else{
            setCurrentGuilds(prevState => [...prevState, guild])
        }
    }

    return {addGuild}
}

export default useGuildButton;
