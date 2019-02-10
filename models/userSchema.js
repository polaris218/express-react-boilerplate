import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    businessName: { type: String, unique: true },
    businessEmail: { type: String },
    password: { type: String },
    image: {
        oriname: { type: String },
        savedname: { type: String },
    },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('users', userSchema);

export default User;