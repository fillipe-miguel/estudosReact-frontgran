import React from 'react';
// Icons
import { BsBookmark, BsShare } from 'react-icons/bs';
// components
import ActionButton from '../../components/ActionButton';
import LikeButton from '../../components/LikeButton';
// Styles
import {
  ActionsContainer,
  Bottom,
  Container,
  Header,
  ImagesContainer,
  LikesDescription,
  PostData,
  PostDescription,
} from './Post.style';

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
        <ActionsContainer>
          {/* Só para colocar dois de um lado e dois do outro */}
          <div>
            <LikeButton />
            <ActionButton icon={<BsShare />} />
          </div>
          <ActionButton icon={<BsBookmark />} />
        </ActionsContainer>

        <LikesDescription>Liked by ACOUNTNAME and others</LikesDescription>
        <PostDescription>ACOUNTNAME description</PostDescription>
        <PostData>6 days ago</PostData>
      </Bottom>
    </Container>
  );
}

export default Post;
