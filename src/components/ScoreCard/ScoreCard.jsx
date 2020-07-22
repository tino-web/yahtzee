import React, { useContext } from 'react';
import { Context } from '../../context/gameContext';
import ScoreSection from '../ScoreSection/ScoreSection';

function ScoreCard() {
  const { sectionScores } = useContext(Context);

  return (
    <table className='scoreTable w-100'>
      <thead>
        <tr>
          <th>UPPER SECTION</th>
          <th>HOW TO SCORE</th>
          <th>SCORE</th>
        </tr>
      </thead>
      <tbody>
        <ScoreSection section='upper' />

        <tr>
          <td />
          <td>
            <strong>BONUS score</strong>
          </td>
          <td>{sectionScores.bonus}</td>
        </tr>
        <tr>
          <td />
          <td>
            <strong>TOTAL upper section</strong>
          </td>
          <td>{sectionScores.upper}</td>
        </tr>

        <tr>
          <th colSpan='3'>LOWER SECTION</th>
        </tr>
        <ScoreSection section='lower' />

        <tr>
          <td />
          <td>
            <strong>TOTAL lower section</strong>
          </td>
          <td>{sectionScores.lower}</td>
        </tr>
        <tr>
          <td />
          <td>
            <strong>GRAND TOTAL</strong>
          </td>
          <td>{sectionScores.total}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ScoreCard;
