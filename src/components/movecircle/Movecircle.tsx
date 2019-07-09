import React, { useRef, useLayoutEffect, useCallback } from 'react'
import { PositionRelativeDivWrapper, OutterCanvas, InnerCanvas } from './styled'

interface Props {
  width: string
  height: string
  innerCanvasColor?: string
  outterCanvasColor?: string
  passedSeconds: number
  isPaused: boolean
}

export const canvasDataTestId = 'PomodoroClock'

const lineWidth = 4  // px

const MoveCircle = ({
  outterCanvasColor = '#000000',
  width,
  height,
  passedSeconds,
  isPaused,
}: Props) => {
  const circleOffSet = 20
  const _PassedSeconds = useRef<number>(0)
  const innerCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const tomatoClockMinutes = 25
  const wholeTomatoClockMinutesProgress = 60 * tomatoClockMinutes
  const clockLoopRunFuncRef = useRef<FrameRequestCallback | null>(null)
  const requestDrawMoveGraduallyCircleFrame = useCallback(
    (ctx: CanvasRenderingContext2D, ctxWidth: number, ctxHeight: number) => (
      eTime: DOMHighResTimeStamp,
    ) => {
      ctx.clearRect(0, 0, ctxWidth, ctxHeight)
      ctx.translate(ctxWidth / 2, ctxHeight / 2)
      ctx.rotate(-Math.PI / 2)
      ctx.lineWidth = lineWidth
      // 畫會慢慢長大的弧形
      ctx.beginPath()
      ctx.arc(
        0,
        0,
        (ctxWidth + ctxHeight) / 4,
        0 * Math.PI,
        (_PassedSeconds.current / wholeTomatoClockMinutesProgress) *
          2 *
          Math.PI,
      )
      ctx.strokeStyle = outterCanvasColor
      ctx.stroke()
      ctx.fillStyle = outterCanvasColor
      ctx.lineTo(0, 0)
      ctx.closePath()
      ctx.fill()

      // 畫外圍一圈只有框的圓
      ctx.beginPath()
      ctx.arc(0, 0, (ctxWidth + ctxHeight) / 4, 0, 2 * Math.PI)
      ctx.strokeStyle = outterCanvasColor
      ctx.stroke()
      ctx.closePath()

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      clockLoopRunFuncRef.current &&
        requestAnimationFrame(clockLoopRunFuncRef.current)
    },
    [wholeTomatoClockMinutesProgress, clockLoopRunFuncRef, outterCanvasColor],
  )

  const drawPlayOrStopButton = useCallback((innerCtx: CanvasRenderingContext2D,
      ctxWidth: number,
      ctxHeight: number,
      isPaused) => {

      const playCircleRadius = (ctxWidth + ctxHeight) / 20
      innerCtx.translate(ctxWidth / 2, ctxHeight / 2)
      innerCtx.lineWidth = lineWidth
      innerCtx.beginPath()
      innerCtx.arc(0, 0, playCircleRadius, 0 , 2 * Math.PI) 
      innerCtx.strokeStyle = isPaused ? '#FFFFFF' : '#FF4384'
      innerCtx.stroke()
      innerCtx.fillStyle = isPaused ? '#FFFFFF' : '#FF4384'
      innerCtx.fill()
      innerCtx.closePath()

      // isPaused => 畫一個三角形播放鍵, !isPaused => 畫兩條直線代表暫停

      innerCtx.setTransform(1, 0, 0, 1, 0, 0)

  }, [isPaused])

  const drawInnerCircle = useCallback(
    (
      innerCtx: CanvasRenderingContext2D,
      ctxWidth: number,
      ctxHeight: number,
      isPaused,
    ) => {
      innerCtx.translate(ctxWidth / 2, ctxHeight / 2)
      innerCtx.lineWidth = lineWidth
      innerCtx.beginPath()
      innerCtx.arc(0, 0, (ctxWidth + ctxHeight) / 4 - (circleOffSet * 1.5), 0, 2 * Math.PI)
      innerCtx.strokeStyle = isPaused ? '#FFFFFF' : '#FF4384'
      innerCtx.stroke()
      innerCtx.fillStyle = isPaused ? '#FF4384' : '#FFFFFF'
      innerCtx.fill()
      innerCtx.closePath()
      innerCtx.setTransform(1, 0, 0, 1, 0, 0)

      drawPlayOrStopButton(innerCtx,
        ctxWidth,
        ctxHeight,
        isPaused,)
    },
    [],
  )

  useLayoutEffect(() => {
    if (canvasRef.current) {
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
    }
  }, [canvasRef, requestDrawMoveGraduallyCircleFrame])

  // 畫中間的圓 只在denpendencies change時 才畫  不會使用requestAnimationFrame 一直畫
  useLayoutEffect(() => {
    if (innerCanvasRef.current) {
      const innerCtx = innerCanvasRef.current.getContext('2d')
      const innerCanvasWidth = innerCanvasRef.current.offsetWidth
      const innerCanvasHeight = innerCanvasRef.current.offsetHeight
      innerCanvasRef.current.width = innerCanvasWidth
      innerCanvasRef.current.height = innerCanvasHeight

      drawInnerCircle(
        innerCtx as CanvasRenderingContext2D,
        innerCanvasWidth,
        innerCanvasHeight,
        isPaused,
      )
    }
  }, [innerCanvasRef, drawInnerCircle, isPaused])

  _PassedSeconds.current = passedSeconds

  return (
    <PositionRelativeDivWrapper>
      <h4>move circle</h4>
      <OutterCanvas ref={canvasRef} width={width} height={height} data-testid={canvasDataTestId}/>
      <InnerCanvas ref={innerCanvasRef} width={width} height={height} data-testid={canvasDataTestId}/>
    </PositionRelativeDivWrapper>
  )
}

export default MoveCircle
