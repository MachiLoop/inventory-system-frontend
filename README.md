#  Inventory Application – Frontend

This is the **React Native frontend** for the Inventory application, built to helop businesses manage their inventory.

---

## 📱 Overview

This mobile app provides:

- An intuitive interface for **users** to manage inventory.
- Product categorization.

The frontend is built using **React Native**, powered by **Expo**, and styled with **Tailwind CSS via NativeWind**.

![App Preview](https://i.ibb.co/7xQJY4fx/Screenshot-20250508-151140.jpg)

![App Preview](https://i.ibb.co/nsybBkQB/Screenshot-20250508-151151.jpg)

![App Preview](https://i.ibb.co/qMzc8c76/Screenshot-20250508-151230.jpg)

![App Preview](https://i.ibb.co/SXHrmD1L/Screenshot-20250508-151221.jpg)


---

## ✨ Features

- Add products to inventory
- create categories for products
- Edit product and category data
- delete product and category

---

## 🛠 Tech Stack

| Tool/Library               | Purpose                             |
|---------------------------|-------------------------------------|
| **React Native + Expo**   | Mobile app framework                |
| **Axios**                 | HTTP requests to backend API        |
| **React Native Maps**     | Display and track shuttle locations |
| **Tailwind CSS (NativeWind)** | Utility-first styling           |


---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- Expo CLI
- Android/iOS emulator or physical device

### Installation

```bash
git clone https://github.com/MachiLoop/inventory-system-frontend.git
cd inventory-system-frontend
npm install
```

### Run the App

```bash
npx expo start
```

Scan the QR code using the **Expo Go app** on your mobile device.

---

## 📁 Project Structure

```bash
.
├── app/                    # Screens & routes (expo-router)
├── components/             # Reusable UI components
├── constants/              # App-wide constants
├── data/                   # Sample or mock data
├── utils/                  # Helper functions
├── assets/                 # Images, icons, fonts
├── global.css              # Global Tailwind setup
├── tailwind.config.js      # Tailwind configuration
├── app.json                # Expo project config
├── index.js                # App entry point
```


---

## 🧑‍💻 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit changes and push: `git push origin feature/YourFeature`
4. Open a Pull Request

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 📬 Contact

For inquiries or issues, please open an [Issue](https://github.com/MachiLoop/inventory-system-frontend/issues) or contact the maintainer.
