import mongoose from "mongoose";

export async function connectToDB() {
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    return mongoose.connect (
        "mongodb://localhost:27017",
        opts
    );
}