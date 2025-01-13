import React from 'react';
import { ItemField } from './ItemSideBar';
import {
  MdOutlineInfo,
  MdOutlineLocationOn,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { CgRename } from 'react-icons/cg';
import { FiBox } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TbCategory } from 'react-icons/tb';
import { StatusBadge } from './StatusBadge';

export const DisplayView = ({ updatedItem, item }) => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full items-center gap-6 bg-gray-100 p-4">
        <MdOutlineInfo className="size-6" />
        <h2 className="font-primary text-xl font-medium">Details</h2>
      </div>
      <div className="flex flex-col gap-4 px-4 py-10">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <ItemField
              fieldName={'Item Name'}
              fieldValue={updatedItem.itemName}
            >
              <CgRename className="size-6" />
            </ItemField>
            <ItemField fieldName={'Stock'} fieldValue={updatedItem.quantity}>
              <FiBox className="size-6" />
            </ItemField>
            <ItemField
              fieldName={'Storage'}
              fieldValue={updatedItem.storageLocation}
            >
              <MdOutlineLocationOn className="size-6" />
            </ItemField>
            <ItemField
              fieldName={'Purchase Price'}
              fieldValue={updatedItem.purchasePrice}
            >
              <BsCurrencyDollar className="size-6" />
            </ItemField>
            <ItemField
              fieldName={'Category'}
              fieldValue={updatedItem.category ?? 'Placeholder'}
            >
              <TbCategory className="size-6" />
            </ItemField>
            <ItemField
              fieldName={'Reorder Point'}
              fieldValue={updatedItem.reorderPoint}
            >
              <MdProductionQuantityLimits className="size-6" />
            </ItemField>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-quantGray flex items-center gap-2">
            <StatusBadge
              status={item.status}
              isTextShown={true}
              isCircleShown={true}
              width="full"
            />{' '}
          </div>
        </div>
      </div>

      {/* This section will be added in the future
          <div className="flex w-full items-center gap-6 bg-gray-100 p-4">
            <RiHistoryFill className="size-6" />
            <h2 className="font-primary text-xl font-medium">History</h2>
          </div>
          <div className="flex gap-4 px-4 py-10">
            <div className="">
              <ItemField
                fieldName={'Created By'}
                fieldValue={updatedItem.reorderPoint}
              >
                <BsCart className="size-6" />
              </ItemField>
            </div>
          </div> */}
    </div>
  );
};
