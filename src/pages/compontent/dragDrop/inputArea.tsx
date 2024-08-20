import style from "./inputArea.module.scss";
import {
  type ImgData,
  type DraggableItemProps,
  type SelectedType,
} from "./dragDrop";

function ImgInputGroup({
  imageData,
  setImageData,
}: {
  imageData: ImgData;
  setImageData: (imageData: ImgData) => void;
}) {
  const handleUpdate = (key: string, value: string) => {
    setImageData({
      ...imageData,
      [key]: value,
    });
  };
  const formatNumber = (value: string) => {
    if (value.length > 1 && value.startsWith("0")) {
      value = value.substring(1);
    }
    return value;
  };

  return (
    <div className={style.imageInputBox}>
      <input
        value={imageData.width}
        onChange={(e) => {
          const value = formatNumber(e.target.value);
          handleUpdate("width", value);
        }}
      />
      <input
        value={imageData.height}
        onChange={(e) => {
          const value = formatNumber(e.target.value);
          handleUpdate("height", value);
        }}
      />
      <input
        type="text"
        value={imageData.path}
        onChange={(e) => handleUpdate("path", e.target.value)}
      />
    </div>
  );
}

function TextInput({
  text,
  setText,
}: {
  text: string;
  setText: (text: string) => void;
}) {
  const handleUpdate = (value: string) => {
    setText(value);
  };
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => handleUpdate(e.target.value)}
    />
  );
}

function DragButton({
  handleDragStart,
}: {
  handleDragStart: (param: DraggableItemProps) => void;
}) {
  return (
    <div className={style.dragButton}>
      <div
        className={style.button}
        draggable
        onDragStart={(event) =>
          handleDragStart({
            event,
            item: "https://picsum.photos/300/200?grayscale",
            type: "image",
          })
        }
      >
        圖片元件
      </div>
      <div
        className={style.button}
        draggable
        onDragStart={(event) =>
          handleDragStart({
            event,
            item: "Hello from meepshop.",
            type: "text",
          })
        }
      >
        文字元件
      </div>
    </div>
  );
}

function InputArea({
  handleDragStart,
  selectedType,
  text,
  setText,
  imageData,
  setImageData,
}: {
  selectedType: SelectedType;
  handleDragStart: (param: DraggableItemProps) => void;
  text?: string;
  setText: (text: string) => void;
  imageData?: ImgData;
  setImageData: (imageData: ImgData) => void;
}) {
  if (!text || !imageData || selectedType === "none")
    return (
      <div className={style.inputArea}>
        <DragButton handleDragStart={handleDragStart} />
      </div>
    );

  return (
    <div className={style.inputArea}>
      {selectedType === "image" && imageData && (
        <ImgInputGroup imageData={imageData} setImageData={setImageData} />
      )}
      {selectedType === "text" && text && (
        <TextInput text={text} setText={setText} />
      )}
    </div>
  );
}

export default InputArea;
