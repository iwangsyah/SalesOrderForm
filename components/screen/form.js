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
import TypeaheadDooring from '../TypeaheadDooring'
import TypeaheadShipment from '../TypeaheadShipment'
import styles from '../../styles/form'
import {send} from '../action'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.send = this.send.bind(this)
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
            onPress={this.send}
            title="Send Mail"/>
      </View>
    )
  }

  send() {
    console.log(this.state);
    let nama = "wahyu"
    let umur = 22
    send(nama,umur, this.state)
  }



//Dooring
  renderRoomContainerDooring() {
    let dooringList = [{name:"MGT"},
                       {name:"TROFIS"}]
    return(
      <TypeaheadDooring
        ref='ThirdInput'
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
            <View style={styles.input}>
              <TextInput
                autoCorrect={false}
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({sales: newText})}
                value={this.state.sales}
                onSubmitEditing={(event) => {this.refs.SecondInput.focus()}}
              />
            </View>

            <Text style={styles.textTitle}>Tujuan</Text>
            <View style={styles.input}>
              <TextInput
                ref='SecondInput'
                autoCorrect={false}
                returnKeyType='done'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({destination: newText})}
                value={this.state.destination}
              />
            </View>

            <Text style={styles.textTitle}>Pelayaran</Text>
            {shipment}

            <Text style={styles.textTitle}>Agent</Text>
            <View style={styles.input}>
              <TextInput
                ref='FourInput'
                autoCorrect={false}
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({agent: newText})}
                value={this.state.agent}
                onSubmitEditing={(event) => {this.refs.FiveInput.focus()}}
              />
            </View>

            <Text style={styles.textTitle}>Party</Text>
            <View style={styles.input}>
              <TextInput
                ref='FiveInput'
                autoCorrect={false}
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({party: newText})}
                value={this.state.party}
                onSubmitEditing={(event) => {this.refs.SixInput.focus()}}
              />
            </View>

            <Text style={styles.textTitle}>Equipment</Text>
            <View style={styles.input}>
              <TextInput
                ref='SixInput'
                autoCorrect={false}
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({equipment: newText})}
                value={this.state.equipment}
                onSubmitEditing={(event) => {this.refs.SevenInput.focus()}}
              />
            </View>

            <Text style={styles.textTitle}>Freight</Text>
            <View style={styles.input}>
              <TextInput
                ref='SevenInput'
                autoCorrect={false}
                returnKeyType='next'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({freight: newText})}
                value={this.state.freight}
                onSubmitEditing={(event) => {this.refs.EightInput.focus()}}
              />
            </View>

            <Text style={styles.textTitle}>THC</Text>
            <View style={styles.input}>
              <TextInput
                  ref='EightInput'
                  autoCorrect={false}
                  returnKeyType='next'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({thc: newText})}
                  value={this.state.thc}
                  onSubmitEditing={(event) => {this.refs.NineInput.focus()}}
                />
            </View>

            <Text style={styles.textTitle}>Trucking</Text>
            <View style={styles.input}>
              <TextInput
                  ref='NineInput'
                  autoCorrect={false}
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({trucking: newText})}
                  value={this.state.trucking}
                />
            </View>

            <Text style={styles.textTitle}>Dooring</Text>
            {dooring}

            <Text style={[styles.textTitle, {marginTop:0}]}>DOC</Text>
            <View style={styles.input}>
              <TextInput
                  ref='ElevenInput'
                  autoCorrect={false}
                  returnKeyType='next'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({doc: newText})}
                  value={this.state.doc}
                  onSubmitEditing={(event) => {this.refs.TwelveInput.focus()}}
                />
            </View>

            <Text style={styles.textTitle}>Modal</Text>
            <View style={styles.input}>
              <TextInput
                  ref='TwelveInput'
                  autoCorrect={false}
                  returnKeyType='next'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({modal: newText})}
                  value={this.state.modal}
                  onSubmitEditing={(event) => {this.refs.ThirteenInput.focus()}}
                />
            </View>

            <Text style={styles.textTitle}>Harga Jual</Text>
            <View style={styles.input}>
              <TextInput
                  ref='ThirteenInput'
                  autoCorrect={false}
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({price: newText})}
                  value={this.state.price}
                />
            </View>

            <TouchableHighlight>
              {button}
            </TouchableHighlight>

          </ScrollView>
      </View>
    </View>
    )
  }
}
