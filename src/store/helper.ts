import {Alert} from 'react-native';

const errorHandler = error => {
  console.log(error);
  Alert.alert(error);
};

export {errorHandler};
