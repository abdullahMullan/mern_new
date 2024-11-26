// importing mongoose
import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';
//  defining the schema
 const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name field is required'],
        trim: true,
    },
    email: { 
        type: String,
         unique: true ,
        required: [true,'Email field is required'],
        lowercase: true,
        validate: [validator.isEmail,'Please enter a valid email'],
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please enter a valid email address'
        ]

    },
    password: {
        type: String,
        required: true,
        minlength: [6,'Password must be at least 6 characters'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
},
    { timestamps: true } // automatically adds createdAt and updatedAt fields
)


userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
})

//  creating the model

const User = mongoose.model('User', userSchema);

//  exporting the model

export default User;


// middleware to hash password before saving to database


//middleware to check is password is mached or is password correct

// userSchema.methods.matchPassword = async function(password) {
//     return await bcrypt.compare(password, this.password);
// }