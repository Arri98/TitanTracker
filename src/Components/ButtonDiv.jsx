import React from 'react';
import PropTypes from 'prop-types';

function ButtonDiv(props) {
  const { dispatch, index, armyIndex } = props;
  return (
    <div>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Centauro', Num: 1, index }, index: armyIndex }); }}>Centaruo</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Gargola', Num: 1, index }, index: armyIndex }); }}>Gárgola</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Troll', Num: 1, index }, index: armyIndex }); }}>Troll</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Titan', Num: 1, index }, index: armyIndex }); }}>Titán</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Angel', Num: 1, index }, index: armyIndex }); }}>Angel</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Leon', Num: 1, index }, index: armyIndex }); }}>León</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Ranger', Num: 1, index }, index: armyIndex }); }}>Ranger</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Ciclope', Num: 1, index }, index: armyIndex }); }}>Cíclope</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Ogro', Num: 1, index }, index: armyIndex }); }}>Ogro</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Minotauro', Num: 1, index }, index: armyIndex }); }}>Minotauro</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Warbear', Num: 1, index }, index: armyIndex }); }}>Warbear</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Gorgona', Num: 1, index }, index: armyIndex }); }}>Gorgona</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Behemot', Num: 1, index }, index: armyIndex }); }}>Behemot</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Dragon', Num: 1, index }, index: armyIndex }); }}>Dragon</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Gigante', Num: 1, index }, index: armyIndex }); }}>Gigante</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Hydra', Num: 1, index }, index: armyIndex }); }}>Hydra</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Serpiente', Num: 1, index }, index: armyIndex }); }}>Serpiente</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Unicornio', Num: 1, index }, index: armyIndex }); }}>Unicornio</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Arcangel', Num: 1, index }, index: armyIndex }); }}>Arcangel</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Wyvern', Num: 1, index }, index: armyIndex }); }}>Wyvern</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Warlock', Num: 1, index }, index: armyIndex }); }}>Warlock</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Guardian', Num: 1, index }, index: armyIndex }); }}>Guardian</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Coloso', Num: 1, index }, index: armyIndex }); }}>Coloso</button>
      <button type="button" onClick={() => { dispatch({ type: 'addUnit', unit: { Name: 'Griffo', Num: 1, index }, index: armyIndex }); }}>Griffo</button>

    </div>
  );
}

export default ButtonDiv;

ButtonDiv.propTypes = {
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  armyIndex: PropTypes.number.isRequired,
};
