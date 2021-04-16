import React from 'react';
import PropTypes from 'prop-types';
import Unit from './Unit';
import Angel from '../../images/Angel.gif';
import Archangel from '../../images/Archangel.gif';
import Titan from '../../images/Titan.gif';
import Guardian from '../../images/Guardian.gif';
import Warlock from '../../images/Warlock.gif';
import Behemot from '../../images/Behemoth.gif';
import Centaur from '../../images/Centaur.gif';
import Colossus from '../../images/Colossus.gif';
import Cyclops from '../../images/Cyclops.gif';
import Dragon from '../../images/Dragon.gif';
import Gorgon from '../../images/Gorgon.gif';
import Gigant from '../../images/Giant.gif';
import Gargoyle from '../../images/Gargoyle.gif';
import Griffon from '../../images/Griffon.gif';
import Hydra from '../../images/Hydra.gif';
import Lion from '../../images/Lion.gif';
import Ogre from '../../images/Ogre.gif';
import Minotaur from '../../images/Minotaur.gif';
import Ranger from '../../images/Ranger.gif';
import Serpent from '../../images/Serpent.gif';
import Troll from '../../images/Troll.gif';
import Unicorn from '../../images/Unicorn.gif';
import Warbear from '../../images/Warbear.gif';
import Wyvern from '../../images/Wyvern.gif';

function UnitPerName(props) {
  const { name } = props;

  switch (name) {
    case 'Angel':
      return <Unit name="Angel" image={Angel} attack={6} defense={4} doesFly={true} hasRange={false}/>;
    case 'Arcangel':
      return <Unit name="Arcangel" image={Archangel} attack={9} defense={4} doesFly={true} hasRange={false}/>;
    case 'Titan':
      return <Unit name="Titan" image={Titan} attack={X} defense={4} doesFly={false} hasRange={false} />;
    case 'Guardian':
      return <Unit name="Guardian" image={Guardian} attack={6} defense={4} doesFly={false} hasRange={false} />;
    case 'Warlock':
      return <Unit name="Warlock" image={Warlock} attack={5} defense={4} doesFly={false} hasRange={true} />;
    case 'Behemot':
      return <Unit name="Behemot" image={Behemot} attack={8} defense={3} doesFly={false} hasRange={false}/>;
    case 'Centauro':
      return <Unit name="Centauro" image={Centaur} attack={3} defense={4} doesFly={false} hasRange={false}/>;
    case 'Coloso':
      return <Unit name="Coloso" image={Colossus} attack={10} defense={4} doesFly={false} hasRange={false}/>;
    case 'Ciclope':
      return <Unit name="Ciclope" image={Cyclops} attack={9} defense={2} doesFly={false} hasRange={false}/>;
    case 'Dragon':
      return <Unit name="Dragon" image={Dragon} attack={9} defense={3} doesFly={true} hasRange={true}/>;
    case 'Gorgona':
      return <Unit name="Gorgona" image={Gorgon} attack={6} defense={3} doesFly={true} hasRange={true}/>;
    case 'Gigante':
      return <Unit name="Gigante" image={Gigant} attack={7} defense={4} doesFly={false} hasRange={true}/>;
    case 'Gargola':
      return <Unit name="Gargola" image={Gargoyle} attack={4} defense={3} doesFly={true} hasRange={false}/>;
    case 'Griffo':
      return <Unit name="Griffo" image={Griffon} attack={5} defense={4} doesFly={true} hasRange={false}/>;
    case 'Hydra':
      return <Unit name="Hydra" image={Hydra} attack={10} defense={3} doesFly={true} hasRange={false}/>;
    case 'Leon':
      return <Unit name="Leon" image={Lion} attack={5} defense={3} doesFly={false} hasRange={false}/>;
    case 'Ogro':
      return <Unit name="Ogro" image={Ogre} attack={6} defense={2} doesFly={false} hasRange={false}/>;
    case 'Minotauro':
      return <Unit name="Minotauro" image={Minotaur} attack={4} defense={4} doesFly={false} hasRange={true}/>;
    case 'Ranger':
      return <Unit name="Ranger" image={Ranger} attack={4} defense={4} doesFly={false} hasRange={true}/>;
    case 'Serpiente':
      return <Unit name="Serpiente" image={Serpent} attack={18} defense={2} doesFly={false} hasRange={false}/>;
    case 'Troll':
      return <Unit name="Troll" image={Troll} attack={8} defense={2} doesFly={false} hasRange={false}/>;
    case 'Unicornio':
      return <Unit name="Unicornio" image={Unicorn} attack={6} defense={4} doesFly={false} hasRange={false}/>;
    case 'Warbear': 
      return <Unit name="Warbear" image={Warbear} attack={6} defense={3} doesFly={false} hasRange={false}/>;
    case 'Wyvern':
      return <Unit name="Wyvern" image={Wyvern} attack={7} defense={3} doesFly={false} hasRange={true}/>;
    default:
      return null;
  }
}

export default UnitPerName;

UnitPerName.propTypes = {
  name: PropTypes.string.isRequired,
};
