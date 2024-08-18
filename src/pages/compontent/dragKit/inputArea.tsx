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

function DragButton() {
  return (
    <div className={style.dragButton}>
      <div className={style.button}>圖片元件</div>
      <div className={style.button}>文字元件</div>
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
      {!text && !imageData ? (
        <DragButton />
      ) : selectImg ? (
        <ImgInputGroup />
      ) : (
        <TextInput />
      )}
    </div>
  );
}

export default InputArea;
