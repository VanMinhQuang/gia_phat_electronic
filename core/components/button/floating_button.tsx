import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';
import {Colors} from '../../constant/colors/Color';

type Props = { onPress: () => void };

export default function FloatingButton({ onPress }: Props) {
  const pos = useRef(new Animated.ValueXY({ x: 300, y: 600 })).current;
  const startPos = useRef({ x: 0, y: 0 });
  const DRAG_THRESHOLD = 4;       // px  – how far a finger must move to count as a drag
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: (_e, g) =>
      Math.abs(g.dx) > DRAG_THRESHOLD || Math.abs(g.dy) > DRAG_THRESHOLD,

      onPanResponderGrant: (_, gestureState) => {
        startPos.current = { x: gestureState.x0, y: gestureState.y0 };
        pos.extractOffset();
      },

      onPanResponderMove: Animated.event(
        [null, { dx: pos.x, dy: pos.y }],
        { useNativeDriver: false }
      ),

      onPanResponderRelease: (_, g) => {
       const travelledSq = g.dx * g.dx + g.dy * g.dy;



      pos.flattenOffset(); 

      if (
        travelledSq < DRAG_THRESHOLD * DRAG_THRESHOLD 
      ) {
        onPress?.();
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
