import React from 'react'
import Styled, { ThemedStyledInterface } from 'styled-components'

const OuttestHeight = '56px'

const InputFieldOuttestWrapper = Styled.div`
  width: 445px;
  height: ${OuttestHeight};
  display: flex;
  background-color: #FFFFFF;
    @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 80%;
    margin: 10px auto;
  }
`

const InputFieldWrapper = Styled.div`
  width: 445px
  height: ${OuttestHeight};
`

const InputField = Styled.input`
  width: 100%;
  padding: 19px 16px 18px 16px;
  color: ${props => props.theme.inputTextColor};
  text-align: left;
  font-size: 16px;
  font-family: 'Roboto', Bold Italic;
  line-height: 19px;
  border: none; 
  border-width: 0; 
  box-shadow: none;
  ::placeholder {color: ${props => props.theme.inputTextColor};}
`

const confirmButtonLength = '24px'

const ConfirmButtonWrapper = Styled.div`
  width: ${confirmButtonLength};
  height: 24px;
  margin: calc( (${OuttestHeight} - ${confirmButtonLength}) / 2) 16px;
  text-align: center;
  cursor: pointer;
`

const ConfirmButton = Styled.a`
   text-decoration: none;
   line-height: ${confirmButtonLength};
   font-size: 24px;
   font-family: 'Roboto', Bold Italic;
   color: ${props => props.theme.inputTextColor};
`

const InputFieldComponent = (props: any) => (
  <InputFieldWrapper>
    <InputField {...props} />
  </InputFieldWrapper>
)

const ConfirmButtonComponent = (props: any) => (
  <ConfirmButtonWrapper>
    <ConfirmButton onClick={props.onClick}>
      {props.children}
    </ConfirmButton>
  </ConfirmButtonWrapper>
)

export { InputFieldComponent, InputFieldOuttestWrapper, ConfirmButtonComponent }
