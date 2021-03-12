import {useState, useEffect} from 'react'


const useGuildButton = (currentGuilds, setCurrentGuilds,guild) => {
    const [selected, setSelected] = useState(false)





    async function addGuild(guild){
        if(currentGuilds.includes(guild)){
            let array = currentGuilds
            let index = array.indexOf(guild)
            array.splice(index)
            setCurrentGuilds(array, changeSelected())
        }else{
            setCurrentGuilds(prevState => [...prevState, guild], changeSelected())
        }
    }
    function changeSelected(){
        setSelected(!selected)
    }

    return {selected, addGuild}
}

export default useGuildButton;
