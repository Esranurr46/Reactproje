import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Title = (props) => {
  return (
    <View>
      <Text style={[styles.title, {color: props.color}]}>  {props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {

    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: 'blue',
  },
});

export default Title;
