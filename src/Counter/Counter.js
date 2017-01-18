import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'

export default class Counter extends Component {
  static propTypes = {
    startValue: PropTypes.number,
    step: PropTypes.number,
    onValueChange: PropTypes.func,
  }

  static defaultProps = {
    startValue: 1,
    step: 1,
    onValueChange: value => value,
  }

  state = {
    count: this.props.startValue,
  }

  onPressPlus = () => {
    const newCount = this.state.count + this.props.step
    this.setState({ count: newCount })
    this.props.onValueChange(newCount)
  }

  onPressMinus = () => {
    const newCount = this.state.count - this.props.step
    this.setState({ count: newCount })
    this.props.onValueChange(newCount)
  }

  onPressPlus = () => {
    const newCount = this.state.count + this.props.step
    this.setState({ count: newCount })
    this.props.onValueChange(newCount)
  }

  onPressMinus = () => {
    const newCount = this.state.count - this.props.step
    this.setState({ count: newCount })
    this.props.onValueChange(newCount)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressMinus}>
          <Text style={[styles.exp, styles.left]}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={[styles.exp, styles.center]}>
          {this.state.count}
        </Text>
        <TouchableOpacity onPress={this.onPressPlus}>
          <Text style={[styles.exp, styles.right]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 40,
    height: 40,
    borderWidth: 1,
    fontSize: 20,
    borderColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'aliceblue',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  center: {
    width: 80,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#ffffff',
  },
  left: {
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
  },
  right: {
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
  },
  expText: {
    fontSize: 25,
    lineHeight: 25,
    textAlign: 'center',
    // Temporary solution for an Android.
    // https://github.com/facebook/react-native/issues/7546
    // https://github.com/facebook/react-native/issues/10712
    marginBottom: Platform.select({
      ios: 0,
      android: 5,
    }),
  },
  centerText: {
    fontSize: 25,
    textAlign: 'center',
  },
  exp: {
    width: 40,
    height: 40,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'gainsboro',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
