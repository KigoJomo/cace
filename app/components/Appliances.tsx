import React from 'react'
import ToggleButton from './ToggleButton'

const Appliances: React.FC = () => {
  return (
    <>
      <div className="w-1/2 h-full rounded-3xl bg-light-gray p-4">
        <ToggleButton />
      </div>

      <div className="w-1/4 h-full border border-dark-blue rounded-3xl"></div>

      <div className="w-1/4 h-full border border-dark-blue rounded-3xl"></div>
    </>
  )
}
export default Appliances
