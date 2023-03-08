import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Products } from './src/screens/Products/Products'
import { MyCart } from './src/screens/MyCart/MyCart'
import { Login } from './src/screens/Login/Login'
import { MyOrders } from './src/screens/MyOrders/MyOrders'
import { FindUs } from './src/screens/FindUs/FindUs'
// import { CustomText } from './src/components/CustomText/CustomText';

export default function App() {

  const [screens, setScreens] = useState({
    home: true,
    cart: false,
    data: false,
    orders: false,
    findUs: false
  })

  const { home, cart, data, orders, findUs } = screens

  return (
    <View style={styles.container}>
      {home && <Products screens={screens} setScreens={setScreens} />}
      {cart && <MyCart screens={screens} setScreens={setScreens} />}
      {data && <Login screens={screens} setScreens={setScreens} />}
      {orders && <MyOrders screens={screens} setScreens={setScreens} />}
      {findUs && <FindUs screens={screens} setScreens={setScreens} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
