import React from 'react'
import Styled from 'styled-components'
import {
  ListItemWrapper,
  ListItemIsDoneChecker,
  ListContentArea,
  ListItemPlayBtn,
} from './styled'

const ListItemComponent = (props: any) => {
  return (
    <ListItemWrapper>
      <ListItemIsDoneChecker>
        <i className="material-icons">panorama_fish_eye</i>
      </ListItemIsDoneChecker>
      <ListContentArea>{props.children}</ListContentArea>
      <ListItemPlayBtn>
        <i className="material-icons">play_circle_outline</i>
      </ListItemPlayBtn>
    </ListItemWrapper>
  )
}

export { ListItemComponent as ListItem }
