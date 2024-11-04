import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function Home() {


    const [selectedTeam,setSelectedTeam] = useState("")
    const [playerData,setPlayerData] = useState([])
    
    const isUserLoggedIn = useSelector((store)=>store.users.isUserLoggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("home",isUserLoggedIn);
        if(!isUserLoggedIn){
            console.log("asd");
            navigate("/")
            return;
        }
        
    },[isUserLoggedIn])


   function handleSelect(val){
            console.log(val);
            setSelectedTeam(val)
    }


   async function getData(){
    if(selectedTeam === ""){
        return;
    }

    try{

        const res  = await axios.get(`http://localhost:10000/playersList?Country=${selectedTeam}`)
        console.log(res);
        setPlayerData(res.data.PlayerData)
        

    }catch(e){
            console.log(e);
            
    }
   }

    useEffect(()=>{

        getData()

    },[selectedTeam])



  return (
        <>
            <div className='w-full'>
                <h1 className='w-full text-center flex'>Select Your Team</h1>

                <select className='w-2/12 border-2 justify-center' onChange={(e)=>handleSelect(e.target.value)}>
                    <option>INDIA</option>
                    <option>AUSTRALIA</option>
                    <option>BANGLADESH</option>
                    <option>PAKISTAN</option>
                </select>
            </div>

            <div className='flex flex-col gap-6'>
                {/* <ul> */}
                    {
                        playerData?.map((ele)=>{

                                console.log(ele.name);
                            
                                return(
                                   <div className='flex border-2 gap-4'>
                                        
                                        <p>Player Name :{ele.name} </p>
                                        <p>Skill : {ele.skill} </p>
                                        <p>Country : {ele.country} </p>
                                    </div>
                                )
                        })
                    }
                {/* </ul> */}
            </div>
        </>
  )
}

export default Home