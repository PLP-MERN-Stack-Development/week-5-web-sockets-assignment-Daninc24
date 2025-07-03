import { io } from "socket.io-client";
export const socket = io(import.meta.env.VITE_SOCKET_SERVER, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
