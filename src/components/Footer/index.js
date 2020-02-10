import React from 'react'
import style from './style.module.css'
import image from'./310.png'

export default class Footer extends React.Component {
    render() {
        return <div className={style.Footer}>
            <div className={style.compsCont}>
                <p className={style.Text}>365 Freebies. 007/365</p>
            </div>
            <div className={style.compsCont}>
                <img src={image} alt='image' />
            </div>
            <div className={style.compsCont}>
                <p className={style.Text}>@anakarenert</p>
            </div>
        </div>
    }
}