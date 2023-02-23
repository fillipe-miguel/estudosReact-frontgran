import React, { useState } from 'react';

// Icons
import { BsHeart, BsHeartFill } from 'react-icons/bs';

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
      {liked ? <BsHeartFill color="red" /> : <BsHeart />}
    </Container>
  );
}

export default LikeButton;
