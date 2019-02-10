import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const offerSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    offer_image: {
        mainphoto: { type: String },
        subphoto1: { type: String },
        subphoto2: { type: String },
        subphoto3: { type: String },
    },
    title: { type: String, required: true},
    description: { type: String },
    choosedate: {
        from: { type: String },
        to: { type: String },
    },
    nodate: { type: Boolean },
    fullprice: { type: Number },
    discount: { type: Number, min: 0, max: 100 },
    category: { type: String },
    address: { type: String },
    phone: { type: String },
    site: { type: String },
    offerpath: { type: String },
    user: { type: String },
    created_date: { type: Date, default: Date.now },
    updated_date: { type: Date, default: Date.now },
})

const Offer = mongoose.model('offers', offerSchema);

export default Offer;