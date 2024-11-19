import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './Header.styled';
import {RickAndMortyHeader} from '../../../TabNavigation/components';

export const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <RickAndMortyHeader />
      </View>
      <TouchableOpacity onPress={goBack} style={styles.header}>
        <Text style={styles.headerText}>← Go back to Characters List</Text>
      </TouchableOpacity>
    </>
  );
};
