import React, { useState, useCallback } from 'react';

import { Container, Heart, HeartOutline } from './styles';

interface IWhishList {
  selected: boolean;
  onClick?: () => void;
}

const WhishList: React.FC<IWhishList> = ({ selected, onClick = () => {} }) => {
  const [hover, setHover] = useState(false);

  function hoverOn(): void {
    setHover(true);
  }

  function hoverOff(): void {
    setHover(false);
  }

  const hoverOnCallback = useCallback(hoverOn, []);
  const hoverOffCallback = useCallback(hoverOff, []);

  return (
    <Container
      selected={selected}
      onMouseEnter={hoverOnCallback}
      onMouseLeave={hoverOffCallback}
      onClick={onClick}
    >
      {selected && <Heart />}
      {!selected && <HeartOutline hover={hover} />}
    </Container>
  );
};
export default WhishList;
