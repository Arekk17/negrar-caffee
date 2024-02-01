'use client'
import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: 51.110206604003906,
  lng: 17.034961700439453,
}

const MyGoogleMapComponent = () => {
  return (
    <div
      className='w-full p-[50px] bg-[#E3D9D5]'
      id='location'
    >
      <div className='relative  border-brown border-8'>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default React.memo(MyGoogleMapComponent)
