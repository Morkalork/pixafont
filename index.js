/**
 * Pixafont will return the coordinates needed to draw a letter or a number
 * @param {string} letter The letter you want to generate in pixel form
 * @param {number} startX The start X position
 * @param {number} startY The start Y position
 * @returns {array} An array of coordinates describing the letter
 */
module.exports = (letter, startX = 0, startY = 0) => {
  if(!/[a-z0-9]/.test(letter)) {
    throw new Error('The letter must be a letter, not something un-lettery.');
  }

  if(typeof startX !== 'number' || Number.isNaN(startX)) {
    throw new Error(`X must be a number, you sent in a "${typeof startX}"`);
  }
  
  if(typeof startY !== 'number' || Number.isNaN(startY)) {
    throw new Error(`Y must be a number, you sent in a "${typeof startY}"`);
  }

  const letterArray = require(`./characters/${letter}.js`);
  return letterArray.map((letter) => [
    startX > 0 ? letter[0] * startX : letter[0], 
    startY > 0 ? letter[1] * startY : letter[1]
  ]);
}