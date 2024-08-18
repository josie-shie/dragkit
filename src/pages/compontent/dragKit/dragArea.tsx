import { Dispatch, SetStateAction } from "react";
import style from "./dragArea.module.scss";
import { type ImgData, type SelectedType } from "./dragKit";

function Header() {
  return (
    <>
      <div className={style.header}>
        This is a fixed Header, no need to modify
      </div>
      <div className={style.placeHoder} />
    </>
  );
}

function ShowEmpty() {
  return <div className={style.showEmpty}>Empty</div>;
}

function DisPlayContent({
  text,
  imageData,
  handleDrop,
  handleDragOver,
  selectedType,
  setSelectedType,
}: {
  imageData?: ImgData;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  text?: string;
  selectedType: SelectedType;
  setSelectedType: Dispatch<SetStateAction<SelectedType>>;
}) {
  return (
    <div
      className={style.disPlayContent}
      onDragOver={handleDrop}
      onDrop={handleDragOver}
    >
      <div
        className={style.selectedStyle}
        data-hover-text={"圖片元件"}
        onClick={() => setSelectedType("image")}
      >
        {imageData && (
          <div
            className={style.imgbox}
            style={{ height: imageData.height, width: imageData.width }}
          >
            <img src={imageData.path} alt="item photo" />
          </div>
        )}
      </div>
      {text && (
        <div
          data-hover-text={"文字元件"}
          className={style.selectedStyle}
          onClick={() => setSelectedType("text")}
        >
          {text}
        </div>
      )}
    </div>
  );
}

function DragArea({
  handleDrop,
  handleDragOver,
  selectedType,
  setSelectedType,
  text,
  imageData,
}: {
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  text?: string;
  selectedType: SelectedType;
  setSelectedType: Dispatch<SetStateAction<SelectedType>>;
  imageData?: ImgData;
}) {
  return (
    <div className={style.dragArea}>
      <Header />
      {text || imageData ? (
        <DisPlayContent
          text={text}
          imageData={imageData}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
        />
      ) : (
        <ShowEmpty />
      )}
    </div>
  );
}

export default DragArea;
