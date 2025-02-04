import { useState } from 'react';
import { StatusBadge } from './StatusBadge';
import { IoMdHeart } from 'react-icons/io';
import {
  PiArrowCircleUpRightLight,
  PiArrowCircleRightLight,
  PiArrowCircleLeftLight,
} from 'react-icons/pi';
import { NavLink } from 'react-router';
// import { UseGetAllItems } from '../hooks/UseGetAllItems';
import { UseGetAllFavourites } from '../hooks/UseGetAllFavourites';

export const FavouriteItem = () => {
  const { favouriteItems, isLoading } = UseGetAllFavourites();

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % favouriteItems.length);
    1;
  };
  const handlePreviousItem = () => {
    if (currentIndex === 0) {
      setCurrentIndex(favouriteItems.length - 1);
      return;
    }
    setCurrentIndex((prev) => (prev - 1) % favouriteItems.length);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!favouriteItems || favouriteItems.length === 0) {
    return <div>No favourites available.</div>;
  }
  return (
    <div className="flex h-80 w-1/2 flex-col items-center justify-between gap-2 rounded-md border p-4">
      <div className="flex w-full items-center justify-between">
        <StatusBadge
          status={favouriteItems[currentIndex].status}
          isCircleShown={true}
          isTextShown={true}
          width="fit"
        />
        <div className="flex items-center gap-2">
          <IoMdHeart className="hover:fill-quantHighlight hover:stroke-quantHighlight size-8 hover:cursor-pointer" />
          <NavLink to={'/favourites'}>
            <PiArrowCircleUpRightLight className="hover:fill-quantHighlight size-7 hover:cursor-pointer" />
          </NavLink>
        </div>
        {/* <h2 className="text-lg font-medium">Favourite</h2> */}
      </div>
      <div className="flex w-full items-end justify-between gap-2">
        <div className="flex items-center gap-2">
          {favouriteItems && (
            <>
              <h2 className="text-9xl font-medium">
                {favouriteItems[currentIndex].quantity}
              </h2>
              <div className="flex h-full flex-col justify-center">
                <p className="font-medium">
                  {favouriteItems[currentIndex].category}{' '}
                </p>
                <p className="font-medium">
                  {favouriteItems[currentIndex].storageLocation}
                </p>
                <p className="font-medium">
                  {`$${favouriteItems[currentIndex].purchasePrice}`}
                </p>
                <p className="text-4xl font-semibold">
                  {favouriteItems[currentIndex].itemName}
                </p>
              </div>
            </>
          )}
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
      </div>
    </div>
  );
};
