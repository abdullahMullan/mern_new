import User from "../models/User_model.js";
import bcrypt from "bcrypt";
// define logic for register a user using register function
const registerUser = async (req, res) => {
    try {
       
        const { name, email, password } = req.body;
        // validate the data
        if (!name || !email || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: "User already exists" });
        // create a new user
        const newUser = new User({ name, email, password });
        // we also can usee create syntax to create a new user
        // const newUser = await User.create({ name, email, password });
        // // encrypt the password
        // const salt = await bcrypt.genSalt(10);
        // newUser.password = await bcrypt.hash(password, salt);
        // save the user
        await newUser.save();
        res.json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
        }    }
    export  {registerUser};
