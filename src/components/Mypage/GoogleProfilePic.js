import React from 'react'
import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components';
import pic from '../../프로필.jpg';

const GoogleProfilePic = (props) => {
    const { size, url=pic } = props;
  
    return (
      <BackgroundProfile size={size} pic={url}></BackgroundProfile>
    )
  }

export default GoogleProfilePic;
const BackgroundProfile = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  background: url(${props=> props.pic});
  background-size: cover; /* 이미지를 컨테이너에 맞게 늘립니다 */
  background-position: center; /* 이미지를 중앙으로 정렬합니다 */ 
  border-radius: 50%;
`;