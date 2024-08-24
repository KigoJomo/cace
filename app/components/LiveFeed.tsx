'use client'

import React, { useState } from 'react'

import {
  ChairOutlined,
  RestaurantOutlined,
  BedOutlined,
  BathtubOutlined,
  InfoOutlined,
  ChevronRightOutlined,
} from '@mui/icons-material'

const rooms = [
  { name: 'bedroom', icon: BedOutlined, devices: 3 },
  { name: 'kitchen', icon: RestaurantOutlined, devices: 4 },
  { name: 'living-room', icon: ChairOutlined, devices: 5 },
  { name: 'bathroom', icon: BathtubOutlined, devices: 2 },
]

// feed icons (mui) with icon and value
// the icons are temperature, fan-speed, power, and light

// importing the icons from mui
import {
  AcUnitOutlined,
  Brightness4Outlined,
  ElectricBoltOutlined,
  LightModeOutlined,
} from '@mui/icons-material'

// creating an array of objects with the icon and value
const feedIcons = [
  { icon: AcUnitOutlined, value: '24°C' },
  { icon: Brightness4Outlined, value: '50%' },
  { icon: ElectricBoltOutlined, value: '350W' },
  { icon: LightModeOutlined, value: '80%' },
]

const LiveFeed: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState<string>('bedroom')

  return (
    <>
      <div
        className="feed h-full w-3/4 rounded-3xl border shadow-lg  bg-cover bg-center bg-no-repeat p-4"
        style={{ backgroundImage: `url('/images/${activeRoom}.webp')` }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="live rounded-full flex items-center gap-2 bg-white py-2 px-6">
            <span className="w-2 aspect-square rounded-full bg-red-500"></span>
            <p>Live</p>
          </div>

          <div className="flex items-center gap-2">
            {feedIcons.map((feed) => (
              <div
                key={feed.value}
                className="icon flex items-center gap-2 bg-white bg-opacity-75 backdrop-blur-3xl py-2 px-6 rounded-full"
              >
                <feed.icon className="text-dark-blue" fontSize="small" />
                <p className='text-xs'>{feed.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="room-selector h-full w-1/4 p-4 border-dark-blue rounded-3xl bg-gradient-to-b from-violet-100 to-pink-100 flex flex-col gap-2">
        <div className="title flex items-center justify-between">
          <h2 className="text-lg font-semibold text-dark-blue">Rooms</h2>
          <button>
            <InfoOutlined
              className="text-dark-blue opacity-50"
              fontSize="small"
            />
          </button>
        </div>

        <div className="w-full h-0 border-t border-dark-blue opacity-20"></div>

        <div className="rooms flex flex-col gap-2">
          {rooms.map((room) => {
            const Icon = room.icon
            const isActive = activeRoom === room.name

            return (
              <button
                key={room.name}
                className={`flex items-center gap-4 p-2 rounded-full cursor-pointer ${
                  isActive ? 'bg-white' : ''
                }`}
                onClick={() => setActiveRoom(room.name)}
              >
                <div
                  className={`w-1/5 flex items-center justify-center aspect-square rounded-full ${
                    isActive ? 'bg-light-gray' : 'bg-white'
                  }`}
                >
                  <Icon className="text-dark-blue" fontSize="small" />
                </div>

                <div className="w-4/5 flex flex-col items-start gap-0">
                  <p className="text-dark-blue capitalize">{room.name}</p>
                  <p className="text-dark-blue opacity-50 text-xs">
                    {room.devices} device(s)
                  </p>
                </div>

                <ChevronRightOutlined fontSize="small" />
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default LiveFeed
