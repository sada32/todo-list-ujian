import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconDelete, IconSubmit} from '../../../assets';

const TaskItem = props => {
  return (
    <View style={styles.container}>
      <View
        style={props.showDelete ? styles.taskContainer : styles.taskContainer2}>
        <Text style={styles.task}>{props.task}</Text>
        {props.showDelete === true && (
          <TouchableOpacity
            style={styles.action}
            onPress={() => props.changeStatus()}>
            <IconSubmit />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.action}
          onPress={() => props.deleteTask()}>
          <IconDelete />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: '#243D97',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  action: {
    marginRight: 10,
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: 'white',
    borderColor: '#243D97',
    borderWidth: 2,
    color: '#243D97',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 40,
    paddingVertical: 5,
    minHeight: 50,
  },
  taskContainer2: {
    backgroundColor: 'white',
    borderColor: '#243D97',
    borderWidth: 2,
    color: '#243D97',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: '#243D97',
    width: '90%',
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
  },
});
