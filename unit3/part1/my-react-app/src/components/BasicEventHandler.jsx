function BasicEventHandler(){
    function handleClick(){
        console.log('button clicked using function');
    }

    function handleClick2(num){
        console.log('value is: ', num);
    }

    function HandleInput(e){
        console.log(e.target.value);
    }

    return (
        <div>
            {/*  inline  */}
            <button onClick={() => console.log('inline button clicked!')}>inline Button</button>

             {/* using a function */}
            <button onClick={handleClick}>function Button</button>

            {/* passing arguments to event handlers */}
            {/* <button onClick={handleClick2(5)}>click</button> --> wrong -> runs immediately without clicking on the button */}

            {/* --- correct --> use an arrow function */}
            <button onClick={() => handleClick2(5)}>click</button>

            <input type="text" onChange={HandleInput} />

        </div>
        
    )
}

export default BasicEventHandler;