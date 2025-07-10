
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BLEPrinter } from 'react-native-thermal-receipt-printer';

import { BluetoothPrinter, PrinterSelectionBottomSheetProps, PrinterSelectionBottomSheetRef } from '../../data/type/printer_type';


interface InternalBluetoothPrinter extends BluetoothPrinter {
  type: 'bluetooth'; 
}

const PRINTER_TYPE = 'bluetooth'; 

const PrinterSelectionBottomSheet = forwardRef<PrinterSelectionBottomSheetRef, PrinterSelectionBottomSheetProps>(
  ({ onPrinterConnected, onPrinterDisconnected, onPressPrint }, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [bluetoothPrinters, setBluetoothPrinters] = useState<InternalBluetoothPrinter[]>([]);
    const [selectedPrinter, setSelectedPrinter] = useState<{ type: typeof PRINTER_TYPE; device: BluetoothPrinter } | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [scanMessage, setScanMessage] = useState<string>('');

    //how big is the bottomsheet
    const snapPoints = useMemo(() => ['25%',  '50%'], []);

    // open and close method for bottomsheet
    useImperativeHandle(ref, () => ({
      present: () => bottomSheetRef.current?.expand(),
      close: () => bottomSheetRef.current?.close(),
    }));

    const requestAndroidPermissions = useCallback(async (): Promise<boolean> => {
      if (Platform.OS === 'android') {
        const permissions = [
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ];

        const granted = await PermissionsAndroid.requestMultiple(permissions);

        const allGranted = permissions.every(
          (permission) => granted[permission] === PermissionsAndroid.RESULTS.GRANTED
        );

        if (!allGranted) {
          Alert.alert(
            'Permissions Denied',
            'Bluetooth and Location permissions are required to scan for printers.'
          );
          return false;
        }
        return true;
      }
      return true; // No specific permissions needed for iOS for initial BLE scanning (handles automatically by system prompt)
    }, []);

    // --- Printer Scanning/Listing ---
    const scanBluetoothPrinters = useCallback(async () => {
      setLoading(true);
      setScanMessage('Scanning for Bluetooth printers...');
      setBluetoothPrinters([]);
      setSelectedPrinter(null); 
      try {
        const hasPermission = await requestAndroidPermissions();
        if (!hasPermission) {
          setLoading(false);
          setScanMessage('Permissions not granted.');
          return;
        }

        await BLEPrinter.init();
        const devices: BluetoothPrinter[] = await BLEPrinter.getDeviceList();
        setBluetoothPrinters(devices.map(d => ({ ...d, type: PRINTER_TYPE })));
        setScanMessage(`Found ${devices.length} Bluetooth printers.`);
      } catch (error: any) { // Use 'any' for unknown error types or narrow down
        console.error('Bluetooth scanning error:', error);
        setScanMessage(`Bluetooth scan failed: ${error.message}`);
        Alert.alert('Error', `Failed to scan Bluetooth printers: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }, [requestAndroidPermissions]);

    useEffect(() => {
     
      scanBluetoothPrinters();
    }, [scanBluetoothPrinters]);

    // --- Printer Connection ---
    const connectPrinter = useCallback(async (printer: InternalBluetoothPrinter) => {
      setLoading(true);
      try {
        // If already connected to a printer, disconnect first
        if (selectedPrinter) {
          await BLEPrinter.closeConn();
          onPrinterDisconnected && onPrinterDisconnected(selectedPrinter.device);
        }

        await BLEPrinter.connectPrinter(printer.inner_mac_address);
        setSelectedPrinter({ type: PRINTER_TYPE, device: printer });
        onPrinterConnected && onPrinterConnected(printer); // Notify parent
        Alert.alert('Success', `Connected to ${printer.device_name}`);
        bottomSheetRef.current?.close(); // Close sheet on successful connection
      } catch (error: any) {
        console.error('Connection error:', error);
        Alert.alert('Error', `Failed to connect to printer: ${error.message}`);
        setSelectedPrinter(null); // Reset selection on failure
        onPrinterDisconnected && onPrinterDisconnected(printer); // Notify parent of failure to connect
      } finally {
        setLoading(false);
      }
    }, [selectedPrinter, onPrinterConnected, onPrinterDisconnected]);

    const disconnectPrinter = useCallback(async () => {
      if (!selectedPrinter) return;

      setLoading(true);
      try {
        await BLEPrinter.closeConn();
        const disconnectedDevice = selectedPrinter.device;
        setSelectedPrinter(null);
        onPrinterDisconnected && onPrinterDisconnected(disconnectedDevice); // Notify parent
        Alert.alert('Disconnected', `Printer disconnected.`);
      } catch (error: any) {
        console.error('Disconnection error:', error);
        Alert.alert('Error', `Failed to disconnect printer: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }, [selectedPrinter, onPrinterDisconnected]);

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // -1 means hidden
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.bottomSheetIndicator}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.header}>Select Bluetooth Printer</Text>

          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007bff" />
              <Text style={styles.scanMessageText}>{scanMessage}</Text>
            </View>
          )}

          {selectedPrinter ? (
            <View style={styles.connectedSection}>
              <Text style={styles.connectedText}>
                Currently Connected:{' '}
                <Text style={{ fontWeight: 'bold' }}>
                  {selectedPrinter.device.device_name || 'Unknown Device'}
                </Text>
              </Text>
              <TouchableOpacity
                style={[styles.button, styles.disconnectButton]}
                onPress={disconnectPrinter}
                disabled={loading}
              >
                <Text style={styles.buttonText}>Disconnect</Text>
              </TouchableOpacity>
             <TouchableOpacity
                style={[styles.button]}
                onPress={onPressPrint}
                disabled={loading}
              >
                <Text style={styles.buttonText}>Print Receipt</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={scanBluetoothPrinters}
                disabled={loading}
              >
                <Text style={styles.buttonText}>Scan for Printers</Text>
              </TouchableOpacity>
 
              {bluetoothPrinters.length > 0 ? (
                bluetoothPrinters.map((printer) => (
                  <TouchableOpacity
                    key={printer.inner_mac_address}
                    style={styles.printerItem}
                    onPress={() => connectPrinter(printer)}
                    disabled={loading}
                  >
                    <Text style={styles.printerName}>{printer.device_name || 'Unknown Device'}</Text>
                    <Text style={styles.printerMac}>{printer.inner_mac_address}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.noPrinterText}>
                  {loading ? 'Scanning...' : 'No Bluetooth printers found. Make sure Bluetooth is on and your printer is discoverable.'}
                </Text>
              )}
            </View>
          )}
        </BottomSheetScrollView>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetIndicator: {
    backgroundColor: '#ccc',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 50, // Add some padding at the bottom for scroll
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  loadingContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scanMessageText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  disconnectButton: {
    backgroundColor: '#dc3545',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  printerItem: {
    padding: 15,
    backgroundColor: '#e9ecef',
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
    marginBottom: 8,
    borderRadius: 8,
  },
  printerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  printerMac: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  noPrinterText: {
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  connectedSection: {
    backgroundColor: '#d4edda',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c3e6cb',
  },
  connectedText: {
    fontSize: 16,
    color: '#155724',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default PrinterSelectionBottomSheet;