import React, { useState } from 'react';
import { UseGetItemLevels } from '../hooks/UseGetItemLevels';
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from 'react-icons/pi';

export const LevelsTile = () => {
  const { itemLevels } = UseGetItemLevels();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % itemLevels.length);
    1;
  };
  const handlePreviousItem = () => {
    if (currentIndex === 0) {
      setCurrentIndex(itemLevels.length - 1);
      return;
    }
    setCurrentIndex((prev) => (prev - 1) % itemLevels.length);
  };
  return (
    <section className="flex w-1/2 flex-col items-center justify-between rounded-md border p-4 text-center">
      <h2 className="text-2xl font-bold">
        {currentIndex === 0
          ? 'CRITICAL'
          : currentIndex === 1
            ? 'SUFFICIENT'
            : 'LOW'}
      </h2>
      <p className="text-9xl font-semibold text-red-600">
        {itemLevels[currentIndex]}
      </p>
      <div className="font-light">
        <p>Something else here</p>
      </div>
      <div className="flex gap-2">
        <PiArrowCircleLeftLight
          className="hover:fill-quantHighlight size-7 hover:cursor-pointer"
          onClick={() => handlePreviousItem()}
        />
        <PiArrowCircleRightLight
          className="hover:fill-quantHighlight size-7 hover:cursor-pointer"
          onClick={() => handleNextItem()}
        />
      </div>
    </section>
  );
};
