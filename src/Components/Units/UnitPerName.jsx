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
      return <Unit name="Angel" image={Angel} />;
    case 'Arcangel':
      return <Unit name="Arcangel" image={Archangel} />;
    case 'Titan':
      return <Unit name="Titan" image={Titan} />;
    case 'Guardian':
      return <Unit name="Guardian" image={Guardian} />;
    case 'Warlock':
      return <Unit name="Warlock" image={Warlock} />;
    case 'Behemot':
      return <Unit name="Behemot" image={Behemot} />;
    case 'Centauro':
      return <Unit name="Centauro" image={Centaur} />;
    case 'Coloso':
      return <Unit name="Coloso" image={Colossus} />;
    case 'Ciclope':
      return <Unit name="Ciclope" image={Cyclops} />;
    case 'Dragon':
      return <Unit name="Dragon" image={Dragon} />;
    case 'Gorgona':
      return <Unit name="Gorgona" image={Gorgon} />;
    case 'Gigante':
      return <Unit name="Gigante" image={Gigant} />;
    case 'Gargola':
      return <Unit name="Gargola" image={Gargoyle} />;
    case 'Griffo':
      return <Unit name="Griffo" image={Griffon} />;
    case 'Hydra':
      return <Unit name="Hydra" image={Hydra} />;
    case 'Leon':
      return <Unit name="Leon" image={Lion} />;
    case 'Ogro':
      return <Unit name="Ogro" image={Ogre} />;
    case 'Minotauro':
      return <Unit name="Minotauro" image={Minotaur} />;
    case 'Ranger':
      return <Unit name="Ranger" image={Ranger} />;
    case 'Serpiente':
      return <Unit name="Serpiente" image={Serpent} />;
    case 'Troll':
      return <Unit name="Troll" image={Troll} />;
    case 'Unicornio':
      return <Unit name="Unicornio" image={Unicorn} />;
    case 'Warbear':
      return <Unit name="Warbear" image={Warbear} />;
    case 'Wyvern':
      return <Unit name="Wyvern" image={Wyvern} />;
    default:
      return null;
  }
}

export default UnitPerName;

UnitPerName.propTypes = {
  name: PropTypes.string.isRequired,
};
