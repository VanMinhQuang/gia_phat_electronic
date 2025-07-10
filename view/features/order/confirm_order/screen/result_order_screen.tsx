import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";
import {  StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RootStackParamList } from "../../../../navigations/root_navigator";
import { LinearGradient } from "expo-linear-gradient";
import { BLEPrinter } from 'react-native-thermal-receipt-printer'; 
import { useCallback, useRef, useState } from "react";
import { BluetoothPrinter, PrinterSelectionBottomSheetRef } from "../../../../../core/data/type/printer_type";

import { ColorGradient } from "../../../../../core/constant/colors/Color";
import ImageAssets from "../../../../../core/constant/image/Image";
import CachedImage from "../../../../../core/components/image/caches_image";
import PrinterSelectionBottomSheet from "../../../../../core/components/utils/printer_helper";



const ResultOrderScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const printerBottomSheetRef = useRef<PrinterSelectionBottomSheetRef>(null);
  const [currentPrinter, setCurrentPrinter] = useState<BluetoothPrinter | null>(null); // Store connected printer details

  const handleOpenPrinterSheet = useCallback(() => {
    printerBottomSheetRef.current?.present(); 
  }, []);

  const handlePrinterConnected = useCallback((printer: BluetoothPrinter) => {
    setCurrentPrinter(printer);
    console.log('Printer connected in App.tsx:', printer);
  }, []);

  const handlePrinterDisconnected = useCallback(() => {
    setCurrentPrinter(null);
    console.log('Printer disconnected in App.tsx');
  }, []);


  const handlePrintReceipt = async () => {
    if (!currentPrinter) {
      Alert.alert('No Printer Connected', 'Please connect a printer via the "Select Printer" button.');
      return;
    }
    const receiptContent = `
<C>--- Your React Native Store ---</C>
<C>Receipt Date: 2025-06-23</C>
<C>-------------------------------</C>
Item             Qty   Price
-------------------------------
React Native Book 1     $39.99
Wireless Earbuds  1     $79.99
USB Cable         2     $ 9.99
-------------------------------
Subtotal:             $139.96
Tax (5%):             $  7.00
Total:                $146.96
-------------------------------
<C>Thank you for your purchase!</C>
<C>Powered by React Native!</C>
\n\n\n`; 

    try {
      await BLEPrinter.printBill(receiptContent);
      Alert.alert('Print Status', 'Receipt print command sent successfully!');
    } catch (error: any) {
      console.error('Printing receipt failed:', error);
      Alert.alert('Printing Error', `Failed to print receipt: ${error.message}`);
    }
  };


 
  return (
    <LinearGradient style={styles.screen} colors={ColorGradient.primary}>
      <CachedImage
        imageUrl={ImageAssets.confirmImage}
        style={styles.confirmImage}
        contentFit="cover"
        transition={1000}
        isAssest={true}
      />

      <View style={styles.buttonRow}>
        <RoundedButton
          label="Back to Home"
          onPress={() =>
            navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] })
          }
        />
            <RoundedButton
          label="Print"
          onPress={() =>
           handleOpenPrinterSheet()
          }
        />
      </View>
      <PrinterSelectionBottomSheet
        ref={printerBottomSheetRef}
        onPrinterConnected={handlePrinterConnected}
        onPrinterDisconnected={handlePrinterDisconnected}
        onPressPrint={handlePrintReceipt}
      />
    </LinearGradient>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.header}>My Thermal Printing App</Text>

  //     {currentPrinter ? (
  //       <View style={styles.connectedInfo}>
  //         <Text style={styles.connectedText}>Connected to:</Text>
  //         <Text style={styles.connectedPrinterName}>{currentPrinter.device_name}</Text>
  //         <Text style={styles.connectedPrinterMac}>{currentPrinter.inner_mac_address}</Text>
  //       </View>
  //     ) : (
  //       <Text style={styles.notConnectedText}>No printer connected.</Text>
  //     )}

  //     <TouchableOpacity
  //       style={styles.openSheetButton}
  //       onPress={handleOpenPrinterSheet}
  //     >
  //       <Text style={styles.openSheetButtonText}>Select Printer</Text>
  //     </TouchableOpacity>



  //     <PrinterSelectionBottomSheet
  //       ref={printerBottomSheetRef}
  //       onPrinterConnected={handlePrinterConnected}
  //       onPrinterDisconnected={handlePrinterDisconnected}
  //       onPressPrint={handlePrintReceipt}
  //     />
  //   </View>
  // );
};


const RoundedButton = ({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",      // ↳ centers horizontally
    justifyContent: "center",  // ↳ centers vertically
    paddingHorizontal: wp("8%"),
  },
  confirmImage: {
    width: wp("60%"),      
    height: hp("40%"),
    borderRadius: 16,
    marginBottom: hp("4%"),
   
   
  },
  buttonRow: {
    flexDirection: "row",
    gap: wp("6%"),    
     width: "100%",        
  },
  button: {
     flex: 1,
    backgroundColor: "#ffffffaa", 
    paddingVertical: hp("1.7%"),
    paddingHorizontal: wp("10%"),
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#1B1B1B",
    textAlign:'center'
  },

});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f2f5',
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#333',
//   },
//   connectedInfo: {
//     backgroundColor: '#e6ffe6',
//     padding: 15,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#aaffaa',
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   connectedText: {
//     fontSize: 16,
//     color: '#006600',
//     marginBottom: 5,
//   },
//   connectedPrinterName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#004d00',
//   },
//   connectedPrinterMac: {
//     fontSize: 14,
//     color: '#006600',
//     marginTop: 5,
//   },
//   notConnectedText: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 20,
//   },
//   openSheetButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginBottom: 15,
//     elevation: 3,
//   },
//   openSheetButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   printButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//     marginBottom: 10,
//     elevation: 3,
//   },
//   printButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   disabledButton: {
//     backgroundColor: '#ccc',
//   },
// });

export default ResultOrderScreen;
