import React, { useState, useEffect } from 'react';
import NewSongForm from './newSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory gospel', id: 2},
        {title: 'this wild darkness', id: 3},
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, {title, id: Math.random()}])
    }
    const IncreaseAge = () => {
        setAge(age + 1)
    }
    useEffect(() => {
        console.log('use effect hook ran', songs);
    },[songs])
    return (
        <div className='song-list'>
            <ul>
                {
                    songs.map(song => {
                        return(
                            <h1 key={song.id}>{song.title}</h1>
                        )
                    })
                }
            </ul>
            <NewSongForm addSong={ addSong } />
            <button onClick={IncreaseAge}>Increase Age : {age}</button>
        </div>
    )
}

export default SongList;
