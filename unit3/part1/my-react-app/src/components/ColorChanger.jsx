function ColorChanger(){
    let red = 0, green = 0, blue = 0;
    
    return (
        <>
        <div>
            <div>color = rgb({red}, {blue}, {green})</div>
            <button>change color</button>
        </div>
        </>
    )
}

export default ColorChanger;