import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import defaultScores from '../data/defaultScores';
import yahtzeeFile from '../assets/sounds/yahtzee.wav';
import dicerollFile from '../assets/sounds/diceroll.wav';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [turnsLeft, setTurnsLeft] = useState(3);
  const [roundsLeft, setRoundsLeft] = useState(13);

  const [roundEnded, setRoundEnded] = useState(false);
  const [roundStarted, setRoundStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [yahtzeeRolled, setYahtzeeRolled] = useState(false);

  const [diceValues, setDiceValues] = useState([0, 0, 0, 0, 0]);
  const [lockedDices, setLockedDices] = useState([false, false, false, false, false]);
  const [sectionScores, setSectionScores] = useState({
    upper: 0,
    bonus: 0,
    lower: 0,
    total: 0,
  });

  const [scores, setScores] = useState(defaultScores);
  const [volume, setVolume] = useState(0.2);

  const yahtzeeSound = new Audio(yahtzeeFile);
  const dicerollSound = new Audio(dicerollFile);

  function cheater(arr) {
    setDiceValues(arr);
  }

  useEffect(() => {
    yahtzeeSound.volume = volume;
    dicerollSound.volume = volume;
  }, [volume, yahtzeeSound, dicerollSound]);

  function rollDices() {
    if (!roundEnded && !lockedDices.every((item) => item === true)) {
      dicerollSound.play();
      setDiceValues((prevValues) => {
        const newValues = prevValues.map((x, index) => {
          if (!lockedDices[index]) {
            const randNum = Math.ceil(Math.random() * 6);
            return randNum;
          }
          return x;
        });
        setTurnsLeft((prevValue) => prevValue - 1);
        return newValues;
      });
    }
  }

  useEffect(() => {
    const base = diceValues[0];
    if (diceValues.every((element) => element === base) && base !== 0) {
      yahtzeeSound.play();
      setYahtzeeRolled(true);
      setTimeout(() => {
        setYahtzeeRolled(false);
      }, 3000);
    }
    // eslint-disable-next-line
  },[diceValues])

  useEffect(() => {
    if (turnsLeft === 2) {
      setRoundStarted(true);
    }
    if (turnsLeft === 0) {
      setRoundEnded(true);
      setLockedDices([false, false, false, false, false]);
    }
  }, [turnsLeft]);

  useEffect(() => {
    let upperScore = 0;
    let lowerScore = 0;
    let bonusScore = 0;

    scores.forEach((element) => {
      if (element.section === 'upper') {
        upperScore += element.score;
      } else if (element.section === 'lower') {
        lowerScore += element.score;
      }
    });

    const bonusRows = scores.filter((item) => item.section === 'upper' && (item.score / Number(item.id)) >= 3);
    if (bonusRows.length === 6) {
      bonusScore = 35;
    }

    const totalScore = upperScore + lowerScore;

    setSectionScores({
      upper: upperScore,
      bonus: bonusScore,
      lower: lowerScore,
      total: totalScore,
    });
  }, [scores]);

  useEffect(() => {
    if (roundsLeft === 0) {
      setGameEnded(true);
    }
  }, [roundsLeft]);

  function reset(type) {
    setRoundsLeft((prevRound) => prevRound - 1);
    setTurnsLeft(3);
    setDiceValues([0, 0, 0, 0, 0]);
    setLockedDices([false, false, false, false, false]);
    setRoundStarted(false);
    setRoundEnded(false);

    if (type === 'game') {
      setScores(defaultScores);
      setGameEnded(false);
      setRoundsLeft(13);
    }
  }

  function calcScores(id) {
    // Setup array with occurence of values
    const countObject = {};

    diceValues.forEach((item) => {
      countObject[item] = (countObject[item] || 0) + 1;
    });
    const valueArray = Object.values(countObject);

    // Setup array with unique values
    const keyArray = [...new Set(diceValues)];
    keyArray.sort();

    // Sum of dices
    const sumDices = diceValues.reduce((a, b) => a + b, 0);

    switch (id) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      return countObject[Number(id)] * Number(id);

    case 'threeofakind':
      if (valueArray[0] >= 3 || valueArray[1] >= 3 || valueArray[2] >= 3) {
        return sumDices;
      }
      break;

    case 'fourofakind':
      if (valueArray[0] >= 4 || valueArray[1] >= 4) {
        return sumDices;
      }
      break;

    case 'fullhouse':
      if ((valueArray[0] === 2 && valueArray[1] === 3)
        || (valueArray[1] === 2 && valueArray[0] === 3)) {
        return 25;
      }
      break;

    case 'smallstr':
      if (keyArray[3] - keyArray[0] === 3 || keyArray[4] - keyArray[1] === 3) {
        return 30;
      }
      break;

    case 'largestr':
      if (keyArray[4] - keyArray[0] === 4 || keyArray[5] - keyArray[1] === 4) {
        return 40;
      }
      break;

    case 'yahtzee':
      if (valueArray[0] === 5 && keyArray[0] !== 0) {
        return 50;
      }
      break;

    case 'yahtzeebonus':
      if (scores.find((item) => item.id === 'yahtzee' && item.score === 50)) {
        if (valueArray[0] === 5 && keyArray[0] !== 0) {
          return 100;
        }
      }
      break;

    case 'chance':
      return sumDices;

    default:
      return null;
    }

    return 0;
  }

  function lockToggle(diceId) {
    setLockedDices((prevValues) => {
      const newValues = [...prevValues];
      newValues[diceId] = !prevValues[diceId];
      return newValues;
    });
  }

  function takeScore(id, points) {
    setScores((prevValues) => {
      const newValues = prevValues.map((item) => {
        if (item.id === id && !item.locked) {
          return {
            ...item,
            score: points,
            locked: true,
          };
        }
        if (item.id === 'yahtzeebonus' && calcScores('yahtzeebonus')) {
          return {
            ...item,
            score: item.score + 100,
          };
        }
        return item;
      });
      return newValues;
    });
    reset();
  }

  return (
    <Context.Provider value={{
      rollDices,
      diceValues,
      lockToggle,
      lockedDices,
      scores,
      calcScores,
      takeScore,
      reset,
      turnsLeft,
      roundsLeft,
      roundEnded,
      roundStarted,
      gameEnded,
      sectionScores,
      cheater,
      yahtzeeRolled,
      volume,
      setVolume,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };

ContextProvider.propTypes = { children: PropTypes.node.isRequired };
