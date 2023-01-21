import styled from '@emotion/styled'
import { AccountCircleOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'

const Container= styled.div`
position:sticky;
top:0px;
background-color: ${({theme})=>theme.bgLighter};
height: 56px;
`

const Wrapper= styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
position: relative;
height:100%;
padding: 0px 20px;
`
const Search= styled.div` 
width: 40%;
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
left: 0px;
right: 0px;
margin: auto;
padding: 5px;
border-radius: 3px;
border: 1px solid #ccc;
`
const Input= styled.input`
 border: none;
 background-color: transparent;
 outline: none;
 color:${({theme})=>theme.text};
`

const Button= styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlined/>
        </Search>
        <Button>
          <AccountCircleOutlined/>
          SIGN IN</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
