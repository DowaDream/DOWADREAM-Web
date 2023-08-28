import React from 'react'
import { styled } from 'styled-components'
import { getImageName } from '../../assets/태그사진/tagImage';
import { TagNameMaker } from '../../assets/TagCode';


// '구'를 파라미터로 넘겨서 검색

const InfoItem = (props) => {
  const {width=25, height=90, onClick=null,tag,institute,place,actStart="",progrmRegistNo,title,actEnd="",recruitStart,recruitEnd,dday=0,writer,writer_profile_img,writer_username} = props;
  const num = TagNameMaker(tag);
  const url = getImageName(num);
  console.log(actEnd)
  return (
    <Infodiv width={width} height={height} onClick={onClick}>
                <InfoImg style={                
{                  backgroundImage: `url(${process.env.PUBLIC_URL}/tagImage/${url})`}}>
                    <Ddaydiv>
                      D-<span style={{ color: 'red' }}>{Math.abs(dday)}</span>  
                    </Ddaydiv>
                </InfoImg>
                <InfoTextDiv>
                  <InfoTextTag>{num}</InfoTextTag>
                  <InfoTextTitle>{title}</InfoTextTitle>
                  <InfoTextDetail>등록기관: {institute}</InfoTextDetail>
                  <InfoTextDetail>모집기간: {recruitStart}-{recruitEnd}</InfoTextDetail>
                  <InfoTextDetail>봉사시간 : {actStart.slice(11,16)} - {actEnd.slice(11,16)}</InfoTextDetail>
                </InfoTextDiv>

    </Infodiv>
  )
}

export default InfoItem



const Infodiv = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
`;


const Ddaydiv = styled.div`

    

    position: relative;
    top: 3.2em;
    left: 0;

    opacity: 0.7;
    
    width: 5em;
    height: 3.7em;

    display: flex;
    padding: 0px 12px;
    align-items: center;
    background: var(--yellow-color, #FFE34F);
    z-index: 10;

    color: #000;
    font-weight: 700;

`



const InfoImg = styled.div`


  width : 100%;
  height : 55%;
  border-radius: 2em 2em 0 0;
  
  background-size: cover; /* 이미지를 컨테이너에 맞게 늘립니다 */
  background-position: center; /* 이미지를 중앙으로 정렬합니다 */ 

`

const InfoTextDiv = styled.div`


  width: 100%;
  height : 45%;

  background: var(--secondary-yellow-color, #FFFAC9);
  box-sizing: border-box;
  padding: 0 1.2em;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;  
  border-radius: 0 0 2em 2em;



`


//폰트 사이즈 2 4 2 축소 

const InfoTextTag = styled.span`

  height : 17%;
  

  color: var(--dark-color, #024959);
  font-size: 1.8em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;

  `

const InfoTextTitle = styled.span`

  height : 34%;

  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 1.8em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

`

const InfoTextDetail = styled.span`

  height : 17%;

  color: var(--dark-gray-color, #7E8181);
  text-align: center;
  font-size: 1.6em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
`