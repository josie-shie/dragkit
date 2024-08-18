import InputArea from "./inputArea";
import DragArea from "./dragArea";
import style from "./dragKit.module.scss";
import { useState } from "react";

export type ImgData = {
  width: number;
  height: number;
  path: string;
};

export type SelectedType = "image" | "none" | "text";

export type DraggableItemProps = {
  event: React.DragEvent<HTMLDivElement>;
  item: string;
  type: SelectedType;
};

function Container() {
  const [selectedType, setSelectedType] = useState<SelectedType>("none");
  const [imageData, setImageData] = useState<ImgData>();
  const [text, setText] = useState<string>();

  const handleDragStart = ({ event, item, type }: DraggableItemProps) => {
    if (type === "image") setImageData({ width: 300, height: 200, path: item });
    if (type === "text") setText(item);
  };

  // 處理拖動目標區域
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // 處理放置
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    console.log(`Dropped item: ${data}`);
    // 在這裡你可以處理放置後的邏輯
  };

  return (
    <div className={style.dragKit}>
      <InputArea
        handleDragStart={handleDragStart}
        selectedType={selectedType}
        text={text}
        setText={setText}
        imageData={imageData}
        setImageData={setImageData}
      />
      <DragArea
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        imageData={imageData}
        text={text}
      />
    </div>
  );
}

export default Container;
