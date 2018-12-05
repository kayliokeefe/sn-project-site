const express = require('express');
const router = express.Router();




/* GET homepage */

router.get('/', (req, res) => {
   res.render('courses');
})

router.get('/intro-to-prog', (req, res) => {
    res.render('intro-to-prog');
})
router.get('/intro-to-prog-versoza', (req, res) => {
    res.render('versoza');
})

router.get('/intro-to-prog-clayton', (req,res) => {
    res.render('clayton');
})
router.get('/data-structures', (req,res) => {
    res.render('data-structures');
})
router.get('/data-structures-kuklowska', (req,res) => {
    res.render('joanna');
})
router.get('/data-structures-Bari', (req,res) => {
    res.render('Bari');
})
router.get('/data-structures-moody', (req,res) => {
    res.render('moody');
})
router.get('/intro-to-comp-sci', (req, res) => {
    res.render('intro-to-comp-sci');
})
router.get('/intro-to-comp-sci-bloomberg', (req, res) => {
    res.render('bloomberg');
})

router.get('/discrete-math', (req,res) => {
    res.render('discrete-math');
})

router.get('/discrete-math-nguyen', (req,res) => {
    res.render('nguyen');
})
router.get('/discrete-math-lushi', (req,res) => {
    res.render('lushi');
})
router.get('/basic-algo', (req,res) => {
    res.render('basic-algo');
})
router.get('/basic-algo-pogudin', (req,res) => {
    res.render('pogudin');
})
router.get('/basic-algo-shoup', (req,res) => {
    res.render('shoup');
})
router.get('/cso', (req,res) => {
    res.render('cso');
})
router.get('/cso-zahran', (req,res) => {
    res.render('zahran');
})

router.get('/os', (req,res) => {
    res.render('os');
})
router.get('/os-gottlieb', (req,res) => {
    res.render('gottlieb');
})

router.get('/machine-learning', (req,res) => {
    res.render('machine-learning');
})
router.get('/machine-learning-cho', (req,res) => {
    res.render('cho');
})

router.get('/ait', (req,res) => {
    res.render('ait');
})

router.get('/ait-versoza', (req,res) => {
    res.render('ait-versoza');

})

router.get('/linear-algebra', (req,res) => {
    res.render('linear-algebra');
})
router.get('/linear-algebra-shum', (req,res) => {
    res.render('shum');
})
router.get('/linear-algebra-stein', (req,res) => {
    res.render('stein');
})
module.exports = router;