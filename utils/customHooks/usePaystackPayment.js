import React, { useRef } from "react";
import { View } from "react-native-animatable";
import { Paystack } from "react-native-paystack-webview";

const usePaystackPayment = ({ amount, onSuccess, onCancel }) => {
  const paystackWebViewRef = useRef();

  const startTransaction = () => {
    // if (paystackWebViewRef.current) {
    paystackWebViewRef.current.startTransaction();
    console.log("hello");
    // }
  };

  const PaystackComponent = () => {
    return (
      <Paystack
        paystackKey="pk_test_ef73c303c190aa5a2141e5a144d4aaa8233f81df"
        billingEmail="hamidusodiq2@gmail.com"
        amount={amount}
        onCancel={onCancel}
        onSuccess={onSuccess}
        ref={paystackWebViewRef}
        channels={["card", "ussd", "bank_transfer"]}
      />
    );
  };

  return { startTransaction, PaystackComponent };
};

export default usePaystackPayment;
