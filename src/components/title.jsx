import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Title = (props) => {
  const { text, bool, color } = props;
  return (
    <View>
      {bool && (
        <Text style={[styles.title, { color }]}>{text}</Text>
      )}
    </View>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  bool: PropTypes.bool,
  color: PropTypes.string,
};

Title.defaultProps = {
  text: 'Default Title',
  bool: true,
  color: 'blue',
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
