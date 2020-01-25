var xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var yCoordinates = [1, 2, 3, 4, 5, 6, 7, 8];

function calculateSquare(move) {
    var startX = 'a';
    var startY = 1;
    var x = move[0];
    var y = move[1];
    var squareX = xCoordinates[(xCoordinates.indexOf(startX) + x) - 1];
    var squareY = yCoordinates[(yCoordinates.indexOf(startY) + y) - 1];
    var square = `${squareX}${squareY}`;

    return square;
}

module.exports = calculateSquare;