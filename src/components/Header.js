import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  top: 0;
  display: grid;
  background: white;
  border-bottom: 3px solid black;
  font-size: 1em;
  justify-content: center;
  background: ${(props) => props.theme.colors.darkBlue};
  color: white;
`

export default function StyledHeader() {
  return (
    <StyledDiv>
      Centered text goes here with darker background colour and maybe two layers of text
    </StyledDiv>
  )
}
