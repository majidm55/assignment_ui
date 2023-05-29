import * as React from 'react';
import { LoadingCircle }  from '../LoadingCircle';

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({
  isLoading = false, text, onClick
}, forwardedRef) => {

  return (
    <button
      onClick={onClick}
      ref={forwardedRef}
      style={{
        width: '200px'
     }}
    >
      {isLoading ? <LoadingCircle /> :  text}
    </button>
  );
});
