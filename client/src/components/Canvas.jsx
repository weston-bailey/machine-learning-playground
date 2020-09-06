import React, { useRef, useEffect, useState } from 'react';

export default function Canvas(props) {
  
  // canvas element
  const canvasRef = useRef(null);

  const [canvasState, setCanvasState] = useState({
    hoverPos: [[0, 0,], [0, 0]], // [[prevX, prevY], [x, y]]
    dragging: false,
    imageUrl: new Image(),
    // these should be props in the future
    width: 400,
    height: 400,
    bgColor: '#000000',
    strokeStyle: '#FFFFFF',
  });

  // setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = canvasState.bgColor;
    // TODO set w/h relative to parent element
    canvas.width = canvasState.width;
    canvas.height = canvasState.height;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // called by canvas event listeners 
    canvas.onmousemove = e => handleHover(e); 
    // canvas.onmousedown = e => handleMouseDown(e);
    // canvas.onmouseup = e => handleMouseUp(e);
    // call the main draw method
    // draw(ctx, canvas)
  }, []);
  
  const handleHover = e => {
    console.log(canvasState.dragging)
    if (canvasState.dragging) { 
      draw()
    }
    canvasState.hoverPos.shift()
    canvasState.hoverPos.push([e.offsetX, e.offsetY])
    setCanvasState({ ...canvasState })
  }
  
  const handleMouseMove = e => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (canvasState.dragging) { 
      draw()
    }
    
    canvasState.hoverPos.shift()
    canvasState.hoverPos.push([e.offsetX, e.offsetY])
    setCanvasState({ ...canvasState })
  }
  
  // draw method for canvas 
  const draw = () => {
    console.log('draw')
  }

  const handleMouseLeave = e => {
    // console.log('leave')
    // console.log(e)
  }
  
  const handleMouseDown = e => {
    // console.log(e.offsetX, e.offsetY)
    const dragging = true
    setCanvasState({ ...canvasState, dragging })
  }
  
  const handleMouseUp = e => {
    // console.log('up')
    setCanvasState({ ...canvasState, dragging: false })
    // console.log(e)
  }

  if(canvasState.dragging){
    console.log(canvasState.hoverPos)
  }

  return (
    <canvas 
      ref={ canvasRef } 
      onMouseDown={ handleMouseDown}
      onMouseUp={ handleMouseUp}
      // onMouseMove= { handleMouseMove }
      onMouseLeave={ handleMouseLeave }
      {...props} 
    />
  )
}