import React from 'react'
import { InputFieldComponent, InputFieldOuttestWrapper, ConfirmButtonComponent } from './styled'

type EventHandler = {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (evt: React.MouseEvent<HTMLElement>) => void
}

const InputFieldWithConfirmButton: React.FunctionComponent<
  Partial<HTMLInputElement & EventHandler>
> = props => {
  return (
 <InputFieldOuttestWrapper>
   <InputFieldComponent {...props} />
   <ConfirmButtonComponent onClick={props.onClick}>{" "}+{" "}</ConfirmButtonComponent>
 </InputFieldOuttestWrapper>

  )
}

export { InputFieldWithConfirmButton }
