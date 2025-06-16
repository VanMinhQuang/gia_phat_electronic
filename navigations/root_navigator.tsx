  // navigations/root_navigator.tsx
  import React from 'react';
  import { createStackNavigator} from '@react-navigation/stack';
  import HomeScreen from '../features/home/screen/home_screen';
  import ReportMTD from '../features/report/report_mtd/screen/report_mtd_screen';
  import ReportOrder from '../features/report/report_order/screen/report_order_screen';
  import ReportSKU from '../features/report/report_sku/screen/report_sku_screen';
  import CartScreen from '../features/order/cart/screen/cart_screen';
  import ProductListScreen from '../features/order/product/product_list/screen/product_list_screen';
  import ConfirmOrderScreen from '../features/order/confirm_order/screen/confirm_order_screen';

  export type RootStackParamList = {
    HomeScreen: undefined;
    ReportMTD: undefined;
    ReportOrder: undefined;
    ReportSKU: undefined;
    CartScreen: undefined;
    ProductListScreen: undefined;
    ConfirmOrderScreen: undefined;
  };

  const Stack = createStackNavigator<RootStackParamList>();

  export default function RootNavigator() {
    return (
      <Stack.Navigator 
        screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        animation: 'slide_from_right'
    }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ReportMTD" component={ReportMTD} />
        <Stack.Screen name="ReportOrder" component={ReportOrder} />
        <Stack.Screen name="ReportSKU" component={ReportSKU} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen name="ConfirmOrderScreen" component={ConfirmOrderScreen}/>
      </Stack.Navigator>
    );
  }
