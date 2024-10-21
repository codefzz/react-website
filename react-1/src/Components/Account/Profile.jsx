import React, { useContext } from 'react'
import { useAuth } from '../../hooks/useAuth'


const Profile = () => {

  const user = useContext(useAuth);

  const handleLogout = () => {
    localStorage.clear();
    setUser('')
  };
  if(!user) return <h4>You are not signed</h4>
  return (
    <>
      <div>Welcome {user.username}</div>
      <button on click={handleLogout}>Logout</button>
      <Hero />
      <CategoryList />
    </>
  )
};

export default Profile;
