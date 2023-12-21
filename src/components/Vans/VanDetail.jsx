import React, { useEffect } from 'react'
import { useParams, Link, useLocation } from "react-router-dom"

const VanDetail = () => {
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
        return () => {
        }
    }, [params.id])

    const search = location.state?.search || ""
    const typeFilter = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {typeFilter} vans</span>
            </Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <div className='van-detail-items'>
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}

export default VanDetail