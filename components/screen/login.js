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
import styles from '../../styles/form'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
    };
  }

  render() {
     return (
       <View style={{
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
       }}>
         <View style={{width: '80%', height: '20%', backgroundColor: 'skyblue'}}>
          <Text>Masuk dengan Email</Text>
          <TextInput
            autoCorrect={false}
            underlineColorAndroid='transparent'
            placeholder='Email'
            placeholderTextColor='grey'
            autoCapitalize='none'
            style={styles.input}
            onChangeText={newText => this.setState({userEmail: newText})} value={this.state.userEmail}
          />
              <Button
                onPress={this.send}
                title="Send Mail"/>
         </View>
       </View>
     );
   }
}
