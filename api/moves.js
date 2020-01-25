const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Move = mongoose.model('Move');
const calculateNextMoves = require('../services/moves');
const calculateSquare = require('../services/squares');
const { validation } = require('../middleware/index');

router.post('/', validation, (req, res) => {
    let firstMoves = calculateNextMoves(req.body.square);
    let firstSquares = [];
    firstMoves.forEach((m1) => {
        firstSquares.push(calculateSquare(m1));
    })

    let secondMoves = [];
    firstSquares.forEach((square) => {
        secondMoves.push(calculateNextMoves(square));
    })

    let secondSquares = [];
    secondMoves.forEach((m2) => {
        m2.forEach((m) => {
            secondSquares.push(calculateSquare(m));
        })
    })

    let newMove = new Move();
    newMove.start = req.body.square;
    newMove.moves = secondSquares;
    newMove.save((err) => {
        if(err) res.sendStatus(500);
        res.json(secondSquares);
    })
})

router.get('/', (req, res) => {
    Move.find().sort('-dt_created').then((moves) => {
        res.json(moves)
    })
})

module.exports = router;

