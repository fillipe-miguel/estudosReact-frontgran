import React from 'react';
// Layouts
import Post from '../../layouts/Post';
// Styles
import PageContainerStyled from '../../styles/container/PageContainer';

function Home() {
  return (
    <PageContainerStyled>
      <Post />
    </PageContainerStyled>
  );
}

export default Home;
