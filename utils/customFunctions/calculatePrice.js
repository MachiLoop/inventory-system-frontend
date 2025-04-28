export const calculatePrice = (distance) => {
  if (distance < 1) {
    return 100;
  } else if (distance >= 1 && distance < 1.5) {
    return 150;
  } else if (distance >= 1.5 && distance < 2) {
    return 200;
  } else if (distance >= 2 && distance < 2.5) {
    return 250;
  } else if (distance >= 2.5 && distance < 3) {
    return 300;
  } else if (distance >= 3 && distance < 4) {
    return 400;
  } else {
    return 500;
  }
};
