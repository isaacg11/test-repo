module.exports = {
    validation: (req, res, next) => {
        if(req.query.square.length !== 2) return res.status(500).send('Invalid algebraic notation');
        let xCoordinate = req.query.square[0];
        let yCoordinate = req.query.square[1];
        if(!xCoordinate.match(/[A-Ha-h]/i)) return res.status(500).send('Invalid algebraic notation');
        if(isNaN(parseInt(yCoordinate))) return res.status(500).send('Invalid algebraic notation');
        if((parseInt(yCoordinate) < 1) || (parseInt(yCoordinate) > 8)) return res.status(500).send('Invalid algebraic notation');
        req.query.square = `${xCoordinate.toLowerCase()}${yCoordinate}`;
        return next();
    }
}