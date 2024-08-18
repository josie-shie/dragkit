import style from "./inputArea.module.scss";
import { type ImgData } from "./dragKit";

function ImgInputGroup() {
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}

function TextInput() {
  return (
    <div>
      <input type="text" />
    </div>
  );
}

function InputArea({
  selectImg,
  text,
  setText,
  imageData,
  setImageData,
}: {
  selectImg: boolean;
  text?: string;
  setText: (text: string) => void;
  imageData?: ImgData;
  setImageData: (imageData: ImgData) => void;
}) {
  return (
    <div className={style.inputArea}>
      {selectImg ? <ImgInputGroup /> : <TextInput />}
    </div>
  );
}

export default InputArea;
