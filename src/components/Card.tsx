import React, { memo } from 'react'
import '../card.css'
import { Link } from 'react-router-dom'
interface CardProps {
   data: any

}
const Card = ({ data }: CardProps) => {

   return (
      <div className='card'>
         <Link to={data.url}>Link to the post</Link>
         <h2>{data.title}</h2>

         <p>{data.author}</p>
      </div>
   )
}

export default memo(Card)
