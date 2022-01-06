import ListItem from './ListItem';

const songsItems = songs.map(song, index) => {
    return <SongItem song={song} key={index}/>
};

return (
    <>
    <ul>
        {songsItems}
    </ul>
    </>
)


export default SongList; 