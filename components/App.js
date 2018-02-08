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

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TypeaheadDooring from './TypeaheadDooring'
import TypeaheadShipment from './TypeaheadShipment'
import styles from '../styles/form'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: '',
      title: '',
      date: '',
      sales: '',
      destination: '',
      shipment: '',
      agent: '',
      party: '',
      equipment: '',
      freight: '',
      thc: '',
      trucking: '',
      dooring: '',
      doc: '',
      modal: '',
      price: ''
    };
  }


  renderHeader() {
    return (
      <View style={{backgroundColor: '#48D1CC', height:90}}>
        <Text style={styles.text}>SALES ORDER</Text>
      </View>
    )
  }

  renderButton() {
    return (
      <View style={[styles.button, {paddingBottom:200}]}>
          <Button
            title="Send Mail"/>
      </View>
    )
  }



//Dooring
  renderRoomContainerDooring() {
    let dooringList = [{name:"MGT"},
                       {name:"TROFIS"}]
    return(
      <TypeaheadDooring
        units={dooringList}
        filterGlCode={this.state.dooring}
        changeFilter={this.changeFilterDooring.bind(this)}
        onChange={this.setDooringTypeahead.bind(this)}/>
    )
  }

  setDooringTypeahead(dooring) {
    this.setState({ dooring: dooring })
  }

  changeFilterDooring(filterDooring) {
    this.setState({ dooring: filterDooring})
  }



//Pelayaran
  renderRoomContainerShipment() {
    let shipmentList = [{name:"SPIL"},
                       {name:"MERATUS"},
                       {name:"TEMAS"},
                       {name:"TANTO"}]
    return(
      <TypeaheadShipment
        units={shipmentList}
        filterGlCode={this.state.shipment}
        changeFilter={this.changeFilterShipment.bind(this)}
        onChange={this.setShipmentTypeahead.bind(this)}/>
    )
  }

  setShipmentTypeahead(shipment) {
    this.setState({ shipment: shipment })
  }

  changeFilterShipment(shipment) {
    this.setState({ shipment: shipment})
  }





  render() {
    let header = this.renderHeader()
    let button = this.renderButton()
    let dooring = this.renderRoomContainerDooring()
    let shipment = this.renderRoomContainerShipment()
    return (
      <View>
      {header}
      <View style={styles.container}>
          <ScrollView style={styles.containerForm}>
            <Text style={styles.textTitle}>Sales</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({sales: newText})} value={this.state.sales}
            />
          <Text style={styles.textTitle}>Tujuan</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({destination: newText})} value={this.state.destination}
            />
          <Text style={styles.textTitle}>Pelayaran</Text>
          {dooring}
          <Text style={styles.textTitle}>Agent</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({agent: newText})} value={this.state.agent}
            />
          <Text style={styles.textTitle}>Party</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({party: newText})} value={this.state.party}
            />
          <Text style={styles.textTitle}>Equipment</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({equipment: newText})} value={this.state.equipment}
            />
          <Text style={styles.textTitle}>Freight</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({freight: newText})} value={this.state.freight}
            />
          <Text style={styles.textTitle}>THC</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({thc: newText})} value={this.state.thc}
            />
          <Text style={styles.textTitle}>Trucking</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({trucking: newText})} value={this.state.trucking}
            />
          <Text style={styles.textTitle}>Dooring</Text>
          {dooring}
          <Text style={[styles.textTitle, {marginTop:0}]}>DOC</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({doc: newText})} value={this.state.doc}
            />
          <Text style={styles.textTitle}>Modal</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({modal: newText})} value={this.state.modal}
            />
          <Text style={styles.textTitle}>Harga Jual</Text>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={newText => this.setState({price: newText})} value={this.state.price}
            />
            <TouchableHighlight>
              {button}
            </TouchableHighlight>
          </ScrollView>
      </View>
    </View>
    )
  }
}
