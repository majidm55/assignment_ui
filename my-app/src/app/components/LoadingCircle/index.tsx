import * as React from 'react';

import loadingCircleSvg from '../../assets/svgs/LoadingCircle.svg';

export const LoadingCircle: React.FC<ILoadingCircleProps> = ({ color = 'blue', ...props }) => {

  return (
    <img
      className={props.className}
      src={loadingCircleSvg}
      height={props.height ?? 50}
      width={props.width ?? 50}
      color={color}
      alt="Loading Circle"
    />

  );
};
