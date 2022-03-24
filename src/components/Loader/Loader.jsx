import React from 'react'
import "././Loader.scss"

const Loader = ({texto}) => {
    return (
        <div className='loader__margin'>
            <div className="cssload-loader">{`${texto}`}</div>
        </div>
    )
}

export default Loader