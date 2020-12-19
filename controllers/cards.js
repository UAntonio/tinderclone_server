import mongoose from 'mongoose';
import CardsMessage from '../models/dbCards.js'

export const getCards = async (req, res)=>{
    try{
        const cardMessages = await CardsMessage.find();
    
        res.status(200).json(cardMessages);

    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createCard = async (req, res)=>{
    const card = req.body;
    const newcard = new CardsMessage(card);
    try{
        await newcard.save();
        res.status(201).json(newcard);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}
