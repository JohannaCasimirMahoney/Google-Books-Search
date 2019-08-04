const mongoose = require("mongoose");
const db = require("../models");

// THIS FILE DUMPS THE BOOKS COLLECTION AND INSERTS THE BOOKS BELOW

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localost/googlebooks"
);

const bookSeed = {
    authors: ["Rhonda Britten"],
    description:"The creator of the groundbreaking Fearless Living program shows readers how to overcome unrealistic expectations and live a life based on instinct and intention rather than fear, clinging, and regret. Reprint.",
    image:"http://books.google.com/books/content?id=coc5temxA3gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title:"Fearless Living",
}

db.Book
.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});