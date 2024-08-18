import InputArea from "./inputArea";
import DragArea from "./dragArea";
import style from "./dragKit.module.scss";
import { useState } from "react";

export type ImgData = {
  width: number;
  height: number;
  path: string;
};

function Container() {
  const [selectImg, setSelectImg] = useState(false);
  const [imageData, setImageData] = useState<ImgData>();
  const [text, setText] = useState<string>();

  return (
    <div className={style.dragKit}>
      <InputArea
        selectImg={selectImg}
        text={text}
        setText={setText}
        imageData={imageData}
        setImageData={setImageData}
      />
      <DragArea
        selectImg={selectImg}
        setSelectImg={setSelectImg}
        imageData={imageData}
        text={text}
      />
    </div>
  );
}

export default Container;
