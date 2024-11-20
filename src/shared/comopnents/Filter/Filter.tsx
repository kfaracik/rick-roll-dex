import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {styles} from './Filter.styled';
import {Species, Status} from '../../../shared/api';
import {Button} from '../Button';
import {Colors} from '../../utils';
import {Card} from '../Card';
import {CheckboxItem} from '../CheckboxItem';
import Icon from 'react-native-vector-icons/AntDesign';

type FilterProps = {
  onApplyFilters: (status: Status, species: Species) => void;
};

export const Filter = ({onApplyFilters}: FilterProps) => {
  const [filterOptionsExpanded, setFilterOptionsExpanded] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [species, setSpecies] = useState<Species>(null);

  const handleStatusChange = (value: Status) => {
    setStatus(value === status ? null : value);
  };

  const handleSpeciesChange = (value: Species) => {
    setSpecies(value === species ? null : value);
  };

  const onApplyPress = () => {
    setFilterOptionsExpanded(false);
    onApplyFilters(status, species);
  };

  const onResetFiltersPress = () => {
    setStatus(null);
    setSpecies(null);
  };

  const onFilterButtonPress = () => {
    setFilterOptionsExpanded(prev => !prev);
  };

  return (
    <ScrollView style={styles.container}>
      <Button
        title="FILTER "
        onPress={onFilterButtonPress}
        mode="primary"
        style={styles.filterButton}>
        <Icon
          name={filterOptionsExpanded ? 'up' : 'down'}
          size={10}
          color={Colors.white}
        />
      </Button>
      {filterOptionsExpanded && (
        <Card style={styles.card}>
          <View>
            <Text>STATUS</Text>
            <CheckboxItem
              label="Alive"
              value="Alive"
              status={status}
              onPress={handleStatusChange}
            />
            <CheckboxItem
              label="Dead"
              value="Dead"
              status={status}
              onPress={handleStatusChange}
            />
            <CheckboxItem
              label="Unknown"
              value="Unknown"
              status={status}
              onPress={handleStatusChange}
            />
          </View>
          <View>
            <Text>SPECIES</Text>
            <CheckboxItem
              label="Human"
              value="Human"
              status={species}
              onPress={handleSpeciesChange}
            />
            <CheckboxItem
              label="Humanoid"
              value="Humanoid"
              status={species}
              onPress={handleSpeciesChange}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <Button title="RESET" onPress={onResetFiltersPress} mode="white" />
            <Button title="APPLY" onPress={onApplyPress} mode="primary" />
          </View>
        </Card>
      )}
    </ScrollView>
  );
};
