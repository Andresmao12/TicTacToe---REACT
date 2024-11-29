import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x : 0, y : 0 })

  useEffect(()=>{

    const handleMove = (event) =>{

      const {clientX, clientY} = event;
      setPosition({ x: clientX, y: clientY }); 
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove);
    }

    return ()=>{
      setPosition({ x : 0, y : 0 })
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enable])

  console.log(position)

  return (
    <main>
      <div style={{
        width : 40,
        height : 40,
        borderRadius : '50%',
        backgroundColor : '#15a5',
        border : '1px solid #15a',
        boxShadow : '0 0 20px #15a',

        position : 'absolute',
        top : -20,
        left : -20,

        pointerEvents : 'none',
        transform:`translate(${position.x}px, ${position.y}px)`,
      }}></div>
      <h3>Proyecto UseEffect</h3>
      <button onClick={()=> setEnable(!enable)}>{!enable ? 'Activar' : 'Desactivar'} cursor tracking</button>
    </main>
  )
}

export default App
