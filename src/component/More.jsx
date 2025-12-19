import React from 'react'
import { Outlet } from 'react-router-dom'

const More = () => {
  return (
    <div className='mt-18'>
      <h1>More</h1>
      <Outlet />
    </div>
  )
}

export default More

const Notification = () => {
  return (
    <h1>Notification</h1>
  )
};
const CustomerCare = () => {
  return (
    <h1>CustomerCare</h1>
  )
};
const Advertise = () => {
  return (
    <h1>Advertise</h1>
  )
};
const DownloadApp = () => {
  return (
    <h1>DownloadApp</h1>
  )
};

export {Notification,CustomerCare,Advertise,DownloadApp};