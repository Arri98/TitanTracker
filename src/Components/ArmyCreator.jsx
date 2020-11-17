import React, { useState, useEffect } from 'react'


function Army(props){

    const [title,setTitle] = useState('');
    const [state,setState] = useState(props.addingArmy);
    
    const handleChange = (event)=> setTitle(event.target.value);  

    useEffect(() => {
        setState(props.addingArmy);
      }, [props.addingArmy]);
    
    
    return state ?  <div className='Army Picker' style={{display:{state}}}> 
                        Nombre del ejercito
                     <input type='text' onChange={handleChange} value={title}/>
                     <button onClick={()=>{props.dispatch({type:'addArmy',army:title})}}>Añadir</button>
                     <button onClick={()=>{props.setAddingArmy(false)}}>Cerrar</button>
                    </div> 
                    : null;
}


export default Army;