import React from 'react'
import '../Vans/Vans.css'
import { Link } from 'react-router-dom'

const HostVans = () => {

  const [hostVans, setHostVans] = React.useState([])

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setHostVans(data.vans))
  }, [])

  const vanElements = hostVans.map(van => (
    <div key={van.id} className="van-tile">
      <Link to={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  return (
    <div className="van-list-container">
      <h1>Your listed vans</h1>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}

export default HostVans