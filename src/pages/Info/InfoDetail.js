import React, { useState } from 'react'
import { Wrapper } from '../../styles/Common'
import styled from 'styled-components'
//import {ReviewTitle} from '../../styles/Review/MainReview'

import illust from '../../../src/assets/일러스트.jpg'
import ReviewItem from '../../components/Review/ReviewItem';
import InfoItem from '../../components/Home/InfoItem';

import LikesandScrap from '../../components/Maininfo/LikesandScrap'
function InfoDetail(){
    const array = ["태그","모집기관","장소","모집기간", "봉사기간","봉사시간","등록기관","성인 신청가능여부","청소년 신청가능여부",""];
  return (
    <>
    <Wrapper>
        <Image></Image>
        <InfoContainer>
            <InfoTitleContainer>
                <InfoTitleButtonBox>
                    <InfoTitleButton>모집마감</InfoTitleButton>
                </InfoTitleButtonBox>
                <InfoTitle>드림 교육 봉사활동</InfoTitle>
            </InfoTitleContainer>
            <InfoBox>
                <TableWrapper>
                    <tbody>
                        <tr>
                        <Td className="bg-yellow">{array[0]}</Td>
                        <Td></Td>
                        <Td className="bg-yellow">{array[1]}</Td>
                        <Td></Td>
                        <Td className="bg-yellow">{array[2]}</Td>
                        <Td></Td>
                        </tr>
                        <tr>
                        <Td className="bg-yellow">{array[3]}</Td>
                        <Td></Td>
                        <Td className="bg-yellow">{array[4]}</Td>
                        <Td></Td>
                        <Td className="bg-yellow">{array[5]}</Td>
                        <Td></Td>
                        </tr>
                        <tr>
                        <Td className="bg-yellow">{array[6]}</Td>
                        <Td></Td>
                        <Td className="bg-yellow">{array[7]}</Td>
                        <Td></Td>
                        <Td className="bg-yellow">{array[8]}</Td>
                        <Td></Td>
                        </tr>
                    </tbody>
                </TableWrapper>
            </InfoBox>
            <LikesScrapContainer>
                <LikesandScrap></LikesandScrap>
            </LikesScrapContainer>
        <MainTextContainer>
            활동 내용 (데이터 가져와서 들어갈 곳)
        </MainTextContainer>
        </InfoContainer>

        <ReviewContainer>
            <ReviewTitle>후기</ReviewTitle>
            <ReviewInfoWrapper>
                <ReviewItemWrapper>
                    <ReviewItem/>
                    <ReviewItem/>
                    <ReviewItem/>
                </ReviewItemWrapper>
          </ReviewInfoWrapper>
        </ReviewContainer>
        <Similar>
            <ReviewTitle>현재 보고 있는 봉사와 유사해요!</ReviewTitle>
            <Infoitem>
                <Iteminfo>
                    <InfoItem></InfoItem>
                    <InfoItem></InfoItem>
                    <InfoItem></InfoItem>
                    <InfoItem></InfoItem>
                </Iteminfo>
            </Infoitem>
          
        </Similar>
        



    </Wrapper>
    <Footer>
        <RegisterButton>신청하러 가기</RegisterButton>
    </Footer>
    </>

  );
};

export default InfoDetail;


const Image = styled.div`
width: 100%;
height: 500px;
background: url(${illust});
`
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
background-color:light-pink;
height: 899px;
`
const LikesScrapContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
height: 131px;
`
const MainTextContainer = styled.div`
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 20px;
width: 100%;
height: 439px;
/* Dark Gray Color */
border-width: 1px 0px;
border-style: solid;
border-color: #7E8181;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #000000;


`
const ReviewContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 40px;

width: 100%;
height: 783.39px;


`
const ReviewTitle = styled.span`
    color: var(--dark-color, #024959);
    font-size: 3.6em;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`
const ReviewInfoWrapper = styled.div`

    width : 100%
    height : auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;

`
const ReviewItemWrapper = styled.div`

    display: flex;
    justify-content : space-between;

    width: 1080px;
    height : auto;
    align-items: flex-start;

`
const Similar = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 20px;
width: 100%;
height: 551px;

`;
const Infoitem = styled.div`
display : flex;
flex-direction: column;
justify-content : space-between;
align-items : center;
width : 100%;
height : 59.5em;

`
const Iteminfo = styled.div`
justify-content : center;
width: 100%;
flex : 1;
display: flex;
flex-direction: row;
align-items: center;
gap: 2em;

`
const Footer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 100%;
position: absolute;
height: 140px;

top: 2853px;

/* Light Gray Color */
background: #D9D9D9;
`
const RegisterButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 40px;
gap: 10px;

width: 254px;
height: 78px;

/* Yellow Color */
background: #FFE34F;
border-radius: 40px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 38px;
color: #000000;
`
const InfoTitleContainer = styled.div`

box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 20px 0px;
width: 100%;
height: 89px;
border-width: 4px 0px 1px 0px;
border-style: solid;
border-color: #000000;

`
const InfoTitleButtonBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 30px;
gap: 10px;

width: 220px;
height: 49px;

`
const InfoTitleButton = styled.div`
padding: 10px 30px;
width: 160px;
height: 49px;
/* Light Gray Color */
background: #D9D9D9;
border-radius: 30px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;
/* identical to box height */

color: #000000;

`
const InfoTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 30px 0px 20px;
gap: 10px;

width: 1316px;
height: 49px;
font-family: 'Pretendard Variable';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;

color: #000000;


`
const InfoBox = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;

align-content: flex-start;
padding: 30px 0px;
width: 100%;
border-top: 2px solid #000000;
height:180px
flex-wrap: wrap;
`
const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0px;
  border-top: 2px solid #000000
`;
const Td = styled.td`
  border: 1px solid black;
  padding: 12px 0;
  color: #7e8181;
  font-family: Pretendard Variable;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    border-bottom: 1px solid #D9D9D9

  &:first-child {
    width: 114px;
  }

  &.bg-yellow {
    background-color: #fffac9;
    width: 114px;
    color: black;
    
    
  }
`;

