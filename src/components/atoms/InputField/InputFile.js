import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconPlus} from '../../../assets';

const TaskInputField = props => {
  const [task, setTask] = useState();

  const handleAddTask = value => {
    props.addTask({label: value, done: false});
    setTask(null);
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={text => setTask(text)}
        placeholder={'Tambah Todo List'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity onPress={() => handleAddTask(task)}>
        <View style={styles.button}>
          <IconPlus />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TaskInputField;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    backgroundColor: '#243D97',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  inputField: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
