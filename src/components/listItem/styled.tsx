import React from 'react'
import Styled, { ThemedStyledInterface } from 'styled-components'

const normalScreenWidth = '445px'
const functionalBtnWidth = '45px'
const WrapperHeight = '32px'

const ListItemWrapper = Styled.article`
  display: flex;
  width: ${normalScreenWidth};
  height: ${WrapperHeight};
  border-bottom: 1px solid #DCD3E3;
  margin-bottom: 9px;

  @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 100%;
  }
`

const ListItemIsDoneChecker = Styled.div`
  width: ${functionalBtnWidth};
  line-height: ${WrapperHeight};
  height: ${WrapperHeight};
  text-align: center;

   @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 10%;
  }
  & > i {
    line-height: ${WrapperHeight};
    height: ${WrapperHeight};
    text-align: center;
    cursor: pointer;
  }
`

const ListContentArea = Styled.div`
  line-height: ${WrapperHeight};
  height: ${WrapperHeight};
  width: calc(${normalScreenWidth} - ${functionalBtnWidth} * 2);
  text-align: left;

   @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 80%;
  }
`

const ListItemPlayBtn = Styled.div`
  width: ${functionalBtnWidth};
  line-height: ${WrapperHeight};
  height: ${WrapperHeight};

   @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 10%;
  }

  & > i {
    line-height: ${WrapperHeight};
    height: ${WrapperHeight};
    text-align: center;
    cursor: pointer;
  }
`

export { ListItemWrapper, ListItemIsDoneChecker, ListContentArea, ListItemPlayBtn  } 
