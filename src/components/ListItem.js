const ListItem = ({song, index}) => {
    return (
        <li>Position: {index + 1} - Artist: {song["im:artist"].label} - Title: {song["im:name"].label}</li>
    )
        
    
}

export default ListItem;