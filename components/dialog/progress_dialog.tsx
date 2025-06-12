// components/ProgressDialog.tsx
import React from 'react';
import {Fold} from 'react-native-animated-spinkit'
import { Modal, View, ActivityIndicator, StyleSheet } from 'react-native';

interface ProgressDialogProps {
  visible: boolean;
}

const ProgressDialog: React.FC<ProgressDialogProps> = ({ visible }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Fold size={48} color="#0000ff" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
});

export default ProgressDialog;
