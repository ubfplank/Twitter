import styled, { css } from "styled-components";
import { ArrowLeft, Home, Notifications, Search, Email, } from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);
  

  @media screen and (min-width:500px) {
      border-left: 1px solid var(--outline);
      border-right: 1px solid var(--outline);
      
  }
`;


export const Header = styled.div`
    z-index: 2;
    position: sticky;
    top:0;
    background:var(--primary);
    display:flex;
    align-items:center;
    text-align: left;
    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);

    > button {
        padding:8px;
        border-radius:50px;
        outline:0;
        cursor:pointer;

        &hover{
            background:var(--twitter-dark-hover)

        }
    }

    


`;
export const BackIcon = styled(ArrowLeft)`
  width:24px;
  height:24px;
  fill:var(--twitter);

`;
export const ProfileInfo = styled.div`
  margin-left:17px;
  display:flex;
  flex-direction: column;

  > strong{
      font-size:19px
  }

  >span{
      font-size:15px;
      color:var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position:fixed;
  background: black;
  bottom:0;
  left:0;
  width:100%;
  height:52px;
  border-top: 1px solid var(--outline);
  z-index:2;
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  
  @media screen and (min-width:500px){
    display:none;
    
  }

  
`;



const Icon = css`
  width:31px;
  height:31px;
  cursor:pointer;
  fill:var(--gray);

  &.active,&:hover{
    fill:var(--twitter)
  }
`;


export const HomeIcon = styled(Home)`
  ${Icon}
`;

export const BellIcon = styled(Notifications)`
  ${Icon}
`

export const FindIcon = styled(Search)`
  ${Icon}
`
export const MessageIcon = styled(Email)`
  ${Icon}
`