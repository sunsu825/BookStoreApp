import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator, TabNavigator, TabBarBottom, createStackNavigator } from 'react-navigation';

class Bookcase extends React.Component {
  render() {
    //const navigate = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>BookCase!</Text>
        <Button
          title="XXX"
          onPress={() => 
            this.props.navigation.navigate('Setting')
          }/>
      </View>
    );
  }
}

class AddBook extends React.Component {
  render() {
    //const navigate = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Book!</Text>
        <Button
          title="XXX"
          onPress={() => 
            this.props.navigation.navigate('Setting')
          }/>
      </View>
    );
  }
}

class Lists extends React.Component {
  render() {
    //const navigate = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List Book!</Text>
        <Button
          title="XXX"
          onPress={() => 
            this.props.navigation.navigate('Setting')
          }/>
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    //const navigate = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>profile!</Text>
        <Button
          title="XXX"
          onPress={() => 
            this.props.navigation.navigate('Setting')
          }/>
      </View>
    );
  }
}

class Explore extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Explore!</Text>
        <Button
          title="YYY"
          onPress={()=> this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

// let screen = Dimensions.get('window');

// export const Tabs = TabNavigator({
//   'Bookcase': {
//     screen: Bookcase,
//     navigationOptions: {
//       tabBarLabel: 'Bookcase',
//       tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
//     },
//   },
//   'Explore': {
//     screen: Explore,
//     navigationOptions: {
//       tabBarLabel: 'Explore',
//       tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
//     },
//   },
//   'Add Book': {
//     screen: AddBook,
//     navigationOptions: {
//       tabBarLabel: 'Add Book',
//       tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
//     },
//   },
//   'Lists': {
//     screen: ReadingListStack,
//     navigationOptions: {
//       tabBarLabel: 'Lists',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
//     },
//   },
//   'My Profile': {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
//     },
//   },
// });

// export const createRootNavigator = () => {
//   return StackNavigator(
//     {
//       Tabs: {
//         screen: Tabs,
//         navigationOptions: {
//           gesturesEnabled: false
//         }
//       }
//     },
//   );
// };

const App = createBottomTabNavigator(
  {
    Book : { screen : Bookcase },
    Add : { screen : AddBook },
    //Exp : { screen : Explore },
    //Li : { screen : Lists },
    Pro : { screen : Profile }
  },
  {
    navigationOptions: ({navigation})=>({
      tabBarIcon: ({ focused, tintColor })=>{
        const { routeName } = navigation.state;
        let iconName;
        // if(routeName === 'Book'){
        //   iconName = `book`;
        // } else if(routeName === 'Add'){
        //   iconName = `library-add`;
        // }
        switch(routeName){
          case 'Book': 
          iconName = `book`;
          break;

          case 'Add':
          iconName = `library-add`;
          break;

          // case 'Exp':
          // iconName = `window-restore`;
          // break;

          case 'Pro':
          iconName = `face`;
          break;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
