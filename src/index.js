import { Observable } from "rxjs";

Observable.of("Hello RxJS World!").subscribe(result => {
  let text = document.createTextNode(result);
  document.body.appendChild(text);
});
