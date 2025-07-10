import { useState } from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from "react-native";

const categories = ['Tümü', 'Buket', 'Kutuda', 'Vazoda', 'Çikolata & Çiçek'];

const ProductCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => {
          const isSelected = selectedCategory === item;
          return (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item)}
              style={[styles.categoryItem, isSelected && styles.selectedCategory]}
            >
              <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  categoryList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F1F1F1',
  },
  selectedCategory: {
    backgroundColor: '#81C784', // light green
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ProductCategory;
