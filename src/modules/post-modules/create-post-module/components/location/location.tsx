import React from 'react'

import { IconWrapper } from '@/components/icon-wrapper'

export const Location = () => {
  return (
    <div
      className={
        'border-t-2  mt-9 border-s-light-100 h-full w-full flex-col justify-center align-middle '
      }
    >
      <div className={'flex flex-col align-middle justify-center pt-6 pl-3 pr-3 gap-6'}>
        <div
          className={
            'flex justify-between text-light-900 font-normal text-sm pb-1 border-b border-light-100'
          }
        >
          <div className={'flex-col'}>
            <div className={'text-light-100 font-normal text-sm '}>Add location</div>
            <div className={'text-light-900 font-normal text-base '}>New York</div>
          </div>
          <div>
            <IconWrapper
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_301_4436)">
                    <path d="M12 2C9.89206 1.99989 7.86926 2.83176 6.37124 4.31479C4.87323 5.79782 4.02108 7.81216 4 9.92C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 9.92C19.9789 7.81216 19.1268 5.79782 17.6288 4.31479C16.1307 2.83176 14.1079 1.99989 12 2ZM12 19.65C10.33 18.06 6 13.65 6 9.92C6 8.3287 6.63214 6.80258 7.75736 5.67736C8.88258 4.55214 10.4087 3.92 12 3.92C13.5913 3.92 15.1174 4.55214 16.2426 5.67736C17.3679 6.80258 18 8.3287 18 9.92C18 13.62 13.67 18.06 12 19.65Z" />
                    <path d="M12 6C11.3078 6 10.6311 6.20527 10.0555 6.58986C9.47993 6.97444 9.03133 7.52107 8.76642 8.16061C8.50152 8.80015 8.4322 9.50388 8.56725 10.1828C8.7023 10.8618 9.03564 11.4854 9.52513 11.9749C10.0146 12.4644 10.6383 12.7977 11.3172 12.9327C11.9961 13.0678 12.6999 12.9985 13.3394 12.7336C13.9789 12.4687 14.5256 12.0201 14.9101 11.4445C15.2947 10.8689 15.5 10.1922 15.5 9.5C15.5 8.57174 15.1313 7.6815 14.4749 7.02513C13.8185 6.36875 12.9283 6 12 6ZM12 11C11.7033 11 11.4133 10.912 11.1666 10.7472C10.92 10.5824 10.7277 10.3481 10.6142 10.074C10.5007 9.79994 10.4709 9.49834 10.5288 9.20736C10.5867 8.91639 10.7296 8.64912 10.9393 8.43934C11.1491 8.22956 11.4164 8.0867 11.7074 8.02882C11.9983 7.97094 12.2999 8.00065 12.574 8.11418C12.8481 8.22771 13.0824 8.41997 13.2472 8.66665C13.412 8.91332 13.5 9.20333 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_301_4436">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </div>
        </div>
        <div>
          <div className={'text-light-100 font-normal text-base '}>New York</div>
          <div className={'text-light-900 font-normal text-xs '}>Washington Square Park</div>
        </div>
        <div>
          <div className={'text-light-100 font-normal text-base '}>New York</div>
          <div className={'text-light-900 font-normal text-xs '}>Washington Square Park</div>
        </div>
      </div>
    </div>
  )
}
