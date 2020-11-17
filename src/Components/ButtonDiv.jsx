import React, { useState, useEffect } from 'react'
import Unit from './Unit'

function ButtonDiv(props){
    return(<div>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Centauro',Num:1, index:props.index}, index:props.armyIndex})}}>Centaruo</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Gargola',Num:1, index:props.index },index:props.armyIndex })}}>Gárgola</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Troll',Num:1, index:props.index },index:props.armyIndex })}}>Troll</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Titan',Num:1, index:props.index },index:props.armyIndex })}}>Titán</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Angel',Num:1, index:props.index },index:props.armyIndex })}}>Angel</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Leon',Num:1, index:props.index },index:props.armyIndex })}}>León</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Ranger',Num:1, index:props.index },index:props.armyIndex })}}>Ranger</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Ciclope',Num:1, index:props.index },index:props.armyIndex })}}>Cíclope</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Ogro',Num:1, index:props.index },index:props.armyIndex })}}>Ogro</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Minotauro',Num:1, index:props.index },index:props.armyIndex })}}>Minotauro</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Warbear',Num:1, index:props.index },index:props.armyIndex })}}>Warbear</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Gorgona',Num:1, index:props.index },index:props.armyIndex })}}>Gorgona</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Behemot',Num:1, index:props.index },index:props.armyIndex })}}>Behemot</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Dragon',Num:1, index:props.index },index:props.armyIndex })}}>Dragon</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Gigante',Num:1, index:props.index },index:props.armyIndex })}}>Gigante</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Hydra',Num:1, index:props.index },index:props.armyIndex })}}>Hydra</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Serpiente',Num:1, index:props.index },index:props.armyIndex })}}>Serpiente</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Unicornio',Num:1, index:props.index },index:props.armyIndex })}}>Unicornio</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Arcangel',Num:1, index:props.index },index:props.armyIndex })}}>Arcangel</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Wyvern',Num:1, index:props.index },index:props.armyIndex })}}>Wyvern</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Warlock',Num:1, index:props.index },index:props.armyIndex })}}>Warlock</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Guardian',Num:1, index:props.index },index:props.armyIndex })}}>Guardian</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Coloso',Num:1, index:props.index },index:props.armyIndex })}}>Coloso</button>
        <button onClick={()=>{props.dispatch({ type: 'addUnit', unit:{Name:'Griffo',Num:1, index:props.index },index:props.armyIndex })}}>Griffo</button>





    </div>);
}
    

export default ButtonDiv;