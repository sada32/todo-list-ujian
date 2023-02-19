import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD4__-mnrJ98BjCH9k-KqQSxElXdp2ZtM4',
  authDomain: 'todo-list-c7c76.firebaseapp.com',
  databaseURL: 'https://todo-list-c7c76-default-rtdb.firebaseio.com',
  projectId: 'todo-list-c7c76',
  storageBucket: 'todo-list-c7c76.appspot.com',
  messagingSenderId: '813940953719',
  appId: '1:813940953719:web:d8c677c86434b1268eac72',
};
const Fire = initializeApp(firebaseConfig);
const Auth = getAuth(Fire);
const Database = getFirestore(Fire, {
  experimentalAutoDetectLongPolling: true,
  experimentalForceLongPolling: true,
});
const RealDatabase = getDatabase(Fire);
export {Fire, Auth, Database, RealDatabase};
