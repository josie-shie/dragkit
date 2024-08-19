import InputArea from "./inputArea";
import DropArea from "./dropArea";
import style from "./dragDrop.module.scss";
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

function DragDrop() {
  const [selectedType, setSelectedType] = useState<SelectedType>("none");
  const [imageData, setImageData] = useState<ImgData>();
  const [text, setText] = useState<string>();
  const [showDragOverBg, setShowDrageOverBg] = useState(false);

  const handleDragStart = ({ event, item, type }: DraggableItemProps) => {
    event.dataTransfer.setData("text/item", item);
    event.dataTransfer.setData("text/type", type);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(222);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const item = event.dataTransfer.getData("text/item");
    const type = event.dataTransfer.getData("text/type");
    type === "image"
      ? setImageData({ width: 300, height: 200, path: item })
      : setText(item);
  };

  return (
    <div className={style.dragDrop}>
      <InputArea
        handleDragStart={handleDragStart}
        selectedType={selectedType}
        text={text}
        setText={setText}
        imageData={imageData}
        setImageData={setImageData}
      />
      <DropArea
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

export default DragDrop;
