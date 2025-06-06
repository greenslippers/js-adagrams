export const drawLetters = () => {
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

  const letterBank = []; 
  for(let letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; i++) {
      letterBank.push(letter);
    }
  };

  const lettersInHand = [];
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * letterBank.length);
    const letter = letterBank[index];
    lettersInHand.push(letter);
    letterBank.splice(index, 1);
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();
  const letterCount = {};

  for (let letter of lettersInHand) {
    if (letter in letterCount) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    };
  };

  for (let letter of word) {
    if (letter in letterCount && letterCount[letter] > 0) {
      letterCount[letter] -= 1;
    } else {
      return false;
    };
  };
  
  return true;
};

export const scoreWord = (word) => {
  if (!word) {
    return 0;
  };

  const letterPoints = {
    'A': 1, 
    'B': 3, 
    'C': 3, 
    'D': 2, 
    'E': 1,
    'F': 4, 
    'G': 2, 
    'H': 4, 
    'I': 1, 
    'J': 8,
    'K': 5, 
    'L': 1, 
    'M': 3, 
    'N': 1, 
    'O': 1,
    'P': 3, 
    'Q': 10, 
    'R': 1, 
    'S': 1, 
    'T': 1,
    'U': 1, 
    'V': 4, 
    'W': 4, 
    'X': 8, 
    'Y': 4, 
    'Z': 10,
    };
  
  let wordScore = 0;
  const upperWord = word.toUpperCase();

  for (let letter of upperWord) {
    wordScore += letterPoints[letter] || 0;  
  }

  if (upperWord.length >= 7 && upperWord.length <= 10) {
    wordScore += 8;
  }
  
  return wordScore;
};

export const highestScoreFrom = (words) => {
  let bestWord = '';
  let highestScore = 0;

  for (let word of words) {
    const currentScore = scoreWord(word);

    if (currentScore > highestScore) {
      bestWord = word;
      highestScore = currentScore;
    } else if (currentScore === highestScore) {
      const isNewWordTen = word.length === 10 && bestWord.length !== 10;
      const isNewWordShorter = word.length < bestWord.length && bestWord.length !== 10;

      if (isNewWordTen || isNewWordShorter) {
        bestWord = word;
      };
    };
  };

  return { word: bestWord, score: highestScore };
};
