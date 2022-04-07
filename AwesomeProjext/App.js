import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Beranda',
      button: 'Unggah',
      value: true,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barstyle="light-content" backgroundColor="#000" />
        <View
          style={{
            backgroundColor: 'crimson',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            {this.state.header}
          </Text>
        </View>

        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => console.log('Tombol di Tekan')}>
          <Switch
            value={this.state.value}
            onValueChange={() =>
              this.setState({value: !this.state.value})
            }></Switch>
        </TouchableOpacity>

        {/* GAMBAR LURING */}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.7,
            padding: 50,
          }}
          onPress={() => console.log('Gambar di tekan')}>
          <Image
            source={require('./src/img/RN-logo.png')}
            style={{width: 450, marginTop: 50}}
            resizeMode="contain"></Image>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'crimson',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 50,
            marginHorizontal: 150,
            borderRadius: 50,
            elevation: 3,
          }}
          onPress={() => console.log('Unggah di tekan')}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>
            {this.state.button}
          </Text>
        </TouchableOpacity>

        {/* GAMBAR DARING */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              url: 'https://www.amcharts.com/wp-content/uploads/2016/08/react.png',
            }}
            style={{width: 300, height: 300}}></Image>
        </View>
      </View>
    );
  }
}

export default App;
