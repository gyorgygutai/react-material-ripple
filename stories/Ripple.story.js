import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Ripple from '../components'

const buttonStyles = {
  margin: 0,
  fontSize: '20px',
  color: 'white',
  border: 'none',
  padding: '30px 40px',
  backgroundColor: 'green',
  userSelect: 'none',
  webkitUserSelect: 'none'
}

const roundedButtonStyles = {
  ...buttonStyles,
  color: 'black',
  backgroundColor: 'tomato',
  borderRadius: '16px',
  padding: '40px 120px'
}

storiesOf('Ripple', module)
  .add('with a div', () => (
    <Ripple style={{maxWidth: '400px'}}>
      <div style={{backgroundColor: 'tomato', padding: '20px'}}>
        “Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.”
        ― Leonardo da Vinci
      </div>
    </Ripple>
  ))
  .add('with a button', () => (
    <Ripple>
      <button style={buttonStyles}>
        Click me!
      </button>
    </Ripple>
  ))
  .add('with a rounded button', () => (
    <Ripple style={{borderRadius: roundedButtonStyles.borderRadius}}>
      <button style={roundedButtonStyles}>
        I'd tap that!
      </button>
    </Ripple>
  ))
