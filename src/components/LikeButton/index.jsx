import React, { useState } from 'react';

// Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

// Style
import Container from './LikeButton.style';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <Container
      onClick={() => {
        setLiked(!liked);
      }}
    >
      {liked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
    </Container>
  );
}

export default LikeButton;
