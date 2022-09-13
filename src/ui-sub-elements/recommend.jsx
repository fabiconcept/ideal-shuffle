import React from 'react'

const Recommend = ({img}) => {
    return (
        <div className={`recommend-card`}>
            <img src={img} alt="" />
            <div className="text"><span>Check out Fireboy new Album</span><br /> <span className="txt">Fireboy Playboy</span></div>
            <div className="but">Play now</div>
        </div>
    )
}

export default Recommend;