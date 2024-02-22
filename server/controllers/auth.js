import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { HttpError } from "../helpers/HttpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";



/* REGISTER USER */
  const register = ctrlWrapper(async (req, res) => {
  console.log("Request body:", req.body);

    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    if (!email || !password || email.trim() === '' || password.trim() === '') {
      throw HttpError(400);
    }
    
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
 });

//  LOGGING IN
 const login = ctrlWrapper(async(req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email: email});
  if (!user){
    throw HttpError(400, "User does not exist");
  }

  const isMatch = await bcrypt.compare(password, user.password);
if(!isMatch) {
  throw HttpError(400, "Invalid credentials");
}
const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: "23h" });
delete user.password;
res.status(200).json({token, user});
})

export {register, login};
 
