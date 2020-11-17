import React, { useState } from 'react'
import UnitPerName from './Units/UnitPerName';

function Unit(props){

    return(
    <div style={{border:'solid',padding:'5px'}}>
       <UnitPerName name={props.name}/>
        <br/>
       <button onClick={()=>props.dispatch({type:'decrease',index:props.index, armyIndex:props.armyIndex})}>-</button>
       {props.numberUnits}
       <button onClick={()=>props.dispatch({type:'increase',index:props.index, armyIndex:props.armyIndex})}>+</button>
       <br/>
       <button onClick={()=>props.dispatch({type:'removeUnit', index:props.index, armyIndex:props.armyIndex})}>Del</button>
    </div>)
}

export default Unit;