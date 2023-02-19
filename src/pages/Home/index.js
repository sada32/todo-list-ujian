import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskItem from '../../components/atoms/TaskItem/TaskItem';
import TaskInputField from '../../components/atoms/InputField/InputFile';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index !== deleteIndex));
  };

  const changeStatus = (name, idx) => {
    const item = tasks.map((it, id) => {
      if (id === idx) {
        return {label: it.label, done: true};
      } else {
        return it;
      }
    });
    setTasks(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <TaskInputField addTask={addTask} />

      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle}>Belum Selesai</Text>
        {tasks
          .filter(it => it.done === false)
          .map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem
                  index={index + 1}
                  task={task.label}
                  showDelete={true}
                  changeStatus={() => changeStatus(task.label, index)}
                  deleteTask={() => deleteTask(index)}
                />
              </View>
            );
          })}
      </ScrollView>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle2}>Selesai</Text>
        {tasks
          .filter(it => it.done === true)
          .map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer}>
                <TaskItem
                  index={index + 1}
                  task={task.label}
                  showDelete={false}
                  changeStatus={() => changeStatus(index)}
                  deleteTask={() => deleteTask(index)}
                />
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: '#243D97',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
  },
  subtitle: {
    marginTop: 30,
    color: 'black',
    width: 140,
    paddingHorizontal: 20,
    paddingVertical: 6,
    fontSize: 12,
    backgroundColor: '#FDC040',
    borderRadius: 50,
    marginLeft: 20,
  },
  subtitle2: {
    marginTop: 30,
    color: 'black',
    width: 95,
    paddingHorizontal: 20,
    paddingVertical: 6,
    fontSize: 12,
    backgroundColor: '#FDC040',
    borderRadius: 50,
    marginLeft: 20,
  },
  taskContainer: {
    marginTop: 20,
  },
});
