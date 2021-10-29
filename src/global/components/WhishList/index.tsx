import React, { useState, useCallback } from 'react';

import { Container, Heart, HeartOutline } from './styles';

interface IWhishList {
  selected: boolean;
  onClick?: () => void;
}

const WhishList: React.FC<IWhishList> = ({ selected, onClick = () => {} }) => {
  const [hover, setHover] = useState(false);

  function toggleHover(): void {
    setHover(!hover);
  }

  const toggleHoverCallback = useCallback(toggleHover, [hover]);

  return (
    <Container
      selected={selected}
      onMouseEnter={toggleHoverCallback}
      onMouseLeave={toggleHoverCallback}
      onClick={onClick}
    >
      {selected && <Heart />}
      {!selected && <HeartOutline hover={hover} />}
    </Container>
  );
};
export default WhishList;
