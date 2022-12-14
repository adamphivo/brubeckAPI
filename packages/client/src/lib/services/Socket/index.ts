import { io } from "socket.io-client";
import { PUBLIC_SOCKET_URL } from "$env/static/public";
import { prices, usersCount, user } from "$lib/stores";
import { browser } from "$app/environment";
import type { RealTimePrices } from "@brubeckscan/common/types";

let Socket = {};

if (browser) {
  const socket = io(PUBLIC_SOCKET_URL, { transports: ["websocket"] });

  socket.on("connect", () => {
    user.subscribe((user) => {
      if (user) {
      }
    });
  });

  socket.on("prices", (data: RealTimePrices) => {
    prices.set(data);
  });

  socket.on("clientCount", (data: any) => {
    usersCount.set(data);
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
}
export { Socket };
