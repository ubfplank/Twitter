import styled, { css } from "styled-components";
import { LocationOn, Cake } from '../../styles/Icons'
import Button from '../Button/';

 export const Container = styled.div`
   display: flex;
   flex-direction: column;
   max-height: 100%;
   overflow-y:auto;

   scrollbar-width: none;
   ::-webkit-scrollbar{
    display: none;
   }
 `    

 
 export const ProfileData = styled.div`
  display:flex;
  flex-direction: column;
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  position:relative;
  

  > ul{ 
   list-style-type: none;
   margin-top: 10px;
   margin-bottom:10px;

   >li {
    display:flex;
    align-items: center;
    font-size:15px;
    color:var(--gray);
   }

   >svg{
    fill:var(--gray);
    margin-right:5px;
   }
  }
 
   > h1{
    font-weight: bold;
    font-size:20px;
    margin-top:-3px;
  }

   > h2{
    font-weight: normal;
    font-size:15px;
    color:var(--gray);
  }

  > p{
    font-size:15px;
    margin-top:10px;
  }


 `;

 const Icon = css`
  width:20px;
  height:20px;
  fill:var(--outline);
 `

export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    background: var(--twitter);
    position:relative;
 `

export const Avatar = styled.div`
    width: max(45px, min(135px,22vw));
    height: max(45px, min(135px,22vw));
    position:absolute;
    border:3.75px solid var(--primary);
    background:var(--gray);
    border-radius:50%;
    bottom:-40px;
    padding:min(-60px,-10vw);
    left:15px;
 `

 export const LocationIcon = styled(LocationOn)`
 ${Icon}
 
 ` 
 export const CakeIcon = styled(Cake)`
 ${Icon}
 ` 
 export const Followage = styled.div`
   display:flex;
  > span{
    font-size:15px;
    color:var(--gray);
   

   & + span {
     margin-left: 18px;
   }

  }
 `;

 export const EditButton = styled(Button)`
   position:absolute;
   top: 2vw;
   right: 15px;
   padding: 4px 16px;
   font-size: 13px;

   @media screen and (min-width: 320px){
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
   }


 `