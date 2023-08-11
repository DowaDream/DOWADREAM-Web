import { useEffect, useState } from 'react';
import { Wrapper } from '../styles/Common';
import React from 'react';
import styled from 'styled-components';

const MyVolunteerNavbar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    
    <Wrapper>
      <Container40>
        <Category
          style={selectedCategory === 'myvolunteer' ? { backgroundColor: '#FFE34F' } : {}}
          onClick={() => handleCategoryClick('myvolunteer')}
        >
          내가 한 봉사
        </Category>
        <Category
          style={selectedCategory === 'myscrap' ? { backgroundColor: '#FFE34F' } : {}}
          onClick={() => handleCategoryClick('myscrap')}
        >
          스크랩한 봉사
        </Category>
        </Container40>
    </Wrapper>
  )
}

export default MyVolunteerNavbar;
const Container40 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
padding: 0px;
width: 100%;
height: 69px;
border-bottom: 2px solid #A0A0A0;
`;

const Category = styled.button`

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
height: 69px;
flex-grow: 1;
/* Gray Color */
border-width: 2px 0px;
border-style: solid;
border-color: #A0A0A0;
background-color: white;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
width: 50%;
color: #A0A0A0;
&:hover {
  cursor: pointer;
  color: #024959;
  font-weight: 700;
}
`;