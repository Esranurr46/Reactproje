import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window });
    });

    // cleanup
    return () => {
      subscription?.remove();
    };
  }, []); // ← [] (sonsuz loop’u engeller)

  const windowWidth = dimensions.window.width ;
  const windowHeight = dimensions.window.height ;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: windowWidth > 500 ? '50%' : '70%',
            height: windowWidth > 600 ? '60%' : '70%',
          },
        ]}
      >
        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 , justifyContent:'center', alignItems:'center'}}>hos geldinis</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue', 
  },
});



