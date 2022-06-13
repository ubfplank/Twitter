import React from 'react';

import { Container, Wrapper } from './Styles'    
import Main from '../Main/Index'
import MenuBar from '../MenuBar/Index'
import SideBar from '../SideBar/Index'


const layout: React.FC = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <MenuBar/>
                <Main/>
                <SideBar/>
        </Wrapper>
    </Container>
    
    
    </>



  )
  


}

export default layout;