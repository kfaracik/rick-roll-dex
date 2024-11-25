import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {styles} from './Filter.styled';
import {Species, Status} from '../../../shared/api';
import {Button} from '../Button';
import {Colors} from '../../utils';
import {Card} from '../Card';
import {CheckboxItem} from '../CheckboxItem';
import Icon from 'react-native-vector-icons/AntDesign';
import {AnimatedChevron} from '../AnimatedChevron';

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
        <AnimatedChevron
          isOpen={filterOptionsExpanded}
          accessibilityLabel={'show filters'}
        />
      </Button>
      {filterOptionsExpanded && (
        <Card style={styles.card}>
          <View>
            <Text style={styles.categoryName}>STATUS</Text>
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
            <Text style={styles.categoryName}>SPECIES</Text>
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
