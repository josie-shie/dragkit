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

function DisPlayContent() {
  return <div className={style.disPlayContent}>Empty</div>;
}

function DragArea({
  selectImg,
  setSelectImg,
  imageData,
  setImageData,
}: {
  selectImg: boolean;
  setSelectImg: Dispatch<SetStateAction<boolean>>;
  imageData?: ImgData;
  setImageData: (imageData: ImgData) => void;
}) {
  return (
    <div className={style.dragArea}>
      <Header />
      {/* {<DisPlayContent/>:<ShowEmpty/>} */}
      <ShowEmpty />
    </div>
  );
}

export default DragArea;
