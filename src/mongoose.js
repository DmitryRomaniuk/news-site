const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let connection = mongoose.connect('mongodb://localhost/blogTask');

const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const Blog = mongoose.model('Blog', blogSchema);

function randomString() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 15; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

let randomDoc = () => ({
    title: randomString(),
    author: randomString(),
    body: randomString(),
    comments: [{ body: randomString(), date: Date.now() }],
    date: { type: Date.now() },
    hidden: false,
    meta: {
        votes: Math.floor(Math.random() * 100),
        favs: Math.floor(Math.random() * 100)
    }
});

let doc1 = new Blog(randomDoc());
let doc2 = new Blog(randomDoc());
let doc3 = new Blog(randomDoc());
let doc4 = new Blog(randomDoc());
let doc5 = new Blog(randomDoc());
let arrDocs = [doc1, doc2, doc3, doc4, doc5];

let id;
let promise = Promise.resolve();
promise.then(() => {
    return Blog.collection.drop();
}).then(result => {
    console.log('result drop collection %s\n', result);
    return Blog.find().exec();
}).then(docs => {
    console.log('count all docs %s\n', docs.length);
    return Blog.insertMany(arrDocs);
}).then(docs => {
    console.log('result insert docs %s\n', docs);
    return Blog.find().exec();
}).then(docs => {
    console.log('find all docs %s\n', docs);
    return Blog.findById(docs[0]._id).exec();
}).then(doc => {
    console.log('find by id doc %s\n', doc);
    id = doc._id;
    return Blog.updateOne({ _id: doc._id }, { $set: { body: 'AVENUE@Q.COM' } });
}).then(() => {
    return Blog.findById(id).exec();
}).then(doc => {
    console.log('updateOne doc %s\n', JSON.stringify(doc));
    return Blog.deleteOne({ _id: doc._id })
}).then(() => {
    return Blog.findById(id).exec();
}).then(doc => {
    console.log('removed doc %s\n', JSON.stringify(doc));
}).catch(err => console.log(err));

module.exports = Blog;