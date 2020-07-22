import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../context/gameContext';
import ScoreCell from '../ScoreCell/ScoreCell';

function ScoreTable({ section }) {
  const { scores } = useContext(Context);

  const sectionRows = scores.filter((item) => item.section === section);
  const rowElements = sectionRows.map((item) => (
    <tr key={item.id}>
      <td>
        <strong>{item.name}</strong>
      </td>
      <td className='smaller'>
        {item.points}
      </td>
      <ScoreCell item={item} />
    </tr>
  ));

  return <>{rowElements}</>;
}

export default ScoreTable;

ScoreTable.propTypes = { section: PropTypes.string.isRequired };
