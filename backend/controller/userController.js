import UserModels from "../models/user.js"

//create
const createUser=async(req,res)=>{
    try{
    const {name, email, salary, phone}= req.body;

    const NewUser = new  UserModels({ 
        name ,email ,salary ,phone
    })
    await  NewUser.save()
    res.status(200).json({success:true, Message:'User created successfully',NewUser})
    } catch (error) {
         console.log(error);
         res.status(500).json({success:false, Message:'internal server error',NewUser})
    }
}


//get
const  getUser=async(req,res)=>{
    try{
        const  user =await UserModels.find().sort({ _id: -1 } );
        if (!user) {
            return res.status(404).json({ success : false, message : 'No user found' });
          
        }
        res.status(200).json({ success : true, user});
    } catch(error){
        console.log(error);
        return res.status(500).json({ success : false, message : 'Internal Server Error!' });

    }

}

//update
const updateUser = async (req, res) =>{
    try{
        const UserId=req.params.id;
        const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body, {new:true});

        if(!updatedUser) {
            return res.status(404).json({ success: false, message:"no user found"});
          }
        res.status(201).json({ success: true,message:'User updated successfully', updatedUser});
        } catch(error){
            console.log(Error)
           return res.status(500).json({ success: false ,message: "Internal Server Error!"});
    }
}


//delete
const deleteUser = async (req, res) =>{
    try{
        const UserId = req.params.id;
        const deletedUser = await UserModels.findByIdAndDelete(UserId);
        if(!deletedUser) {
            return res.status(400).json({success:false , message: "No user with such ID"})
        }
        res.status(200).json({success:true ,message:'user deleted successfully'})
    } catch (error){
        console.log(error);
        res.status(500).json({ success: false ,message: "Internal Server Error!"});
    }
}


export {createUser,getUser,updateUser,deleteUser}