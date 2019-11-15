const express = require('express');
const dbController = require('../controllers/dbController');
const authController = require('../controllers/authController');
const router = express.Router();
const path = require('path');

router.post('/signup', dbController.createUser, (req, res) => {
    res.status(201).json({ confirmation: 'success', username: res.locals.username });
    //res.status(200).sendFile(path.resolve(__dirname, '../../src/index.html'));
})

router.post('/login', dbController.verifyUsername, authController.setCookie, authController.createSession, (req, res) => {
    res.status(200).json({ confirmation: 'success', username: res.locals.username });
})

router.get('/test', authController.setCookie, authController.createSession, authController.isLoggedIn, (req, res) => {
    res.json({confirmation: 'Success', username: 'res.locals.username' });
})

router.get('/getWaitTimes/:venue_id', dbController.getWaitTimes, (req, res) => {
    console.log('successfully retrieved wait times')
    res.status(200).json(res.locals.results);
})

router.post('/addWaitTime', dbController.addVenue, dbController.addWaitTime, (req, res) => {
    console.log('successfully added venue and stored wait time')
    res.sendStatus(200);
})

router.post('/addFavorite/:venue_id', dbController.addFavorite, (req, res) => {
    res.status(200).json({ confirmation: 'added favorite'})
})

router.get('/favorites/', authController.isLoggedIn, dbController.getFavorites, (req, res) => {
    res.status(201).json({ confirmation: 'here are your results'});
})

module.exports = router;
