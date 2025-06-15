import React, { useRef } from 'react';
import {
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
  Text,
} from 'react-native';

const DraggableFloatingButton = () => {
  // Set initial position (x: 300, y: 600)
  const pan = useRef(new Animated.ValueXY({ x: 300, y: 600 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // Use getLayout().left/top for current position
        pan.extractOffset();
      },
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.buttonContainer, pan.getLayout()]}
      {...panResponder.panHandlers}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Button pressed!')}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    zIndex: 100,
  },
  button: {
    backgroundColor: '#ff6347',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});

export default DraggableFloatingButton;
