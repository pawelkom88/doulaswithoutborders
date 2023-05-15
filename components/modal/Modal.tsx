interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onModalClose: (value: boolean) => void;
}

export default function Modal({ children, onModalClose, className = "" }: ModalProps) {
  return (
    <div
      onClick={e => {
        e.stopPropagation();
        onModalClose(false);
      }}
      className="fixed inset-0 z-30 bg-sky-500/60 backdrop-blur">
      <div
        className={`fixed inset-0 z-20 mx-2 flex items-center justify-center overflow-hidden px-4 ${className}`}>
        {children}
        <button
          className="background-transparent absolute right-5 top-20 sm:right-10 sm:top-10"
          type="button"
          onClick={() => onModalClose(false)}>
          <svg width={35} height={35} fill="#fff" viewBox="0 0 24 24" id="close">
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
    </div>
  );
}
