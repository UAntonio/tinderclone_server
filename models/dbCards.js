import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})


const dbCards = mongoose.model('Cards',cardSchema);

export default dbCards;