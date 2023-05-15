"use client";

import Image, { StaticImageData } from "next/image";
import play from "@/public/images/icons/play.svg";
import { useState } from "react";
import Modal from "@/components/modal/Modal";

interface InfoProps {
  title: string;
  alt: string;
  description: string;
  image: StaticImageData;
}

export default function Card({ info }: { info: InfoProps }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center gap-4 rounded border border-secondary-clr px-4 py-8 text-center shadow-md duration-300 ease-in-out hover:-translate-y-2">
        <Image src={info.image} width={80} height={80} alt={info.alt} />
        <h3 className="my-3 text-3xl font-semibold text-primary-clr">{info.title}</h3>
        <div className="leading-tight">
          <p>{info.description}</p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="mt-4 flex items-center justify-center gap-2">
          <Image src={play} width={24} height={24} alt="icon - play button" />
          <span>Watch video</span>
        </button>
      </div>
      {openModal && (
        <Modal onModalClose={() => setOpenModal(false)}>
          <video>asd</video>
        </Modal>
      )}
    </>
  );
}
