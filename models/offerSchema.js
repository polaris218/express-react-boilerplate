import mongoose from 'mongoose';
import uuid from 'uuid-v4';

const Schema = mongoose.Schema;
const offerSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    offerId: { type: String, default: uuid()},
    offer_image: {
        mainphoto: { data: Buffer, contentType: String },
        subphoto1: { data: Buffer, contentType: String },
        subphoto2: { data: Buffer, contentType: String },
        subphoto3: { data: Buffer, contentType: String },
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