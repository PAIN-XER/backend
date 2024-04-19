import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    require: true,

    index: true,
    trim: true,
  },

  avatar: {
    type: String, // cloudinary url
    require: true,
  },
  coverImage: {
    require: true,
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  password: {
    type: String,
    require: [, "Password is required"],
  },
  RefreshToken: {
    type: string,
  },
},
{
    timestamps:true
}
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10)
  next()
  
}) 

userSchema.methods.isPasswordCorrect = async function(password){
 return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccesToken= function(){
  jwt.sign( 
    {
       _id: this._id,
       email:this.email,
       username: this.username,
       fullname:this.fullname
    }
  )
}
userSchema.methods.generateRefreshToken= function(){}

export const User = mongoose.model("User", userSchema);
