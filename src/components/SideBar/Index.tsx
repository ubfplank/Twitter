import React from 'react';
import StickyBox from 'react-sticky-box'
import { Container, SearchWrapper, SearchInput, Body, SearchIcon } from './Styles';
import List from '../List/Index'
import FollowSugestion from '../FollowSugestion/Index'
import News from '../News/Index'

const SideBar: React.FC = () => {
  return (
   <Container>
    <SearchWrapper>
        <SearchInput placeholder = "Search Twitter" />
        <SearchIcon/>
    </SearchWrapper>
    <StickyBox>
    <Body>
        <List 
        title="What’s happening" 
        elements={[
        <FollowSugestion name="Gustavo Ubirajala" nickname="@Bunnypill03"/>,
        <FollowSugestion name="Emersu Tatagatarbha" nickname="@Lingpaeox"/>,
        <FollowSugestion name="Anhadon voidpretty" nickname="@Tchola0341"/> ,
    ]}
    />
        <List 
        title="Maybe you like it" 
        elements=
        {[
        <News/>,
        <News/>,
        <News/>,
        
    ]}
        />
         <List 
        title="Maybe you like it" 
        elements=
        {[
        <News/>,
        <News/>,
        <News/>,
        
    ]}
        />
         <List 
        title="Maybe you like it" 
        elements=
        {[
        <News/>,
        <News/>,
        <News/>,
        
    ]}
        />
         <List 
        title="Maybe you like it" 
        elements=
        {[
        <News/>,
        <News/>,
        <News/>,
        
    ]}
        />
    </Body>
    </StickyBox>
   </Container>

  );
}

export default SideBar;