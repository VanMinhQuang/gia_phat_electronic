// src/types.ts

export interface BluetoothPrinter {
  device_name: string;
  inner_mac_address: string;
 
}

export interface PrinterSelectionBottomSheetProps {
  onPrinterConnected?: (printer: BluetoothPrinter) => void;
  onPrinterDisconnected?: (printer?: BluetoothPrinter) => void;
  onPressPrint: () => void;
}

export interface PrinterSelectionBottomSheetRef {
  present: () => void;
  close: () => void;
}