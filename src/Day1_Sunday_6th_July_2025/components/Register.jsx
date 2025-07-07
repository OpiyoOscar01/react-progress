import React from 'react'

export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor='username'>
          Username:
          <input type="text" name="username" />
        </label>
        <label htmlFor='password'>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
