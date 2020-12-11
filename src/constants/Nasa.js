import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
background-color: black;
`
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`
export default function Friend({bold,info,action}){
    return (
        <StyledNasa bold={bold} danger={info.}>
        <Background>
            <Title>Nasa Photo of The Day!</Title>
        </Background>
        </StyledNasa>
    )
}