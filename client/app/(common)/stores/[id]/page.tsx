import React from 'react'
const bgimg = '/bg-paper-type.png';
const backgroundStyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};
const page = () => {
  return (
    <div style={backgroundStyle}>page</div>
  )
}

export default page