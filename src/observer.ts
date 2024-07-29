import { Observable } from "rxjs";

export const observer = () => {
  const observerObj = {
    next() {
      console.log("Called for each next");
    },
    error() {
      console.log("Called once in the error");
    },
    complete() {
      console.log("Called one when all next finished");
    },
  };
  const observable = new Observable((subscriber) => {
    subscriber.next("a");
    subscriber.next("b");
    subscriber.complete();
    subscriber.next(1); // will not be executed after complete
  });
  observable.subscribe(observerObj);
};
