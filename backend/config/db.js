import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://goutamsahoogsst1841_db_user:QMuyoVnjpFc14hRs@cluster0.hug1jpo.mongodb.net/?appName=Cluster0').then(() => console.log("DB Connected"))
}