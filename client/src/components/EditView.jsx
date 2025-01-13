import React from 'react';
import { FormField } from './AddItem';
import { StatusBadge } from './StatusBadge';

export const EditView = ({ item, handleChange }) => {
  return (
    <form className="flex w-full flex-col items-center gap-6 px-4 py-10">
      <div className="flex w-full flex-col gap-4">
        <FormField
          name={'Name'}
          mandatory={true}
          placeholder={'Quantify Item'}
          value={item.itemName}
          setter={(value) => handleChange('itemName', value)}
          id={'name'}
        />
        <FormField
          name={'Quantity'}
          mandatory={true}
          placeholder={'40'}
          value={item.quantity}
          setter={(value) => handleChange('quantity', value)}
          id={'quantity'}
        />

        <FormField
          name={'Purchase Price'}
          mandatory={false}
          placeholder={'1.99'}
          value={item.purchasePrice}
          setter={(value) => handleChange('purchasePrice', value)}
          id={'purchase-price'}
        />
        <FormField
          name={'Reorder Point'}
          mandatory={true}
          placeholder={'5'}
          value={item.reorderPoint}
          setter={(value) => handleChange('reorderPoint', value)}
          id={'reorder-point'}
        />

        <FormField
          name={'Storage Location'}
          mandatory={false}
          placeholder={'Room 1'}
          value={item.storageLocation}
          setter={(value) => handleChange('storageLocation', value)}
          id={'storage-location'}
        />
        <FormField
          name={'Category'}
          mandatory={false}
          placeholder={'Category'}
          value={item.category}
          setter={(value) => handleChange('category', value)}
          id={'category'}
        />
      </div>
      <div className="flex w-full gap-20">
        <div className="">
          <StatusBadge
            status={item.status}
            isCircleShown={true}
            isTextShown={true}
          />
        </div>
      </div>
    </form>
  );
};
