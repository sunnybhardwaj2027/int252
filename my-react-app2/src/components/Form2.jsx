import React, { useState } from 'react'

const Form2 = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`hello, your email is ${email}`);
        setEmail('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Please enter a valid email address</p>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form2
