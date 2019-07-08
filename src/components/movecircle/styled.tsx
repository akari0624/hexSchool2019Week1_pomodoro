import Styled from 'styled-components'

const PositionRelativeDivWrapper = Styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const InnerCanvas = Styled.canvas`
  position: absolute;
  z-index:300;
`

const OutterCanvas = Styled.canvas`
  position: absolute;
  z-index:1;
`

export { PositionRelativeDivWrapper, InnerCanvas, OutterCanvas }
