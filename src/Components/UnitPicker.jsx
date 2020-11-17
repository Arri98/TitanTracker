import React, { useState, useEffect } from 'react'
import ButtonDiv from './ButtonDiv';

function UnitPicker(props){

    const [state,setState] = useState(props.addingUnit);

    useEffect(() => {
        setState(props.addingUnit);
      }, [props.addingUnit]);
    
    
    return state ?  <div className='UnitPicker' style={{display:{state}}}> 
                        Elige la unidad a añadir
                        <br/>
                        <ButtonDiv armyIndex={props.armyIndex} index = {props.index} dispatch={props.dispatch}/>
                        <br/>
                        <button onClick={()=>props.setAddingUnit(false)}>Terminar</button>
                    </div> 
                    : null;
}

export default UnitPicker;