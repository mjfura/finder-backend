const mongoose=require("mongoose");
const placeSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            trim:true,
            maxlength:32,
            required:true
        },
        description:{
            type:String,
            trim:true
        },
        address:{
            type:String,
            trim:true,
            required:true
        },
        location:{
            lng:{
                type:Number,
                trim:true,
                required:true
            },
            lat:{
                type:Number,
                trim:true,
                required:true
            }
        }
    },
    {timestamps:true,
    versionKey:false});
    module.exports=mongoose.model("PlaceModel",placeSchema);