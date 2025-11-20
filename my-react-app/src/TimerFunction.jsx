import {useState, useEffect} from 'react';

export default function TimerFunction(){
    const [isDisabled, setIsDisabled] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDisabled(true);
            setMessage('button is not clickable after 5 seconds');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <button disabled={isDisabled}>click me</button>
            {message && <p>{message}</p>}
        </div>
        
    )
}