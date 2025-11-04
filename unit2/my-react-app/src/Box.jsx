function Box({color, place}){
    const style = {
        backgroundColor : color,
        padding : '10px',
        borderRadius : '8px'
    }
    return <div style={style}>Box</div>
}

export default Box