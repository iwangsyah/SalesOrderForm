import React from 'react'
import {
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native'

import TypeaheadTrucking from '../TypeaheadTrucking'
import TypeaheadShipment from '../TypeaheadShipment'
import TypeaheadDestination from '../TypeaheadDestination'
import TypeaheadDooring from '../TypeaheadDooring'
import styles from '../../styles/form'
import {send} from '../action'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: '',
      destination: '',
      shipment: '',
      trucking: '',
      agentDooring: '',
      party: '',
      descOfGood: '',
      freight: '',
      thc: '',
      truckingPrice: '',
      dooringPrice: '',
      doc: '',
      modal: '',
      price: '',
      click: false,
      clickYes: false,
      statue: true,
      destinationList: [{kode:"BLW", name:"(BLW) - Belawan", door:"(BLW) - CV Armada Sejahtera Trans"},
                       {kode:"PKU", name:"(PKU) - Pekanbaru", door:"(PKU) - PT. Sarana Tata Indoraya"},
                       {kode:"BTM", name:"(BTM) - Batam", door:"(BTM) - PT. Melvin Prima Perkasa"},
                       {kode:"BJM", name:"(BJM) - Banjarmasin", door:"(BJM) - PT. Putra Fajar Samudra Indonesia"},
                       {kode:"BPN", name:"(BPN) - Balikpapan", door:"(BPN) - PT. Wahyu Abadi Transport"},
                       {kode:"SMD", name:"(SMD) - Samarinda", door:"(SMD) - PT. Karya Prima Nusantara"},
                       {kode:"TRK", name:"(TRK) - Tarakan", door:"(TRK) - PT. Wira Laut"},
                       {kode:"BRU", name:"(BRU) - Berau", door:"(BRU) - TKBM BERAU"},
                       {kode:"NKN", name:"(NKN) - Nunukan", door:"(NKN) - PELINDO NUNUKAN"},
                       {kode:"SPT", name:"(SPT) - Sampit", door:"(SPT) - PT. Palapa Wahana Sakti"},
                       {kode:"PNK", name:"(PNK) - Pontianak", door:"(PNK) - EMKL Syah Berkah Mandiri"},
                       {kode:"BLN", name:"(BLN) - Batulicin", door:"(BLN) - EMKL Sriwijaya"},
                       {kode:"MKS", name:"(MKS) - Makassar", door:"(MKS) - EMKL Tuas Jaya"},
                       {kode:"BAU", name:"(BAU) - Bau Bau", door:"(BAU) - EMKL Aman Samudera Lines"},
                       {kode:"BIT", name:"(BIT) - Bitung", door:"(BIT) - EMKL Mitra Jasa Trans"},
                       {kode:"TNT", name:"(TNT) - Ternate", door:"(TNT) - EMKL Artha Jaya"},
                       {kode:"TUL", name:"(TUL) - Tual", door:"(TUL) - EMKL Martul Jaya"},
                       {kode:"SON", name:"(SON) - Sorong", door:"(SON) - EMKL Rabani Tembalo"},
                       {kode:"JYP", name:"(JYP) - Jayapura", door:"(JYP) - EMKL Alamha Irian Pratama"},
                       {kode:"NAB", name:"(NAB) - Nabire", door:"(NAB) - EMKL Jasa Karunia Mandiri"},
                       {kode:"MNK", name:"(MNK) - Manokwari", door:"(MNK) - EMKL Tanjung Bakaro"},
                       {kode:"BIK", name:"(BIK) - Biak", door:"(BIK) - EMKL IRJA Teluk Matabori"},
                       {kode:"SRU", name:"(SRU) - Serui", door:"(SRU) - EMKL Pelabuhan Wapnor"},
                       {kode:"FFK", name:"(FFK) - Fak Fak", door:"(FFK) - EMKL Tanbers"},
                       {kode:"KMN", name:"(KMN) - Kaimana", door:"(KMN) - EMKL Tanbers"},
                       {kode:"TMK", name:"(TMK) - Timika", door:"(TMK) - EMKL Citra Baru Lintas Papua"},
                       {kode:"MRK", name:"(MRK) - Merauke", door:"(MRK) - EMKL Merauke Nusantara Jaya"},]
    };
    this.send = this.send.bind(this)
  }

  renderHeader() {
    return (
      <View style={{backgroundColor: '#48D1CC', height:90}}>
        <Text style={styles.text}>SALES ORDER</Text>
        <Text style={styles.company}>PT. NEOINTERNUSA</Text>
      </View>
    )
  }

  renderButton() {
    return (
      <View style={[styles.button, {paddingBottom:200}]}>
      <TouchableOpacity onPress={{}}>
          <Button
            onPress={this.send}
            color= {this.state.click ? 'grey' : "rgb(0, 150, 139)"}
            title="Send Mail"/>
        </TouchableOpacity>
      </View>
    )
  }

  send() {
    this.setState({ click: true })
    Alert.alert(
      '',
      'Yakin Mengirim Pesan Ini ?',
      [
        {text: 'Batal', onPress: () => { this.setState({ click: false })}},
        {text: 'Ya', onPress: () => {
          send(this.state),
          this.setState({
            sales: '',
            destination: '',
            shipment: '',
            trucking: '',
            agentDooring: '',
            party: '',
            descOfGood: '',
            freight: '',
            thc: '',
            truckingPrice: '',
            dooringPrice: '',
            doc: '',
            modal: '',
            price: '',
            clickYes: true
          }),
          this.sendAlert()
        }},
      ],
      { cancelable: false }
    )
  }

  sendAlert() {
    Alert.alert(
      '',
      'Pesan Telah Terkirim',
      [
        {text: 'OK', onPress: () => {
          this.setState({ click: false })
        }},
      ],
      { cancelable: false }
    )
  }


  //Destination
    renderRoomContainerDestination() {
      return(
        <TypeaheadDestination
          units={this.state.destinationList}
          filterGlCode={this.state.destination}
          clickYes={this.state.clickYes}
          changeFilter={this.changeFilterDestination.bind(this)}
          onChange={this.setDestinationTypeahead.bind(this)}/>
      )
    }

    setDestinationTypeahead(destination) {
      this.setState({ destination: destination })
    }

    changeFilterDestination(destination) {
      this.setState({ destination: destination})
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
          clickYes={this.state.clickYes}
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
        clickYes={this.state.clickYes}
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


  //AgentDooring
    renderRoomContainerAgentDooring() {
      return(
        <TypeaheadDooring
          units={this.state.destinationList}
          filterGlCode={this.state.agentDooring}
          clickYes={this.state.clickYes}
          changeFilter={this.changeFilterAgentDooring.bind(this)}
          onChange={this.setAgentDooringTypeahead.bind(this)}/>
      )
    }

    setAgentDooringTypeahead(agentDooring) {
      this.setState({ agentDooring: agentDooring })
    }

    changeFilterAgentDooring(agentDooring) {
      this.setState({ agentDooring: agentDooring})
    }


  render() {
    let header = this.renderHeader()
    let button = this.renderButton()
    let trucking = this.renderRoomContainerTrucking()
    let shipment = this.renderRoomContainerShipment()
    let destination = this.renderRoomContainerDestination()
    let agentDooring = this.renderRoomContainerAgentDooring()
    return (
      <View>
      {header}
      <View style={styles.container}>
          <ScrollView style={styles.containerForm}>

            <Text style={styles.textTitle}>Sales</Text>
            <View style={styles.input}>
              <TextInput
                autoCorrect={false}
                style={{paddingBottom:0}}
                returnKeyType='done'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({sales: newText})}
                value={this.state.sales}
              />
            </View>

            <Text style={styles.textTitle}>Tujuan</Text>
            {destination}

            <Text style={styles.textTitle}>Pelayaran</Text>
            {shipment}

            <Text style={styles.textTitle}>Trucking</Text>
            {trucking}

            <Text style={styles.textTitle}>Agent Dooring</Text>
            {agentDooring}

            <Text style={styles.textTitle}>Party</Text>
            <View style={styles.input}>
              <TextInput
                autoCorrect={false}
                style={{paddingBottom:0}}
                returnKeyType='done'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({party: newText})}
                value={this.state.party}
              />
            </View>

            <Text style={styles.textTitle}>Desc. of Good</Text>
            <View style={styles.input}>
              <TextInput
                autoCorrect={false}
                style={{paddingBottom:0}}
                returnKeyType='done'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({descOfGood: newText})}
                value={this.state.descOfGood}
              />
            </View>

            <Text style={styles.textTitle}>Freight</Text>
            <View style={styles.input}>
              <TextInput
                autoCorrect={false}
                style={{paddingBottom:0}}
                returnKeyType='done'
                underlineColorAndroid='transparent'
                onChangeText={newText => this.setState({freight: newText})}
                value={this.state.freight}
                type='number'
                keyboardType='numeric'
              />
            </View>

            <Text style={styles.textTitle}>THC</Text>
            <View style={styles.input}>
              <TextInput
                  autoCorrect={false}
                  style={{paddingBottom:0}}
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({thc: newText})}
                  value={this.state.thc}
                  type='number'
                  keyboardType='numeric'
                />
            </View>

            <Text style={styles.textTitle}> Harga Trucking</Text>
            <View style={styles.input}>
              <TextInput
                  autoCorrect={false}
                  style={{paddingBottom:0}}
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({truckingPrice: newText})}
                  value={this.state.truckingPrice}
                  type='number'
                  keyboardType='numeric'
                />
            </View>

            <Text style={styles.textTitle}>Harga Dooring</Text>
            <View style={styles.input}>
              <TextInput
                  autoCorrect={false}
                  style={{paddingBottom:0}}
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({dooringPrice: newText})}
                  value={this.state.dooringPrice}
                  type='number'
                  keyboardType='numeric'
                />
            </View>

            <Text style={[styles.textTitle, {marginTop:0}]}>DOC</Text>
            <View style={styles.input}>
              <TextInput
                  autoCorrect={false}
                  style={{paddingBottom:0}}
                  returnKeyType='done'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({doc: newText})}
                  value={this.state.doc}
                  type='number'
                  keyboardType='numeric'
                />
            </View>

            <Text style={styles.textTitle}>Modal</Text>
            <View style={styles.input}>
              <TextInput
                  autoCorrect={false}
                  style={{paddingBottom:0}}
                  returnKeyType='next'
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({modal: newText})}
                  value={this.state.modal}
                  type='number'
                  keyboardType='numeric'
                />
            </View>

            <Text style={styles.textTitle}>Harga Jual</Text>
            <View style={styles.input}>
              <TextInput
                  autoCorrect={false}
                  style={{paddingBottom:0}}
                  underlineColorAndroid='transparent'
                  onChangeText={newText => this.setState({price: newText})}
                  value={this.state.price}
                  type='number'
                  keyboardType='numeric'
                />
            </View>

            {button}

          </ScrollView>
      </View>
    </View>
    )
  }
}
