import { Dispatch, SetStateAction } from "react";
import style from "./dragArea.module.scss";
import { type ImgData } from "./dragKit";

function Header() {
  return (
    <div className={style.header}>
      This is a fixed Header, no need to modify
    </div>
  );
}

function ShowEmpty() {
  return <div className={style.showEmpty}>Empty</div>;
}

function DisPlayContent({
  text,
  imageData,
}: {
  text: string;
  imageData: ImgData;
}) {
  return (
    <div className={style.disPlayContent}>
      <div
        className={style.imgbox}
        style={{ height: imageData.height, width: imageData.width }}
      >
        <img src={imageData.path} alt="item photo" />
      </div>
      <div>{text}</div>
    </div>
  );
}

function DragArea({
  selectImg,
  setSelectImg,
  text,
  imageData,
}: {
  text?: string;
  selectImg: boolean;
  setSelectImg: Dispatch<SetStateAction<boolean>>;
  imageData?: ImgData;
}) {
  return (
    <div className={style.dragArea}>
      <Header />
      {text && imageData ? (
        <DisPlayContent text={text} imageData={imageData} />
      ) : (
        <ShowEmpty />
      )}
    </div>
  );
}

export default DragArea;
