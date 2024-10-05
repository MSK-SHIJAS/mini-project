import { Button } from 'bootstrap'
import React from 'react'

const PollHome = () => {
  return (
    <div>
    <p>YOUR COUNTRY</p>
    <input type="radio" name="fav_language" value='india'/><label>INDIA</label>
    <input type="radio" name="fav_language" value='pak'/><label>PAK</label>
    <input type="radio" name="fav_language" value='usa'/><label>USA</label>
    </div>
  )
}

export default PollHome
