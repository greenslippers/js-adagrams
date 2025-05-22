const letterPool = {
  'A': 9, 
  'B': 2, 
  'C': 2, 
  'D': 4, 
  'E': 12, 
  'F': 2, 
  'G': 3, 
  'H': 2, 
  'I': 9, 
  'J': 1, 
  'K': 1, 
  'L': 4, 
  'M': 2, 
  'N': 6, 
  'O': 8, 
  'P': 2, 
  'Q': 1, 
  'R': 6, 
  'S': 4, 
  'T': 6, 
  'U': 4, 
  'V': 2, 
  'W': 2, 
  'X': 1, 
  'Y': 2, 
  'Z': 1
}

export const drawLetters = () => {
  const pool = []; 
  for(let letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      pool.push(letter);
    }
  };
  
  const lettersInHand = [];
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * pool.length);
    const letter = pool[index];
    lettersInHand.push(letter);
    pool.splice(index, 1);
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  const copyLettersInHand = [...lettersInHand];

  for (let letter of word) {
    const index = copyLettersInHand.indexOf(letter);
    if (index === -1) {
      return false;
    }
    copyLettersInHand.splice(index, 1);
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
