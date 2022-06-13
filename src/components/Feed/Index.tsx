import React from 'react';
import Tweet from '../Tweet/Index'

import { Container, Tab, Tweets, Space} from './Styles';

const Feed: React.FC = () => {
  return (

    <Container>
       <Tab>Tweets</Tab>
       <Tweets>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        </Tweets>
        <Space/>
    </Container>


  )
}

export default Feed;