import React from 'react'
import { Icon } from '@ui-kitten/components'

export default (props) => {
  const { name, color, size, ...args } = props
  return (
    <Icon style={{ width: size, height: size }} name={name} fill={color || '#12C765'} {...args} />
  )
}
