import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBWRA2CLcT2stYWhvZzUuKHsAZWgv0WYig',
	authDomain: 'invoicer-vue.firebaseapp.com',
	projectId: 'invoicer-vue',
	storageBucket: 'invoicer-vue.appspot.com',
	messagingSenderId: '1040004990458',
	appId: '1:1040004990458:web:275e92bbd9331f31165043',
	measurementId: 'G-WDGXPF793H',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
