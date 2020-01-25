module.exports = {
    validation: (req, res, next) => {
        if(req.body.square.length !== 2) return res.status(500).send('Invalid algebraic notation');
        let xCoordinate = req.body.square[0];
        let yCoordinate = req.body.square[1];
        if(!xCoordinate.match(/[A-Ha-h]/i)) return res.status(500).send('Invalid algebraic notation');
        if(isNaN(parseInt(yCoordinate))) return res.status(500).send('Invalid algebraic notation');
        if((parseInt(yCoordinate) < 1) || (parseInt(yCoordinate) > 8)) return res.status(500).send('Invalid algebraic notation');
        req.body.square = `${xCoordinate.toLowerCase()}${yCoordinate}`;
        return next();
    }
}