import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
import Colors from '../../constant/colors/Color';

type Props = { onPress: () => void };

export default function FloatingButton({ onPress }: Props) {
  const pos = useRef(new Animated.ValueXY({ x: 300, y: 600 })).current;
  const startPos = useRef({ x: 0, y: 0 });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (_, gestureState) => {
        startPos.current = { x: gestureState.x0, y: gestureState.y0 };
        pos.extractOffset();
      },

      onPanResponderMove: Animated.event(
        [null, { dx: pos.x, dy: pos.y }],
        { useNativeDriver: false }
      ),

      onPanResponderRelease: (_, gestureState) => {
        pos.flattenOffset();

        // 🔍 Detect if this was a "tap" (not a drag)
        const dx = Math.abs(gestureState.moveX - startPos.current.x);
        const dy = Math.abs(gestureState.moveY - startPos.current.y);
        const TAP_THRESHOLD = 10;

        if (dx < TAP_THRESHOLD && dy < TAP_THRESHOLD) {
          onPress(); // manually trigger FAB press
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.container, pos.getLayout()]}
      {...panResponder.panHandlers}
    >
      <FAB icon="plus" style={styles.button}/>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
   
  },
  button:{
    opacity: 0.5,
    backgroundColor: Colors.primary,
    elevation: 4
  }
});
