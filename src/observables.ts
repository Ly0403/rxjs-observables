import { Observable } from "rxjs";
export const observables = () => {
  const observable = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
  });

  const subscription = observable.subscribe({
    next(v) {
      console.log(v);
      subscription.unsubscribe();
    },
    error(e) {
      console.error(e);
    },
    complete() {
      console.log("done");
    },
  });
};
