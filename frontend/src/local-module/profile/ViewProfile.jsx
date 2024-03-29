// view profile jsx in my profile section
import React from 'react'
import '../../stylesheets/ViewProfile.css'
import userImage from '../../photos/harry-potter.gif'
function ViewProfile() {
  return (
    <>
    <div className='container '>
    <div className='user-profile-card '>
    <div className='gradient bg-gradient-to-br from-red-950 to-black '></div>
    <div className="user-info-container  border-4 border-black bg-gradient-to-t from-red-300 to-black">
      <div className='imageOfUser'><img className='user-image justify-center' src={userImage} alt="user"/></div>
      <div className='user-name text-center whiltespace-wrap p-3 text-black'>HARRY POTTER</div>
      <div className='user-description text-black'>Hogwarts University</div>
      <div className='email text-black'>Email ID:harry@gmail.com</div>
    </div>
    </div>
    </div>
    </> 
  )
}
export default ViewProfile
