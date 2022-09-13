import React from 'react';



const Songlist = ({data, loadedSong, seLoadedSong, extra}) => {
    const dataMain = data;
    let m = 0;

    return (
        <div className={`songlist ${extra}`}>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Title</td>
                        <td className='artist'>Artist</td>
                        <td className='time'>Time</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {dataMain?.map(item => (
                        extra ? (m++< 5 &&<tr key={item.id} className={`${dataMain[loadedSong].id === item.id && "hover"}`}>
                            <td>{item.id}</td>
                            <td onClick={()=>seLoadedSong((parseInt(item.id)-1))}><div className="song"><div className="img"><img src={item.img} alt="" /></div> <span>{item.title}</span></div></td>
                            <td className='artist'>{item.artist}</td>
                            <td className='time'>{item.time}</td>
                            <td className='action'>:</td>
                        </tr>):
                        (<tr key={item.id} className={`${dataMain[loadedSong].id === item.id && "hover"}`}>
                        <td>{item.id}</td>
                        <td onClick={()=>seLoadedSong((parseInt(item.id)-1))}><div className="song"><div className="img"><img src={item.img} alt="" /></div> <span>{item.title}</span></div></td>
                        <td className='artist'>{item.artist}</td>
                        <td className='time'>{item.time}</td>
                        <td className='action'>:</td>
                    </tr>)
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Songlist;