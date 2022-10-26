import StrawberryIcon from "@images/strawberry.component.svg";

import React, { CSSProperties } from "react";

export default ({ style, className }: { style?: CSSProperties; className?: string }): React.ReactElement => (
  <StrawberryIcon className={className} style={style} />
);
