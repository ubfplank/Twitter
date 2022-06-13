import React from 'react';
import Feed from '../Feed/Index'

import { 
  Container, 
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton

} from './Styles'


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>

        </Banner>
        <ProfileData>

         <EditButton outlined> Edit profile </EditButton> 
        <h1>Thzinh</h1>
        <h2>@Teaga014</h2>
        <p>Finge que tem uma frase genérica aqui.</p>
        <ul>
          <li>
            <LocationIcon/>
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 14 de março de 2002
          </li> 
        </ul>
         <Followage>
           <span>
           <strong>139 </strong> Following 
           </span>
           <span>
           <strong> 110 </strong> Followers
             
           </span>
           </Followage>
        </ProfileData>
        <Feed/>
    </Container>
  )
}

export default ProfilePage;