import React from 'react';
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, BellIcon, MessageIcon, FindIcon} from './Styles'
import ProfilePage from '../ProfilePage/Index'

const Main: React.FC = () => {
  return (
    <Container>
      
        <Header>
            <button>
                <BackIcon/>
            </button>
            <ProfileInfo>
            <strong>Thzinh</strong>
            <span>2738 Tweets</span>
             </ProfileInfo>
            </Header>
           
           
            <ProfilePage/> 
        
         <BottomMenu>
            <HomeIcon className='active' />
            <FindIcon/>
            <BellIcon/>
            <MessageIcon/>
        </BottomMenu> 
    </Container>


  )
}

export default Main;