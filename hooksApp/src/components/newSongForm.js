import React, { useState }from 'react';

const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('');
    const HandleChange = e => {
        setTitle(e.target.value)
    }
    const HandleSubmit = e => {
        e.preventDefault();
        addSong(title)

        setTitle('')
    }
    return (
        <form onSubmit={HandleSubmit}>
             <label>Song name</label>
             <input type="text" value={title} required onChange={HandleChange} />
             <input type="submit" value='add song' />
        </form>
    )
}

export default NewSongForm;
