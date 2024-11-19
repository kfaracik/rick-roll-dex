import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {styles} from './Header.styled';

export const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={goBack} style={styles.header}>
      <Text style={styles.headerText}>← Go back to Characters List</Text>
    </TouchableOpacity>
  );
};
