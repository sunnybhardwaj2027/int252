import React, {useState} from 'react'

const HandleMultpleInput = () => {

    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div>
        <p>name = {form.name}</p>
        <p>email = {form.email}</p>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Write your name...' />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Write your email...'/>
    </div>
  )
}

export default HandleMultpleInput
