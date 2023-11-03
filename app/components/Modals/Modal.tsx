"use client";
import Button from "@/app/components/buttons/Button";

import { GrClose } from "react-icons/gr";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  btnLabel: string;
  title: string;
  bodyElement: React.ReactElement;
  footerElement: React.ReactElement;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  btnLabel,
  title,
  bodyElement,
  footerElement,
}) => {
  const closeFunc = () => {
    onClose();
  };
  const submitFunc = () => {
    onSubmit();

    console.log("heloooo");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center absolute left-0 top-0">
      <div className="bg-white rounded-lg p-5 w-2/3 md:w-1/2">
        <div className="flex items-center justify-between pb-3 mb-3 border-b-2  ">
          <div className="text-xl">{title}</div>
          <GrClose onClick={closeFunc} cursor={"pointer"} size={25} />
        </div>
        <div>{bodyElement}</div>
        <Button onSubmit={submitFunc} btnLabel={btnLabel} />
        {footerElement}
      </div>
    </div>
  );
};

export default Modal;
