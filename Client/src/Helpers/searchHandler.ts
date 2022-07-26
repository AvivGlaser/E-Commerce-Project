import { ChangeEvent} from "react";

export default function searchHandler(e: ChangeEvent<HTMLInputElement>, cb: Function) {
  cb(e.target.value.toLowerCase());
}

