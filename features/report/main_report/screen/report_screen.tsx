import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import Colors from '../../../../constant/colors/Color';
import { Icon, TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigations/root_navigator';


enum ReportType {
  Mtd = 'MTD',
  Order = 'Order',
  SKU = 'SKU',
}

const data = [
  { id: ReportType.Mtd, label: 'Monthly Sales',icon: 'calendar-month'},
  { id: ReportType.SKU, label: 'Item Sales', icon: 'cube-outline' },
  { id: ReportType.Order, label: 'Orders', icon: 'clipboard-list-outline' }
];



export default function ReportScreen() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleNavigate = (type: ReportType) => {
    if (type === ReportType.Mtd) {
      navigation.navigate('ReportMTD');
    } else if (type === ReportType.Order) {
      navigation.navigate('ReportOrder');
    } else if (type === ReportType.SKU) {
      navigation.navigate('ReportSKU');
    }
  };
    return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableRipple
            style={styles.item}
            rippleColor={Colors.primary + '33'} // Light ripple effect
            borderless={false} 
            onPress={() => handleNavigate(item.id)}
          >
            <View style={{ alignItems: 'center' }}>
              <Icon
                source={item.icon}
                size={36}
                color={Colors.primary}
              />
              <Text style={{ marginTop: 8, color: Colors.text, fontWeight: 'bold' }}>{item.label}</Text>
            </View>
          </TouchableRipple>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 8,
  },
  item: {
    flex: 1,
    margin: 8,
    borderColor: Colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100, 
    borderRadius: 8,
  },
});