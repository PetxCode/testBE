import EventEmitter from "node:events";
import moment from "moment";
import { v4 as uuid } from "uuid";

class MyEmitter extends EventEmitter {}

export let myEvent = new MyEmitter();

myEvent.on("message1", () => {
  console.log({ id: uuid(), time: moment(new Date().getTime()).format("lll") });
});
