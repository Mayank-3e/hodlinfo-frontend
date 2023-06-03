import { Dropdown } from "react-bootstrap"
import styles from "./navbar.module.scss"
import { useState } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import getdata from "@/lib/get-data"

export default function Navbar({setLoading,setData})
{
  const [value,setValue]=useState('BTC')

  return <div className={styles.container}>
    <img src="https://hodlinfo.com/static/media/HODLINFO_white.8f78fc06.png"/>
    <div className={styles.dropdowns}>
      <Dropdown>
        <Dropdown.Toggle className={styles.dropdown}>INR</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href={`https://hodlinfo.com/${value}-INR`} target="_blank">INR</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle className={styles.dropdown}>{value}</Dropdown.Toggle>
        <Dropdown.Menu>
          {['BTC','ETH','USDT','XRP','TRX','DASH','ZEC','XEM','IOST','WIN','BTT','WRX'].map((item,i)=>
            <Dropdown.Item
              key={i}
              href={`https://hodlinfo.com/${item}-INR`}
              target="_blank"
              onClick={()=>setValue(item)}
            >
              {item}
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>

      <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
        className={styles.buy}
        target="_blank"
      >
        BUY {value}
      </a>
    </div>
    <div className={styles.connect}>
      <CountdownCircleTimer
        isPlaying
        duration={60}
        colors='rgb(61 198 193)'
        rotation="counterclockwise"
        size={50}
        strokeWidth={5}
        onComplete={async()=>
          {
            setLoading(true)
            const result=await getdata()
            setData(result)
            setLoading(false)
            return {shouldRepeat: true}
          }
        }
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>

      <a href="https://hodlinfo.com/connect/telegram" target="_blank"
        className={styles.telegram}
      >
        <i className="fa-brands fa-telegram"/>
        <span>Connect Telegram</span>
      </a>
    </div>
  </div>
}