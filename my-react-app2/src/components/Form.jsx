import { useState} from 'react'

const Form = () => {
    const [name, setName] = useState('');

  return (
    <div>
        <label htmlFor="name">Enter Your name:</label>
        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Form
