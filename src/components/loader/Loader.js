// import {Audio} from 'react-loader-spinner';
// export const MyLoader = () => {
//     return (
//       <Audio
//       height="100"
//       width="100"
//       color='pink'
//       ariaLabel='loading'
//       margin-left='50px'
//     />
//     );
// };

//npm install --save react-spinners

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";

const override = css`
  position: fixed;
  left: 50%;
  top: 50%;
`;

export const MyLoader = () => {
    return (
      <ClimbingBoxLoader
      color="purple"
      size="50px"
      css={override}
    />
    );
};