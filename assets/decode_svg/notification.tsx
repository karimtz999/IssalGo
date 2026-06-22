import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const NotificationIcon = (props: SvgProps) => (
  <Svg
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.07 10.26c.895-2.392 2.123-3.224 4.143-3.224 2.02 0 3.249.832 4.143 3.224.017.046.03.092.04.14l1.158 5.517a.982.982 0 0 1-.182.808.93.93 0 0 1-.727.363h-2.328a2.254 2.254 0 0 1-.542 1.674 2.14 2.14 0 0 1-1.562.738 2.14 2.14 0 0 1-1.562-.739 2.253 2.253 0 0 1-.542-1.675H6.782a.93.93 0 0 1-.727-.363.982.982 0 0 1-.183-.808L7.03 10.4a.963.963 0 0 1 .04-.14Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M9.11 16.336a.75.75 0 0 0 0 1.5v-1.5Zm4.207 1.5a.75.75 0 0 0 0-1.5v1.5ZM9.63 4.75a.75.75 0 0 0 0 1.5v-1.5Zm3.169 1.5a.75.75 0 0 0 0-1.5v1.5ZM9.109 17.836h4.208v-1.5H9.11v1.5ZM9.63 6.25h3.169v-1.5h-3.17v1.5Z"
    />
  </Svg>
)
export default NotificationIcon
