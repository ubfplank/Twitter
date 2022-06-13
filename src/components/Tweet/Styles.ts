import styled, { css } from 'styled-components'
import { Chat, Pin, ShareAlternative, Favorite, Retweet } from '../../styles/Icons'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  padding : 14px 16px;

  max-width:100%;
  margin-bottom: 1px solid var(--outlined);
`
export const  Retweeted = styled.div`
  display:flex;
  align-items: center;
  font-size: 13px;
  color:var(--gray);

`       
export const PinIcon = styled(Pin)`
  width: 15px;
  height: 15px;
  margin-left: 19px;
  margin-right: 9px;
  fill: var(--gray);  
`; 

export const Dot = styled.div`
   width: 2px;
   height: 2px;
   background: var(--gray);
   margin: 0 10px;
   

`;

export const Body = styled.div`
  display:flex;
  margin-top: 3px;
  position:relative;

`;



export const ImageContent = styled.div`
  margin-top:12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  border-radius: 14px;

  background: var(--outline);
  cursor: pointer;

  &:hover{
    opacity: 0.6;
  }

`;

export const Avatar = styled.div`
   width: 49px;
   height: 49px;
   border-radius: 50%;
   background:var(--gray);
   flex-shrink: 0;
   position:absolute;

`;
export const Content  = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 2px;
  padding: 0 59px;
  width: 100%;

`; 
export const Header  = styled.div`
 
  display: flex;
  align-items: center;
  font-size: 15px;
  
  > span, time{
    color: var(--gray);
    white-space: nowrap;
  }

  >span{
    margin-left: 5px;
  }

  >strong, span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
`;
export const Desc = styled.p`
  font-size: 15px;
  margin-top: 3px;

`; 
export const Status = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 14px;

  >svg {
    margin-right: 5px;
  }

  &:nth-child(1){
    &, > svg path{
        color: var(--gray);
    }
  }

  &:nth-child(2){
    color: var(--retweet);
    > svg path{
        color: var(--retweet);

    }
  }

  &:nth-child(3){
    color: var(--like);
    > svg {
        fill:var(--like);
    }
  }
  
  &:nth-child(4){
    > svg {
        fill:var(--gray);
    }
  }


`;
export const Icons = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;


  @media screen and (min-width: 330px){
    width: 63%;
  }
  > div {
    cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
`; 

const Icon = css`
  width: 20px;
  height: 20px;
`;

export const CommentIcon = styled(Chat)`
  ${Icon};
`  
export const RetweetIcon = styled(Retweet)`
  ${Icon};
` 
export const LikeIcon = styled(Favorite)`
  ${Icon};
`  

export const ShareIcon = styled(ShareAlternative)`
  ${Icon};
  
`;
