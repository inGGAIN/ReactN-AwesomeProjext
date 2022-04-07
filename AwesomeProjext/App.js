import React, {Component} from 'react';
import {Text, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            fontStyle: 'normal',
            textAlign: 'auto',
            letterSpacing: 5,
            // textDecorationLine: 'underline line-through',
          }}>
          <Text style={{color: 'crimson'}}>Sholat Woi!</Text>
          <Text style={{color: 'cyan', fontSize: 48}}>Udah</Text>
        </Text>

        <View
          style={{
            // FLEX

            flex: 1,
            flexDirection: 'row-reverse',
            // width: 100,
            // height: 100,
            backgroundColor: 'crimson',

            // MARGIN
            // marginHorizontal: 20,
            // marginVertical: 20,
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,

            // PADDING
            // padding: 2,
            // paddingHorizontal: 20,
            // paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Woi! Lah</Text>
          <Text>Woi! Lah</Text>
        </View>
      </View>
    );
  }
}

export default App;
