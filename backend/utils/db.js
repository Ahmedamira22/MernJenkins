import mongoose from "mongoose";


const dbCon = async() =>{
    try {
       await mongoose.connect(process.env.DB_URL)
        console.log("Database Connected Successfully")
    }
    catch(err) {
        console.error(err)
    }

}

export default  dbCon; 