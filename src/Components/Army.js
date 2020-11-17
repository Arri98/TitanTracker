import React, { useState, useReducer } from 'react'
import UnitPicker from './UnitPicker';
import Unit from './Unit'

function Army(props){
    const [addingUnit,setAddingUnit] = useState(false);

    return(
    <div style={{border:'solid',paddingBottom:'5px',display:"flex",flexDirection:'column',alignItems:'center'}}>
       <h3>{props.title}</h3>
       <br/>
       <div style={{display:'flex'}}>
            {
                 props.units.map((element,index)=>{return <Unit key={index} index={index} name={element.Name} numberUnits={element.Num} armyIndex={props.index} dispatch={props.dispatch}/>})
            }
       </div>
       <button onClick={()=>setAddingUnit(true)}> Añadir unidad </button>
       <UnitPicker addingUnit={addingUnit} armyIndex={props.index} setAddingUnit={setAddingUnit} index={props.units.length} dispatch={props.dispatch}/>
     <button onClick={()=>props.dispatch({type:'removeArmy', index:props.index})}>Del</button>
    </div>)
}

export default Army;