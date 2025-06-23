import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useState } from "react";

type ConfirmPaymentProp = {
    amount: number;
}

const ConfirmOrderPaymentMethod : React.FC<ConfirmPaymentProp> = ({amount}) => {
        const bank = '970422';
    const bankNumber = '0001004448704';
    const [selectedMethod,setSelectedMethod] = useState("cash");
    return (
    <View>


      <TouchableOpacity
        style={[
          styles.option,
          selectedMethod === "cash" && styles.selectedOption,
        ]}
        onPress={() => setSelectedMethod("cash")}
      >
        <Text style={styles.optionText}>Thanh toán bằng tiền mặt</Text>
      </TouchableOpacity>

            <TouchableOpacity
        style={[
          styles.option,
          selectedMethod === "bank" && styles.selectedOption,
        ]}
        onPress={() => setSelectedMethod("bank")}
      >
        <Text style={styles.optionText}>Thanh toán qua ngân hàng</Text>
      </TouchableOpacity>

      {selectedMethod === "bank" && (
        <View style={styles.qrContainer}>
          <Image
            source={{
              uri: `https://img.vietqr.io/image/${bank}-${bankNumber}-compact2.jpg?amount=${amount}`,
            }}
            style={{ width: 300, height: 300 }}
            contentFit="contain"
          />
        </View>
      )}
    </View>
);}


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  option: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
  },
  selectedOption: {
    borderColor: "#007aff",
    backgroundColor: "#e6f0ff",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  qrContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});


export default ConfirmOrderPaymentMethod;