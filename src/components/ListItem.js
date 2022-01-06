const ListItem = ({song, key}) => {
    return (
        <p>Position: {key} Artist: {song["im:artist"].label} Title: {song["im:name"].label}</p>
    )
        
    
}

export default ListItem;