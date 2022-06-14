import React from 'react';

import Button from '../Button';

import { Container, TopSide, Logo, EmailIcon, HomeIcon, BellIcon, ProfileIcon, FavoriteIcon, MenuButton, ExitIcon, ProfileData, BotSide, Avatar } from './Styles';

const MenuBar: React.FC = () => {
  return (
   <Container>
    <TopSide>
        <Logo/>

   <MenuButton>
    <HomeIcon/>
    <span>Home</span>
   </MenuButton>

   <MenuButton>
    <BellIcon/>
    <span>Notifications</span>
   </MenuButton>

   <MenuButton>
    <EmailIcon/>
    <span>Messages</span>
   </MenuButton>

   <MenuButton>
    <FavoriteIcon/>
    <span>Favorites</span>
   </MenuButton>

   <MenuButton className="active">
    <ProfileIcon/>
    <span>Profile</span>
   </MenuButton>

   <Button>
    <span>Tweet</span>
   </Button>

    </TopSide>
    <BotSide>
        <Avatar/>
        <ProfileData>
            <strong>Thzinh</strong>
            <span>@Teaga014</span>
        </ProfileData>
        <ExitIcon/>
    </BotSide>

   </Container>


  )
}

export default MenuBar;