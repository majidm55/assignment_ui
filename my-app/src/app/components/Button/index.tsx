import * as React from 'react';
import { LoadingCircle }  from '../LoadingCircle';

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(({
  isLoading = false, text, onClick, disabled
}, forwardedRef) => {

  return (
    <button
      type="button"
      className="m-auto hover:bg-yellow-500 font-semibold text-left relative cursor-pointer px-4 py-3 drop-shadow-xl  flex space-x-4 rounded-xl text-black bg-indigo-500"
      onClick={onClick}
      disabled={disabled}
      ref={forwardedRef}
    >
      {isLoading ? <LoadingCircle /> :  text}
    </button>
  );
});
