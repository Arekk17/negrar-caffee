import React from 'react'
import Button from '../Buttons/Button'

const About = () => {
  const handleClickButton = () => {
    console.log('click')
  }
  return (
    <div>
      <div>
        <h2>Welcome to Bartons incredibly</h2>
      </div>
      <div>
        <p>Your best local coffee. In addition to delicious sandwiches and cakes and hot dish of the day, </p>
      </div>
      <div>
        {/* <Button
          onClick={handleClickButton}
          label='Zamów teraz'
        /> */}
      </div>
    </div>
  )
}

export default About
