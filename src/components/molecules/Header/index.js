import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Button} from '../../atoms';

const Header = ({onPressBack, title, type}) => {
  if (type === 'icon-back') {
    return (
      <View>
        <View style={styles.container}>
          <Button type="icon-only" icon="icon-back" onPress={onPressBack} />
          <Gap width={24} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.gapView}>
          <Gap height={1} />
        </View>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.gapView}>
        <Gap height={3} />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FF6182',
    flex: 1,
    textTransform: 'capitalize',
  },
  gapView: {
    backgroundColor: '#F8F8F8',
  },
});
