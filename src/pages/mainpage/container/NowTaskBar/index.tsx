import React from 'react'
import { MainTaskBaWrapper, ToggleDoneCirclieWrapper, LeftWrapper, TodoDescWrapper, TomatoCountWrapper } from './styled'

export default function NowTaskBar() {
  return( 
  <MainTaskBaWrapper>
   <ToggleDoneCirclieWrapper><i className="material-icons">panorama_fish_eye</i></ToggleDoneCirclieWrapper>
   <LeftWrapper>
     <TodoDescWrapper>fake content</TodoDescWrapper>
     <TomatoCountWrapper>123 123</TomatoCountWrapper>
   </LeftWrapper>
  </MainTaskBaWrapper>
  )
}
