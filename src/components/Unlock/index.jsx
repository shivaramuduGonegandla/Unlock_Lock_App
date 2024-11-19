import React, { useState } from 'react';
import { LockContainer, LockText, LockButton, LockImage } from './styledComponents';

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked((prevState) => !prevState);
  };

  return (
    <LockContainer>
      <LockImage
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <LockText>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</LockText>
      <LockButton onClick={toggleLock}>
        {isLocked ? 'Unlock' : 'Lock'}
      </LockButton>
    </LockContainer>
  );
};

export default Unlock;
