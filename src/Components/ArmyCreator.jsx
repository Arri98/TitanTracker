import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ArmyCreator(props) {
  const { addingArmy, dispatch, setAddingArmy } = props;

  const [title, setTitle] = useState('');
  const [state, setState] = useState(addingArmy);

  const handleChange = (event) => setTitle(event.target.value);

  useEffect(() => {
    setState(addingArmy);
  }, [addingArmy]);

  return state ? (
    <div className="Army Picker" style={{ display: { state }, marginTop: '5px' }}>
      Nombre del ejercito
      <br />
      <input type="text" style={{ margin: '5px' }} onChange={handleChange} value={title} />
      <br />
      <button type="button" onClick={() => { setAddingArmy(false); dispatch({ type: 'addArmy', army: title }); }}>Añadir</button>
      <button type="button" onClick={() => { setAddingArmy(false); }}>Cerrar</button>
    </div>
  )
    : null;
}

export default ArmyCreator;

ArmyCreator.propTypes = {
  addingArmy: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  setAddingArmy: PropTypes.func.isRequired,
};
