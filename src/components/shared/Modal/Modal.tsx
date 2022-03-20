import ReactDom from "react-dom";

import "./Modal.scss";

export default function Modal({ open, children, onClose }: any) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, .7)",
          zIndex: 1000,
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#FFF",
          padding: "50px",
          zIndex: 1000,
        }}
        className="Modal"
      >
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
}
