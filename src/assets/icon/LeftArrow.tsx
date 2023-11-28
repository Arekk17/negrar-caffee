import * as React from 'react'
import { SVGProps } from 'react'
export const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={35}
    fill='none'
    {...props}
  >
    <path
      fill='#C08267'
      d='M20.561 30.575 7.853 17.35 20.56 4.125 16.65.063 0 17.35l16.649 17.288 3.912-4.063Z'
    />
  </svg>
)
