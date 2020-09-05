import React, { useRef, useEffect, useState } from 'react';

export default function Canvas(props) {
  
  const canvasRef = useRef(null);
  const [canvasState, setCanvasState] = useState({
    clicks: 0,
    enters: 0,
    leaves: 0,
    downs: 0,
    ups: 0,
    overs: 0
  })

  const handleCanvasClick = e => {
    console.log('click')
    const clicks = canvasState.clicks + 1;
    setCanvasState({...canvasState, clicks})
    console.log(canvasState)
    // console.log(e)
  }
  
  const handleMouseEnter = e => {
    console.log('enter')
    console.log(e)
  }
  
  const handleMouseLeave = e => {
    console.log('leave')
    console.log(e)
  }
  
  const handleMouseDown = e => {
    console.log('down')
    console.log(e)
  }
  
  const handleMouseUp = e => {
    console.log('up')
    console.log(e)
  }
  
  const handleMouseOver = e => {
    console.log('over')
    console.log(e)
  }

  const draw = ctx => {
    ctx.fillStyle = '#000000'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    draw(ctx)
  }, [draw]);

  return (
    <canvas 
      ref={ canvasRef } 
      onClick={ handleCanvasClick }
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }
      onMouseDown={ handleMouseDown }
      onMouseUp={ handleMouseUp }
      onMouseOver={ handleMouseOver }
      {...props} 
    />
  )
}