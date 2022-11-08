import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Screen_1() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FF1744'
      }}>

      <Text style={styles.TextStyle}> This is Screen 1 ! </Text>

    </View>
  );
}

function Screen_2() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#33691E'
      }}>

      <Text style={styles.TextStyle}> This is Screen 2 ! </Text>

    </View>
  );
}

function Screen_3() {
  return (
    <View style={{ flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FF6F00' 
      }}>

      <Text style={styles.TextStyle}> This is Screen 3 ! </Text>

    </View>
  );
}

function CustomTabBar(props) {

  const navigateToFirstScreen=()=>{
     props.navigation.navigate('Screen_1') ;
   }

   const navigateToSecondScreen=()=>{
    props.navigation.navigate('Screen_2') ;
  }

  const navigateToThirdScreen=()=>{
    props.navigation.navigate('Screen_3') ;
  }

  return (
    
    <View style={styles.TabBarMainContainer} >

        <TouchableOpacity onPress={navigateToFirstScreen} activeOpacity={0.6} style={styles.button} >
        
          <Text style={styles.TextStyle} > SCREEN 1 </Text>

        </TouchableOpacity>

        <View style={{height: 50, backgroundColor: '#fff', width: 2}} />

        <TouchableOpacity onPress={navigateToSecondScreen} activeOpacity={0.6} style={styles.button} >
        
          <Text style={styles.TextStyle}> SCREEN 2 </Text>

        </TouchableOpacity>

        <View style={{height: 50, backgroundColor: '#fff', width: 2}} />

        <TouchableOpacity onPress={navigateToThirdScreen} activeOpacity={0.6} style={styles.button} >
        
          <Text style={styles.TextStyle}> SCREEN 3 </Text>

        </TouchableOpacity>

    </View>
  );
}

const Tab = createBottomTabNavigator();

function AllTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>

      <Tab.Screen 
        name="Screen_1" 
        component={Screen_1} />

      <Tab.Screen 
        name="Screen_2" 
        component={Screen_2} />

      <Tab.Screen 
        name="Screen_3" 
        component={Screen_3} />

    </Tab.Navigator>
  );
}

export default function Tabbar() {
  return (
    <NavigationContainer>
      <AllTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
  TabBarMainContainer :{
    justifyContent: 'space-around', 
    height: 50, 
    flexDirection: 'row',
    width: '100%',
  },
   
  button: {
    height: 50,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor: '#00BCD4',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexGrow: 1
  },
   
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  }
   
  });