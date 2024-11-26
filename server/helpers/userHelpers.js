import bcrypt from 'bcrypt';
const bcryptPassword=async (password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
export {bcryptPassword}
