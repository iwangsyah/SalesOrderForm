import React, { PropTypes, Component } from 'react'
import { View, Text, TextInput, ListView, TouchableOpacity, ScrollView } from 'react-native'
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import _ from 'lodash'
import styles from '../styles/typeaheadDooring'
import styless from '../styles/form'

//
// TODO: Implement completed results caching
//
export default class TypeaheadUnit extends Component {

  static defaultProps = {
    urlOptions: {},
    autoFocus: false
  }

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      filterGlCode: this.props.filterGlCode,
      expanded: false,
      dataSource: ds.cloneWithRows([]),
      unitz: this.props.units
    }
  }

  render() {
    let { units } = this.props
    let { filterGlCode, dataSource, expanded } = this.state
    let customStyle = {}
    let listView = null

    if (expanded) {
      listView = (
      <View style={{backgroundColor:'rgb(232,234,236)', width:'90%', alignSelf:'center'}}>
        <ListView
          style={styles.listView}
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
      )
      customStyle = { height: 41 * (dataSource.getRowCount() + 1) }
    } else {
      customStyle = { height: 41 }
    }

    return (
      <View style={[styles.typeahead, customStyle]}>
        <View style={styless.input}>
          <TextInput
            underlineColorAndroid='transparent'
            value={filterGlCode}
            autoCorrect={false}
            style={{paddingBottom:0}}
            returnKeyType='done'
            keyboardType='ascii-capable'
            onChangeText={this.onChangeFilter.bind(this)} />
        </View>
        {listView}
      </View>
    )
  }

  renderRow(item) {
    return (
      <TouchableOpacity onPress={this.selectItem.bind(this, item)}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  onChangeFilter(filterGlCode) {
    let { changeFilter } = this.props
    let filter = filterGlCode
    let invalid = /[()\[\]+*\\?]+/g;
    filterGlCode = filterGlCode.replace(invalid, "");
    this.setState({ filterGlCode: filterGlCode, expanded: (_.trim(filterGlCode) != '') })
    changeFilter(filterGlCode)
    this.loadItems(filterGlCode)
  }

  loadItems(filterGlCode) {
    let { units } = this.props
    let unit = _.map(units, 'door')
    let filter = new RegExp(filterGlCode, "i")
    let unitFilter = _.filter(unit, function(i) { return i.match(filter); });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(unitFilter)
    })
  }

  selectItem(item) {
    let { getItemText, onChange, units } = this.props
    let dooring = _.find(units, { 'door': item })
    this.setState({ filterGlCode: item, expanded: false })
    onChange(item)
  }
}
