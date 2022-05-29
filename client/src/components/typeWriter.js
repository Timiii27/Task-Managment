import React from 'react'
import TypeWriter from 'typewriter-effect'
const typeWriter = ({ string }) => {
  return (
    <TypeWriter

    options={{
      strings: string,
      autoStart: true,
      loop: true

    }}

  />
  )
}

export default typeWriter
