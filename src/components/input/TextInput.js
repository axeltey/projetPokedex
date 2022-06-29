import React from 'react'
import { TextInput as BaseInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

function TextInput (props) {
  return (
    <View>
      {
        props.iconName && (
          <Icon
            name={props.iconName}
            size={30}
          />
        )
      }
      <BaseInput
        {...props}
      />
    </View>
  )
}

export default TextInput
