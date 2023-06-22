const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;
const hostname = '127.0.0.1';


mongoose.connect("mongodb+srv://Pchhalotre:Sonu321chh@cluster0.sjvnsih.mongodb.net/trees?retryWrites=true&w=majority");

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

const treeSchema = {
    scientific_name: String,
    category: String,
    location: String,
    common_name: String,
    img_src: String
};

const categorySchema = new mongoose.Schema({
    img_src: String,
    title: String,
    link: String
});

const Category = new mongoose.model('category', categorySchema);
const Tree = mongoose.model('treeInfo', treeSchema);

app.use(bodyParser.urlencoded({ extended: true }));


app.route('/')
    .get(async (req, res) => {
        const item = await Category.find({})
        try {
            res.send(item);
        } catch (err) {
            console.log(err);
        }
    })

app.route('/fruits')
    .get(async (req, res) => {
        const fruit = await Tree.find({ category: 'Fruit' })
        try {
            res.send(fruit);
        } catch (err) {
            console.log(err);
        }
    });

app.route('/flower')
    .get(async (req, res) => {
        const flower = await Tree.find({ category: 'Flowering' })
        try {
            res.send(flower);
        } catch (err) {
            console.log(err);
        }
    });

app.route('/vegetable')
    .get(async (req, res) => {
        const vegetable = await Tree.find({ category: 'Vegetable' })
        try {
            res.send(vegetable);
        } catch (err) {
            console.log(err);
        }
    });

app.route('/medicinal')
    .get(async (req, res) => {
        const medic = await Tree.find({ category: 'Medicinal' })
        try {
            res.send(medic);
        } catch (err) {
            console.log(err);
        }
    });

app.route('/cactus')
    .get(async (req, res) => {
        const cactus = await Tree.find({ category: 'Cactus' })
        try {
            res.send(cactus);
        } catch (err) {
            console.log(err);
        }
    });

app.route('/ornamental')
    .get(async (req, res) => {
        const orno = await Tree.find({ category: 'Ornamental' })
        try {
            res.send(orno);
        } catch (err) {
            console.log(err);
        }
    });


app.route('/:category/:id')
    .get(async (req, res) => {
        const { category, id } = req.params;
        const result = await Tree.findById({ _id: id });
        try {
            res.send(result);
        } catch (err) {
            console.log(err);
        }
    })

  
app.listen(port, hostname, () => {
    console.log(`sever running at ${port} port`);
});