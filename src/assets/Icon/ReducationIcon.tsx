import * as React from 'react'
import { SVGProps } from 'react'
export const ReducationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={22}
    height={27}
    fill='none'
    {...props}
  >
    <circle
      cx={11}
      cy={14}
      r={11}
      fill='#D9D9D9'
    />
    <path
      fill='#000'
      fillOpacity={0.5}
      d='M8.34 15.82c-.333 0-.62-.113-.86-.34a1.141 1.141 0 0 1-.34-.84c0-.347.113-.633.34-.86.24-.227.527-.34.86-.34h4.12c.333 0 .613.113.84.34.24.227.36.513.36.86 0 .333-.12.613-.36.84-.227.227-.507.34-.84.34H8.34Z'
    />
  </svg>
)
