export const capitalize = string => string[0].toUpperCase() + string.slice(1);

//I read that in Star Wars we have now 35 ABY
export const calculateAge = string => {
  if (string === 'unknown') return 'unknown';
  if (string.includes('BBY')) {
    const year = parseInt(string.replace('BBY', ''));
    return 35 + year;
  } else {
    const year = parseInt(string.replace('ABY', ''));
    return 35 - year;
  }
};
