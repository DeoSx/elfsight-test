import React from 'react'
import { User as UserPropTypes } from '../../global'
import { Link } from 'react-router-dom'

import './index.scss'

const User: React.FC<UserPropTypes> = (props) => {
  return (
    <Link to={`/album/${props.id}`} className="user">
      <p className="user__title">{props.name}</p>
      <p className="user__title">{props.email}</p>
      <div className="user__address">
        <p className="address__item address__item--city">
          {props.address.city}
        </p>
        <p className="address__item address__item--phone">{props.phone}</p>
      </div>
    </Link>
  )
}

export default User
