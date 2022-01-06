import ListItem from './ListItem';

const SongList = ({songs}) => {
    const songsItems = songs.map((song, index) => {
        return <ListItem song={song} key={index}/>
    });
    
    return (
        <>
        <ul>
            {songsItems}
        </ul>
        </>
    );

}




export default SongList; 