function Greeting({name, age, isLoggedIn, children}){

    if(!isLoggedIn){
        return <p>Please Login first.</p>
    }

    const boxStyle = {
        backgroundColor: "pink",
        color: "brown",
        padding: 20,
        marginTop : 10,
        border: "2px solid brown",
        borderRadius: "10px",
    }

    function isTrue(){
        return (
            <div style={{
                backgroundColor : "pink",
                color : "brown",
                padding : 20,
            }}>
                <p>Welcome, {props.name}</p>
                <p>Access granted!</p>
                {props.age < 18 ? <p>you are not eligible</p> : <p>you are elegible</p>}
            </div>
        )
    }

    function isFalse(){
        return (
            <p>Please login first.</p>
        )
    }
    return (
        <div style={boxStyle}>
            <p>Welcome, {name}</p>

            {age < 18 ? (
                <p>You are not eligible.</p>
            ): (
                <p>Access Granted!</p>
            )}
        </div>
    )
}

export default Greeting;