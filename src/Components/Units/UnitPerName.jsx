import React from 'react'
import { Angel,Arcangel,Titan,Guardian,Warlock,Coloso,Behemot,Ciclope,Dragon,Gargola,Gigante,Gorgona,Griffo,Hydra,Leon,Ogro,Ranger,Minotauro,Serpiente,Troll,Unicornio,Warbear,Wyvern, Centauro} from './Units';


function UnitPerName(props){
    switch(props.name){
        case 'Angel':
            return <Angel/>;
        case 'Arcangel':
            return <Arcangel/>;
        case 'Titan':
            return <Titan/>;           
        case 'Guardian':
            return <Guardian/>;
        case 'Warlock':
            return <Warlock/>;
        case 'Behemot':
            return <Behemot/>;
        case 'Centauro':
            return <Centauro/>;
        case 'Coloso':
            return <Coloso/>;
        case 'Ciclope':
            return <Ciclope/>;
        case 'Dragon':
            return <Dragon/>;
        case 'Gorgona':
            return <Gorgona/>;
        case 'Gigante':
            return <Gigante/>;
        case 'Gargola':
            return <Gargola/>;
        case 'Griffo':
            return <Griffo/>;
        case 'Hydra':
            return <Hydra/>;
        case 'Leon':
            return <Leon/>;
        case 'Ogro':
            return <Ogro/>;
        case 'Minotauro':
            return <Minotauro/>;
        case 'Ranger':
            return <Ranger/>
        case 'Serpiente':
            return <Serpiente/>;
        case 'Troll':
            return <Troll/>;
        case 'Unicornio':
            return <Unicornio/>;
        case 'Warbear':
            return <Warbear/>;
        case 'Wyvern':
            return <Wyvern/>;
        default:
            return null;
    }
}

export default UnitPerName;