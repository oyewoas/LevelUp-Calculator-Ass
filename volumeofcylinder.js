/**
   * Volume of Cylinder method
   * Volume of Cylinder is PI * Square of Radius * Height
   * @param {integer} radius
   * @param {integer} height
   * @returns {integer} area to two decimal places
   */



const volumeOfCylinder = (radius, height) => {
    const pi = 3.142;
    function squareOfRadius(radius) {
        const square = radius*radius;
        return square;
    }
    const volume = pi * squareOfRadius(radius) * height;
    return `The Volume of the Cylinder is equal to ${volume}`;
};

//Run the method
volumeOfCylinder(3, 4);