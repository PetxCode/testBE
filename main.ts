import EventEmitter from "node:events";
import moment from "moment";
import { v4 as uuid } from "uuid";
import { myEvent } from "./emitterCall";

setImmediate(() => {
  myEvent.emit("message1");
});
myEvent.on("message", () => {
  console.log({ id: uuid(), time: moment(new Date().getTime()).format("lll") });
});
