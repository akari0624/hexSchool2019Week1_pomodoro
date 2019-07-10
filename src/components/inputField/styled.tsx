import React from 'react'
import Styled, { ThemedStyledInterface } from 'styled-components'

const InputField = Styled.input`
  width: 100%
  padding: 19px 16px 18px 16px;
  color: ${props => (props.theme.inputTextColor)};
  text-align: left;
  font-size: 16px;
  font-famili: Roboto, Bold Italic
  line-height: 19px;
  ::placeholder {color: ${props => props.theme.inputTextColor};}
`

const InputFieldWrapper = Styled.div`
  width: 445px
  height: 19px;
  @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 80%;
    margin: 10px auto;
  }
`

const InputFieldOuttestWrapper = Styled.div`
  width: 445px;
  heightl 56px;
  background-color: #FFFFFF;
`

const InputFieldComponent = (props: any) => (
  <>
    <InputFieldOuttestWrapper>
      <InputFieldWrapper>
        <InputField {...props} />
      </InputFieldWrapper>
    </InputFieldOuttestWrapper>
  </>
)

export { InputFieldComponent as default }
