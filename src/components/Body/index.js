import React from 'react'
import Button from './Button'
import Counter from './Counter'
import Photo from './252.png'
import style from './style.module.css'

export default props => {
    const [counterFollowers, setCounterFollowers] = React.useState(4356)
    const [counterFollowing, setCounterFollowing] = React.useState(532)

    return (
        <div className={style.Body}>
            <div>
                <div>
                    <p className={style.bodyHeader}>
                        John Doe Profile
                    </p>
                    <hr />
                </div>
                <div>
                    <img src={Photo} alt='userPhoto' className={style.ImgPhoto} />
                </div>
                <div className={style.MainWrapper}>
                    <div className={style.Wrapper}>
                        <div className={style.Text}>
                            <Counter counterValue={counterFollowers} />
                            <p className={style.Text}>Followers</p>
                        </div>
                        <div className={style.Wrapper2}>
                            <Button buttonClick ={() => setCounterFollowers(counterFollowers+1)} Symbol='+' />
                            <Button buttonClick ={() => setCounterFollowers(counterFollowers-1)} Symbol='-' />
                        </div>
                    </div>
                    <div className={style.Wrapper3}>
                        <div className={style.Text}>
                            <Counter counterValue={counterFollowing} />
                            <p className={style.Text}>Following</p>
                        </div>
                        <div className={style.Wrapper2}>
                        <Button buttonClick ={() => setCounterFollowing(counterFollowing+1)} Symbol='+' />
                        <Button buttonClick ={() => setCounterFollowing(counterFollowing-1)} Symbol='-' />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}