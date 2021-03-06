import React, { useMemo, useCallback } from 'react'
import { TimeTextStyledComp } from './styled'

interface Props {
  wholeMinutes: number
  passedSeconds: number
  specialText?: string
}

export const formatToClockTimeString = (min: number, sec: number) => {
  return (min < 10 ? '0' + min : min) + ':' + (sec >= 10 ? '' + sec : '0' + sec)
}

export default function TimeText({
  wholeMinutes,
  passedSeconds,
  specialText,
}: Props) {
  const { wholeSeconds } = useMemo(
    () => ({ wholeSeconds: wholeMinutes * 60 }),
    [wholeMinutes],
  )

  const getMinAndSec = useCallback(
    (wholeSeconds: number, passSeconds: number) => {
      const remainSeconds = wholeSeconds - passSeconds

      if (remainSeconds < 0) {
        return [0, 0]
      }

      return [Math.floor(remainSeconds / 60), remainSeconds % 60]
    },
    [],
  )
  const [min, sec] = getMinAndSec(wholeSeconds, passedSeconds)
  return (
    <TimeTextStyledComp>
      {() => {
        if (specialText && specialText !== '') {
          return specialText
        }
        return formatToClockTimeString(min, sec)
      }}
    </TimeTextStyledComp>
  )
}
