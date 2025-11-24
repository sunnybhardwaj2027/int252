import { useState, useEffect } from 'react';

function AvoidMutation(){
    const [user, setUser] = useState({ name: "sunny", age: 21});

    useEffect(() => {
      setUser(prev => ({...prev, age : prev.age+1}));
    }, []) // empty array => run only once on mount

    return (
        <p>{user.name} is {user.age} years old.</p>
    )
}

export default AvoidMutation;