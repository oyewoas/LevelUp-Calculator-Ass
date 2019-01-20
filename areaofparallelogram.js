/**
   * Area of Parallelogram method
   * Area of parallelogram is Base * Height
   * @param {integer} base
   * @param {integer} height
   * @returns {float} area to of parallelogram two decimal places
   */

const areaOfParallelogram = (base, height) => {
    const area = base * height;
    const areatoTwoDecimalPlaces = area.toFixed(2);
    return `The area of the parallelogram is equal to ${areatoTwoDecimalPlaces}`;
};

//Run the method
areaOfParallelogram(10, 40);

