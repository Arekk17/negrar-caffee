import * as React from 'react'
import { SVGProps } from 'react'
export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={26}
    height={27}
    fill='none'
    {...props}
  >
    <path
      fill='url(#a)'
      d='M0 .5h26v26H0z'
    />
    <defs>
      <pattern
        id='a'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <use
          xlinkHref='#b'
          transform='scale(.00195)'
        />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,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'
        id='b'
        width={512}
        height={512}
      />
    </defs>
  </svg>
)
