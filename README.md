# 📍 YatraMap – Real-Time Multi-User Location Tracking App  
Live Location Sharing • GPS Tracking • Real-Time Sync • Socket.io • Node.js • Leaflet.js

YatraMap is a real-time, multi-user location tracking app built with Node.js, Express, Socket.io, and Leaflet.js.  
It captures live GPS coordinates from devices and displays all users as moving markers on an interactive map.

This project demonstrates real-time communication, mobile geolocation, and dynamic map rendering similar to:
- Uber / Ola driver tracking
- Swiggy / Zomato delivery partner tracking
- WhatsApp Live Location
- Fleet & vehicle tracking systems

---

## 🚀 Features  
- **Real-Time Multi-User Tracking**  
  Each connected device appears on the map with live movement.
- **Mobile GPS Support**  
  Uses Geolocation API for high-accuracy smartphone tracking.
- **Socket.io WebSocket Communication**  
  Fast, low-latency updates.
- **Interactive Leaflet.js Map**  
  Uses OpenStreetMap tiles for global coverage.
- **Automatic Marker Handling**  
  New users → new marker  
  Movement → update marker  
  Disconnect → remove marker  
- **Lightweight Backend**  
  No database — pure real-time streaming.

---

## 🛠 Tech Stack  
### Frontend  
- HTML, CSS, JavaScript  
- Leaflet.js  
- Socket.io Client  
- Geolocation API  

### Backend  
- Node.js  
- Express.js  
- Socket.io  
- HTTP Server

---

## 📂 Project Structure  
YatraMap/
│── public/  
│   ├── js/  
│   ├── css/  
│   └── images/  
│  
│── views/  
│   └── index.ejs  
│  
│── app.js  
│── package.json  
│── README.md  

---

## ⚙️ How It Works  
1. User opens the app  
2. Browser requests location access  
3. Device streams live GPS coordinates  
4. Server receives them via Socket.io  
5. Server broadcasts to all clients  
6. Every client updates markers in real time  

---

## ▶️ Setup & Installation  
git clone https://github.com/your-username/YatraMap.git
cd YatraMap


**2. Install dependencies**

npm install

**3. Start the server**

node app.js

App runs at:  
`http://localhost:3000`

---

## 📱 Mobile Real-Time Tracking  
To test on phone:

1. Connect laptop & phone to **same WiFi**  
2. Get laptop IPv4 using `ipconfig`  
3. Open on phone browser:

http://YOUR_IPV4:3000

Example:

http://192.138.1.37:3000

4. Allow location permission  
5. Move physically — marker updates live  

---

## 🔮 Future Enhancements  
- User login (Google/Email)  
- Route history (MongoDB)  
- Speed & direction  
- Custom marker icons  
- Fleet dashboard  
- Route replay  
- Group travel mode  
- Push notifications  

---

## 🏆 Why This Project Is Valuable  
YatraMap demonstrates real engineering skills including:
- Real-time systems  
- WebSockets  
- GPS tracking  
- Event-driven architecture  
- Map rendering  
- Mobile responsiveness
  
---

## 🤝 Contributions
Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request.

---

## 👨‍💻 Developed By
**Kushal Koradia**  
Full Stack Developer • MERN Stack • Real-Time Systems
