import React from 'react';

import { Container, Retweeted, PinIcon, Body, Avatar, Content, Header, Desc, Status, Icons, CommentIcon, RetweetIcon, LikeIcon, Dot, ImageContent, ShareIcon } from './Styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <PinIcon/>
            You Reetweeted
        </Retweeted>
        <Body>
            <Avatar/>
            
            <Content>
                <Header>
                        <strong>Thzinh</strong>
                        <span>@Teaga014</span>
                        <Dot/>
                        <time>Jun 16</time>
                </Header>
                <Desc>Run Run Run Run</Desc>

                <ImageContent/>

                <Icons>
                    <Status>
                        <CommentIcon/>
                        10
                    </Status>
                    <Status>
                        <RetweetIcon/>
                        1
                    </Status>
                    <Status>
                        <LikeIcon/>
                        13
                    </Status>
                    <Status>
                        <ShareIcon/>       
                    </Status>
                </Icons>
                </Content>

                
        </Body>
    </Container>


  )
}

export default Tweet;