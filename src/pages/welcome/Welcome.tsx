import { useState } from "react";
import { Modal } from "../../components/ui/Modal";
import { SignUp } from "../auth/SignUp";

export const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-screen w-screen bg-amber-50">
        <div className="w-full border-b border-black h-20 px-[19vw]  ">
          <div className="flex justify-between h-full items-center">
            <div className="text-4xl font-serif font-semibold"> Writly</div>
            <div className="flex gap-6 items-center text-sm">
              <div>Our Story</div>
              <div>Membership</div>
              <div>Write</div>
              <div
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Sign In
              </div>
              <div className="bg-black rounded-full px-4 py-2 text-white">
                Get Started
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <SignUp />
          <div>Sign up</div>
        </Modal>
        <div className="relative h-[84vh] border-b border-black w-full px-[19vw]  ">
          <div className="flex flex-col h-full  justify-center w-[43vw] gap-10">
            <div className="text-9xl font-serif ">Human stories & ideas</div>
            <div className="text-2xl">
              A place to read, write, and deepen your understanding
            </div>
            <span className="!inline-block bg-black text-white px-4 py-2 rounded-full w-[200px] text-center align-center text-xl font-semibold">
              Start reading
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
