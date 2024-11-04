const userModel = require("../Model/userModel")
const jwt = require("jsonwebtoken")

async function Register  (req,res){


    console.log("seeven",req.body);
    const{name,email,password}= req.body

    if(!name || !email || !password){
        
        return res.status(400).json({
            status:false,
            message:"Please Provide all the details"
        })
    }

    const obj = {
        name,
        email,
        password
    }

    try{


        const isAlreadyExist = await userModel.findOne({email:email})

        if(isAlreadyExist){
            return res.status(400).json({
                status:false,
                message:"Email Id is already registered"
            })
        }

        const saveUserData = await userModel.create(obj)
        
        return res.status(200).json({
            status:true,
            message:"Account created sucessfully"
        })

    }catch(e){
        
        return res.status(400).json({
            status:false,
            message:"Rgister API"
        })
    }
    

       
}


async function Login  (req,res){


    const{password,email}= req.body

    console.log(email,password);
    

    if(!email || !password){
        
        return res.status(400).json({
            status:false,
            message:"Please Provide Both email and password"
        })
    }

    try{


        const isAlreadyExist = await userModel.findOne({email:email})

        if(!isAlreadyExist){
            return res.status(400).json({
                status:false,
                message:"Email Id is not registered"
            })
        }

        console.log(isAlreadyExist);
        
        if(isAlreadyExist.password !== password){
            return res.status(400).json({
                status:false,
                message:"Invalid password please try again"
            })
        }

        const jsonPayload = {
            id:isAlreadyExist._id,
            email:isAlreadyExist.email
        }

        console.log(jsonPayload);
        

        const token = jwt.sign(jsonPayload,"SecretKey")
        
        
        return res.status(200).json({
            status:true,
            message:"Login  sucessfully",
            token:token
        })

    }catch(e){

        console.log(e);
        
        
        return res.status(400).json({
            status:false,
            message:"Login  API falied"
        })
    }
}


async function PlayerList(req,res){

    const playerListData = [
        
              {
                "name": "Rohit Sharma",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country":'INDIA'
              },
              {
                "name": "Virat Kohli",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country":'INDIA'
              },
              {
                "name": "Shubman Gill",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country":'INDIA'
              },
              {
                "name": "KL Rahul",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Wicketkeeper Batsman",
                "country":'INDIA'
              },
              {
                "name": "David Warner",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country": "AUSTRALIA"
              },
              {
                "name": "Steve Smith",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country": "AUSTRALIA"
              },
              {
                "name": "Marnus Labuschagne",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country": "AUSTRALIA"
              },
              {
                "name": "Alex Carey",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Wicketkeeper Batsman",
                "country": "AUSTRALIA"
              },
              {
                "name": "Shakib Al Hasan",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "All-Rounder",
                "country": "BANGLADESH"
              },
              {
                "name": "Mushfiqur Rahim",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Wicketkeeper Batsman",
                "country": "BANGLADESH"
              },
              {
                "name": "Tamim Iqbal",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country": "BANGLADESH"
              },
              {
                "name": "Mustafizur Rahman",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Bowler",
                "country": "BANGLADESH"
              },
              {
                "name": "Babar Azam",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Batsman",
                "country": "PAKISTAN"
              },
              {
                "name": "Shaheen Afridi",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Bowler",
                "country": "PAKISTAN"
              },
              {
                "name": "Mohammad Rizwan",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "Wicketkeeper Batsman",
                "country": "PAKISTAN"
              },
              {
                "name": "Shadab Khan",
                "photo_url": "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
                "skill": "All-Rounder",
                "country": "PAKISTAN"
              }
              
          
    ]


        console.log(req.query.Country);
        if(req.query.country === ""){
            return;
        }

        var decoded = jwt.verify(token, 'shhhhh');


        const filterArray = playerListData.filter((ele)=>{
                if(ele.country === req.query.Country){
                    return true;
                }
        })

        console.log(filterArray);
        

        try{

            return res.status(200).json({
                status:true,
                PlayerData:filterArray
            })
            
        }catch(e){
            return res.status(400).json({
                status:false,
                message:"Player API list"
            })
        }

       
}




const userController ={
    Register,
    Login,
    PlayerList
}

module.exports = userController;