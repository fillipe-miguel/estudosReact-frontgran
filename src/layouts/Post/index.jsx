import React from 'react';
// components
import LikeButton from '../../components/LikeButton';
// Styles
import { Bottom, Container, Header, ImagesContainer } from './Post.style';

function Post() {
  return (
    <Container>
      <Header>
        <p>Logo</p>
        <p>ações...</p>
      </Header>
      <ImagesContainer>
        <p>Image 1</p>
        <p>Image 2</p>
        <p>Image 3</p>
        <p>Image 4</p>
      </ImagesContainer>
      <Bottom>
        <p>Botom</p>
        <LikeButton />
      </Bottom>
    </Container>
  );
}

export default Post;
