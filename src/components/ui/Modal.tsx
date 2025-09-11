import { X } from "lucide-react";
import ReactModal from "react-modal";

export const Modal = ({
  children,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className={
        "relative w-auto h-auto min-w-[90vw] min-h-[60vh] md:min-h-[30vh] md:min-w-[30vw] shadow-md rounded bg-white p-4 border-0 outline-none"
      }
      overlayClassName={
        "fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30"
      }
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => onClose()}
    >
      <div className="absolute top-5 right-5 z-10 cursor-pointer">
        <X strokeWidth={1} onClick={() => onClose()} />
      </div>
      <div>{children}</div>
    </ReactModal>
  );
};
