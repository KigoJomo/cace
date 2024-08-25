import React from 'react'
import ToggleButton from './ToggleButton'

import {
  BlockOutlined,
  LockClockOutlined,
  Battery0BarOutlined,
} from '@mui/icons-material'
import Image from 'next/image'

const statsDetails = [
  {
    icon: BlockOutlined,
    value: (
      <>
        75 m<sup>2</sup>
      </>
    ),
    description: 'area cleaned',
  },
  {
    icon: LockClockOutlined,
    value: <>30 min</>,
    description: 'cleaning time',
  },
  {
    icon: Battery0BarOutlined,
    value: <>80%</>,
    description: 'battery charge',
  },
]

const Appliances: React.FC = () => {
  return (
    <>
      <div className="w-1/2 h-full rounded-3xl bg-light-gray p-4 flex flex-col justify-between">

        <div className="w-full flex justify-between">

          <div className="title flex flex-col">
            <h2 className="font-semibold text-xl">Bedroom</h2>
            <p className="capitalize text-xs text-slate-700">
              robot vacuum cleaner
            </p>
          </div>

          <ToggleButton />
        </div>

        <div className="image w-full h-3/5 relative">

          <div className="img h-full bg-[url('/images/robot.webp')] bg-[50%] bg-contain bg-no-repeat"></div>

        </div>

        <div className="stats w-full flex items-center justify-between">
          {statsDetails.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div
                key={index}
                className="icon w-fit flex items-center gap-2 bg-medium-gray bg-opacity-50 backdrop-blur-3xl py-2 pl-2 pr-4 rounded-full"
              >
                <div
                  className="flex items-center justify-center aspect-square p-3 rounded-full bg-white"
                >
                  <Icon className="opacity-50" fontSize="small" />
                </div>

                <div className="flex flex-col">
                  <h4 className='font-medium'>{stat.value}</h4>
                  <p className="text-dark-blue opacity-50 text-xs capitalize">{stat.description}</p>
                </div>

              </div>
            )
          })}
        </div>
      </div>

      <div className="w-1/4 h-full border border-dark-blue rounded-3xl"></div>

      <div className="w-1/4 h-full border border-dark-blue rounded-3xl"></div>
    </>
  )
}
export default Appliances
