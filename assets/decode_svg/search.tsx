import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SearchIcon  = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 17 4 4"
    />
    <Path
      stroke="#323232"
      strokeWidth={1}
      d="M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </Svg>
)
export default SearchIcon 
