

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