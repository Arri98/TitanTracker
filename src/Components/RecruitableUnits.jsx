/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import UnitPerName from './Units/UnitPerName';
import TileByName from './TileByName';

const RecruitableUnits = (props) => {
  const { units } = props;
  if (units !== 0) {
    return (
      <>
        {units.map((element) => (
          <div display flex>
            <UnitPerName name={element.Unidad} />
            <TileByName name={element.Casilla} />
          </div>
        ))}
      </>
    );
  }
  return null;
};

export default RecruitableUnits;

RecruitableUnits.propTypes = {
  units: PropTypes.array.isRequired,
};
