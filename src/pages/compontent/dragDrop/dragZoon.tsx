import { Dispatch, SetStateAction, useState } from "react";
import style from "./dragZoon.module.scss";
import { type ImgData, type SelectedType } from "./dragDrop";

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
  setSelectedType,
}: {
  imageData?: ImgData;
  text?: string;
  setSelectedType: Dispatch<SetStateAction<SelectedType>>;
}) {
  return (
    <div className={style.disPlayContent}>
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

function DragZoon({
  handleDrop,
  setSelectedType,
  text,
  imageData,
}: {
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  text?: string;
  selectedType: SelectedType;
  setSelectedType: Dispatch<SetStateAction<SelectedType>>;
  imageData?: ImgData;
}) {
  const [showDragOverBg, setShowDrageOverBg] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowDrageOverBg(true);
  };

  const handleDragleave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setShowDrageOverBg(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setShowDrageOverBg(false);
    handleDrop(e);
  };

  return (
      <div
        onDrop={(e) => {
          onDrop(e);
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragleave}
        className={`${style.dragZoon} ${showDragOverBg && style.mask}`}
        
      >
        <Header />
        {text || imageData ? (
          <DisPlayContent
            text={text}
            imageData={imageData}
            setSelectedType={setSelectedType}
          />
        ) : (
          <ShowEmpty />
        )}
      </div>
  );
}

export default DragZoon;
