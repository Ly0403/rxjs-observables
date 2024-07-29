import { Subject } from "rxjs";

export const subject = () => {
  const $observable = new Subject();
  $observable.subscribe((v) => console.log(v));
  $observable.subscribe((v) => console.log(v));

  $observable.next(1);
  $observable.next(2);
};
