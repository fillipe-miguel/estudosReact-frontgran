import React, { useState } from 'react';

// Icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

// Style
import LikeButtonStyled from './style';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <LikeButtonStyled
      onClick={() => {
        setLiked(!liked);
      }}
    >
      {liked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
    </LikeButtonStyled>
  );
}

export default LikeButton;
