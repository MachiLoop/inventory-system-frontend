import { useToast } from "react-native-toast-notifications";

const useToastNotification = () => {
  const toast = useToast(); // ✅ Uses a hook inside it

  // Returns a function that components can use
  return (message, type = "danger") => {
    toast.show(message, {
      type,
      placement: "top",
      duration: 4000,
      offset: 30,
      animationType: "zoom-in",
    });
  };
};

export default useToastNotification;
