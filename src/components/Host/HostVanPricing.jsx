import React from 'react'
import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {

  const { currentVan } = useOutletContext()

  return (
    <div>HostVanPricing</div>
  )
}

export default HostVanPricing