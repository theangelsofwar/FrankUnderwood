import React from 'react';
import { Dimensions, RefreshControl } from 'react-native';
import api from '../../../services/api';


import CsvParse from '@vtex/react-csv-parse';




import {
  TouchableOpacity, 
  Image,
  Container,
  FlatList,
  Header,
  FeedItem,
  UserInfo,
  Name,
  Place,
  Footer,
  Actions,
  Description
} from './styles';


//import images
import Logo from '../../assets/FFC_logo_1.png';



export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft : (
      <TouchableOpacity 
        onPress={() => navigation.navigate('New')}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
          <Image source={Logo} />
        </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        onPress={() => {}}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
          <Image source={send} />
        </TouchableOpacity>
    ),
  });


  state = {
    feed: [],
    refreshing: false,
  };

  componentDidMount() {
    //consider having socket to update inventory quickly...
    this.loadRequest();
  }


  handleData = data => {
    this.setState({data});
  }


  loadRequest = async () => {
    const response = await api.get('inventoryrange');
    //fetches inventory that are within the range of the zip code, extended gps location
    
  }


  render() {
    const keys = ["Item1", "Item2", "Item3"];

    return (
      <CsvParse 
        keys={keys}
        onDataUpload={this.handleData}
        onError={this.handleError}
        render={onChange => <input type="file" onChange={onChange} /> }
      />
    )
  }
}

