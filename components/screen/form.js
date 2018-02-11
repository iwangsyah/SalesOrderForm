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
import TypeaheadTrucking from '../TypeaheadTrucking'
import TypeaheadShipment from '../TypeaheadShipment'
import TypeaheadDestination from '../TypeaheadDestination'
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
    send(nama,umur)
  }


  //Destination
    renderRoomContainerDestination() {
      let destinationList = [{name:"Belawan"},
                             {name:"Pekanbaru"},
                             {name:"Batam"},
                             {name:"Banjarmasin"},
                             {name:"Balikpapan"},
                             {name:"Samarinda"},
                             {name:"Tarakan"},
                             {name:"Berau"},
                             {name:"Nunukan"},
                             {name:"Sampit"},
                             {name:"Pontianak"},
                             {name:"Batu Licin"},
                             {name:"Makassar"},
                             {name:"Bau Bau"},
                             {name:"Bitung"},
                             {name:"Ternate"},
                             {name:"Tual"},
                             {name:"Sorong"},
                             {name:"Jayapura"},
                             {name:"Nabire"},
                             {name:"Manokwari"},
                             {name:"Biak"},
                             {name:"Serui"},
                             {name:"Fak Fak"},
                             {name:"Kaimana"},
                             {name:"Timika"},
                             {name:"Merauke"},]
      return(
        <TypeaheadDestination
          units={destinationList}
          filterGlCode={this.state.destination}
          changeFilter={this.changeFilterDestination.bind(this)}
          onChange={this.setDestinationTypeahead.bind(this)}/>
      )
    }

    setDestinationTypeahead(shipment) {
      this.setState({ shipment: shipment })
    }

    changeFilterDestination(shipment) {
      this.setState({ shipment: shipment})
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



//Trucking
  renderRoomContainerTrucking() {
    let truckingList = [{name:"MGT"},
                       {name:"TROFIS"},
                       {name:"AST"}]
    return(
      <TypeaheadTrucking
        units={truckingList}
        filterGlCode={this.state.trucking}
        changeFilter={this.changeFilterTrucking.bind(this)}
        onChange={this.setTruckingTypeahead.bind(this)}/>
    )
  }

  setTruckingTypeahead(trucking) {
    this.setState({ trucking: trucking })
  }

  changeFilterTrucking(filterTrucking) {
    this.setState({ trucking: filterTrucking})
  }




  render() {
    let header = this.renderHeader()
    let button = this.renderButton()
    let trucking = this.renderRoomContainerTrucking()
    let shipment = this.renderRoomContainerShipment()
    let destination = this.renderRoomContainerDestination()
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
            {destination}

            <Text style={styles.textTitle}>Pelayaran</Text>
            {shipment}

            <Text style={styles.textTitle}>Trucking</Text>
            {trucking}

            <Text style={styles.textTitle}>Agent Dooring</Text>
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

            <Text style={styles.textTitle}>Desc. of Good</Text>
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
                keyboardType='numeric'
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

            <Text style={styles.textTitle}> Harga Trucking</Text>
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

            <Text style={styles.textTitle}>Harga Dooring</Text>
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

              {button}

          </ScrollView>
      </View>
    </View>
    )
  }
}
