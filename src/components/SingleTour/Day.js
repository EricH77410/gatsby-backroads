import React, {useState} from 'react'
import { FaAngleDown } from 'react-icons/fa'
import style from '../../css/day.module.css'

const Day = ({day, info}) => {

  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(!showInfo)
  }
  return (
    <article className={style.day}>
      <h4>
        {day}
        <button className={style.btn} onClick={toggleInfo}>
          <FaAngleDown/>
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
      
    </article>
  )
}

export default Day
