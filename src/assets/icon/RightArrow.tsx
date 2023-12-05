import * as React from 'react'
import { SVGProps } from 'react'
export const RightArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={22}
    height={35}
    fill='none'
    {...props}
  >
    <path
      fill='#C08267'
      d='m.71 30.58 12.708-13.225L.71 4.13 4.622.068l16.649 17.287L4.622 34.643.71 30.58Z'
    />
  </svg>
)
