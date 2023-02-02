import { useState } from "react";

const AlertDialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="Button violet"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        アカウントを削除
      </button>
      {isOpen && (
        <div>
          <div className="AlertDialogOverlay" />
          <div className="AlertDialogContent">
            <h2 className="AlertDialogTitle">
              本当によろしいですか?
            </h2>
            <p className="AlertDialogDescription">
              この操作は元に戻せません。
              アカウントが完全に削除されます。
            </p>
            <div
              style={{
                display: "flex",
                gap: 25,
                justifyContent: "flex-end",
              }}
            >
              <button className="Button mauve">
                キャンセル
              </button>
              <button className="Button red">
                はい、アカウントを削除します
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AlertDialogDemo;
