import React, { useRef, useLayoutEffect, useCallback, useMemo } from 'react'
import { PositionRelativeDivWrapper, OutterCanvas, InnerCanvas } from './styled'

interface Props {
  width: string
  height: string
  innerCanvasColor?: string
  outterCanvasColor?: string
}

const MoveCircle = ({
  outterCanvasColor = '#000000',
  width,
  height,
}: Props) => {
  const memo = useMemo(() => ({ nowProgress: 0 }), [])
  const innerCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const tomatoClockMinutes = 25
  const wholeTomatoClockMinutesProgress = 60 * 60 * tomatoClockMinutes
  const clockLoopRunFuncRef = useRef<FrameRequestCallback | null>(null)
  const requestDrawMoveGraduallyCircleFrame = useCallback(
    (ctx: CanvasRenderingContext2D, ctxWidth: number, ctxHeight: number) => (
      eTime: DOMHighResTimeStamp,
    ) => {
      ctx.clearRect(0, 0, ctxWidth, ctxHeight)
      ctx.translate(ctxWidth / 2, ctxHeight / 2)
      ctx.rotate(-Math.PI / 2)
      ctx.beginPath()

      ctx.arc(
        0,
        0,
        (ctxWidth + ctxHeight) / 4,
        0 * Math.PI,
        (memo.nowProgress / wholeTomatoClockMinutesProgress) * 2 * Math.PI,
      )
      ctx.strokeStyle = outterCanvasColor
      ctx.stroke()
      ctx.fillStyle = outterCanvasColor
      ctx.lineTo(0, 0)
      ctx.closePath()
      ctx.fill()
      memo.nowProgress += 1
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      clockLoopRunFuncRef.current &&
        requestAnimationFrame(clockLoopRunFuncRef.current)
    },
    [wholeTomatoClockMinutesProgress, clockLoopRunFuncRef, outterCanvasColor],
  )

  const drawInnerCircle = useCallback(
    (
      innerCtx: CanvasRenderingContext2D,
      ctxWidth: number,
      ctxHeight: number,
    ) => {
      innerCtx.translate(ctxWidth / 2, ctxHeight / 2)
      innerCtx.beginPath()
      innerCtx.arc(0, 0, (ctxWidth + ctxHeight) / 4 - 30, 0, 2 * Math.PI)
      innerCtx.strokeStyle = '#FFFFFF'
      innerCtx.stroke()
      innerCtx.fillStyle = '#FFFFFF'
      innerCtx.closePath()
      innerCtx.fill()
    },
    [],
  )

  useLayoutEffect(() => {
    if (canvasRef.current && innerCanvasRef.current) {
      const canvas1Width = canvasRef.current.offsetWidth
      const canvas1Height = canvasRef.current.offsetHeight

      canvasRef.current.width = canvas1Width
      canvasRef.current.height = canvas1Height
      const ctx = canvasRef.current.getContext('2d')
      const ctxWidth = canvasRef.current.width
      const ctxHeight = canvasRef.current.height
      clockLoopRunFuncRef.current = requestDrawMoveGraduallyCircleFrame(
        ctx as CanvasRenderingContext2D,
        ctxWidth,
        ctxHeight,
      )
      clockLoopRunFuncRef.current(Date.now())

      const innerCtx = innerCanvasRef.current.getContext('2d')
      const innerCanvasWidth = innerCanvasRef.current.offsetWidth
      const innerCanvasHeight = innerCanvasRef.current.offsetHeight
      innerCanvasRef.current.width = innerCanvasWidth
      innerCanvasRef.current.height = innerCanvasHeight

      drawInnerCircle(
        innerCtx as CanvasRenderingContext2D,
        innerCanvasWidth,
        innerCanvasHeight,
      )
    }
  }, [canvasRef, requestDrawMoveGraduallyCircleFrame, drawInnerCircle])

  return (
    <PositionRelativeDivWrapper>
      <h4>move circle</h4>
      <OutterCanvas ref={canvasRef} width={width} height={height} />
      <InnerCanvas ref={innerCanvasRef} width={width} height={height} />
    </PositionRelativeDivWrapper>
  )
}

export default MoveCircle
