import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './Header.styled';
import {RickAndMortyHeader} from '../../../TabNavigation/components';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../../shared/utils';

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
        <Icon
          name="arrow-back"
          size={10}
          color={Colors.mediumGreen}
          style={{
            alignSelf: 'center',
            position: 'absolute',
            left: 15,
            paddingTop: 2,
          }}
        />
        <Text style={styles.headerText}>{'   '}Go back to Characters List</Text>
      </TouchableOpacity>
    </>
  );
};
