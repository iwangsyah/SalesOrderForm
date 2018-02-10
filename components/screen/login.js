import React from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
    };
  }

  render() {
     return (
       // Try setting `alignItems` to 'flex-start'
       // Try setting `justifyContent` to `flex-end`.
       // Try setting `flexDirection` to `row`.
       <View style={{
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
       }}>
         <View style={{width: '80%', height: '20%', backgroundColor: 'skyblue'}}>
          <Text>Masuk dengan Email</Text>
         </View>
       </View>
     );
   }
}
