import { useState, useEffect } from 'react';
import SongList from '../components/SongList';

const SongContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, []);

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(data => setSongs(data.entry));
    };

    return (
        <>
            <SongList songs={songs}/>
        </>
    )
};

export default SongContainer;