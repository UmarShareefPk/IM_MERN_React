
import socketIOClient from "socket.io-client";
import { baseUrl } from '../api/apiURLs';

export   const incidentUpdatedSignalR =  (incidentId) => {
   
  let socket = socketIOClient(baseUrl, {
    "force new connection": true,
    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ["websocket"]
  });

  socket.emit('Incident Updated', incidentId);
  
};



