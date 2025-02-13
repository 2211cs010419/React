import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type="username" />
        <br />
        <label>Password</label>
        <input type="password" />
        <br />
        <label>Gender</label>
        <input type="radio" />
      </form>
    </div>
  )
}

export default Dashboard