
import express from 'express';
import {registerUser} from '../controllers/userController.js';

const userRoutes=express.Router()

// Import the User model

import User from '../models/User_model.js';

userRoutes.post('/register',registerUser)



export default userRoutes;