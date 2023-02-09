const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const shopData=require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(shopData.products);
  res.render('shop',{path:"/",pageTitle:'My Shop',prods:shopData.products});
});

module.exports = router;
