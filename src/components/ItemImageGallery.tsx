
"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  name: string;
};

export default function ItemImageGallery({ images, name }: Props) {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const gallery = images.filter(Boolean);

  if (gallery.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
        No image available
      </div>
    );
  }

  const previousImage = () => {
    setSelected((current) =>
      (current - 1 + gallery.length) % gallery.length
    );
  };

  const nextImage = () => {
    setSelected((current) => (current + 1) % gallery.length);
  };

  return (
    <>
      <div className="w-full">
        {/* MAIN IMAGE */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative block aspect-square w-full overflow-hidden rounded-2xl bg-gray-100"
          aria-label="Enlarge product image"
        >
          <Image
            key={gallery[selected]}
            src={gallery[selected]}
            alt={name}
            fill
            unoptimized
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />

          <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-xs text-white">
            Click to enlarge
          </span>
        </button>

        {/* THUMBNAIL GALLERY */}
        <div className="mt-4 flex gap-3 overflow-x-auto pb-3">
          {gallery.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Select image ${index + 1}`}
              aria-pressed={selected === index}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all sm:h-24 sm:w-24 ${
                selected === index
                  ? "border-green-700 ring-2 ring-green-100"
                  : "border-gray-200 hover:border-green-400"
              }`}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                unoptimized
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        <p className="mt-1 text-xs text-gray-500">
          {selected + 1} / {gallery.length} images
        </p>
      </div>

      {/* LARGE IMAGE VIEWER */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 z-20 rounded-full bg-white/20 p-3 text-white hover:bg-white/40"
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="absolute left-3 z-20 rounded-full bg-white/20 p-3 text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={gallery[selected]}
              alt={name}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {gallery.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 z-20 rounded-full bg-white/20 p-3 text-white"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
