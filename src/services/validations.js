// TODO: Add here the function to validate

module.exports.checkCaracters = (caracters) => {
    
  
    const regex = /[^A-Z]|/g;
    const found = caracters.match(regex);
    console.log(found);
    if (found === null || found.length === 0) return true;
    else return false;
};


const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
