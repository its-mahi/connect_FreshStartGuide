import React from 'react'

export default function DeveloperInfo({ name, imageSrc }) {
  return (
    <div>

    <div className="text-center mb-4">
      <img src={imageSrc} alt={name} className="mx-auto rounded-full w-32 h-32 mb-2" />
      <p className="text-white text-lg font-semibold">{name}</p>
    </div>
    </div>  
  )
}
