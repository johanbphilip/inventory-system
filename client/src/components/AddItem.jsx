import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { FaAsterisk } from 'react-icons/fa';
import { CiCircleQuestion } from 'react-icons/ci';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { server } from '../axios';

export const AddItem = ({ setIsAddItemOpen, onSave }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [reorderPoint, setReorderPoint] = useState(0);
  const [storageLocation, setStorageLocation] = useState(' ');
  // const [status, setStatus] = useState('');
  const [category, setCategory] = useState(' ');
  const [expiry, setExpiry] = useState();
  const [description, setDescription] = useState(' ');
  const [isLoading, setIsLoading] = useState(false);
  const [totalError, setTotalError] = useState('');
  const [errors, setErrors] = useState({
    itemName: '',
    quantity: '',
    purchasePrice: '',
    reorderPoint: '',
    storageLocation: '',
    category: '',
    expiry: '',
    description: '',
  });
  const newErrors = {
    itemName: '',
    quantity: '',
    purchasePrice: '',
    reorderPoint: '',
    storageLocation: '',
    category: '',
    expiry: '',
    description: '',
  };
  const digitRegex = /^[0-9]+$/;
  const priceRegex = /^\d+(\.\d+)?$/;
  const validate = () => {
    let valid = true;

    if (!itemName) {
      newErrors.itemName = 'Item name is required.';
      valid = false;
    }

    if (!quantity && quantity !== 0) {
      newErrors.quantity = 'The quantity of the item is required.';
      valid = false;
    } else if (!digitRegex.test(quantity)) {
      newErrors.quantity = 'Please ensure the value is a whole number';
      valid = false;
    }
    if (!purchasePrice) {
      newErrors.purchasePrice = 'The purchase price of the item is required.';
      valid = false;
    } else if (!priceRegex.test(purchasePrice)) {
      newErrors.purchasePrice =
        'Please ensure the value is a number and can contain decimals';
      valid = false;
    }
    if (!reorderPoint) {
      newErrors.reorderPoint = 'The reorder point of the item is required.';
      valid = false;
    } else if (!digitRegex.test(reorderPoint)) {
      newErrors.quantity = 'Please ensure the value is a whole number';
      valid = false;
    }
    if (!storageLocation) {
      newErrors.storageLocation =
        'Please enter a storage location for the item.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };
  //create an item after doing all teh validations

  const handleAddItem = async () => {
    setIsLoading(true);

    if (!validate()) {
      console.log('Error with adding new item');
      return;
    }

    let status = '';
    let statusColor = '';
    console.log(status);
    if (quantity > reorderPoint) {
      status = 'SUFFICIENT';
    } else if (quantity === reorderPoint) {
      status = 'LOW';
    } else if (quantity < reorderPoint) {
      status = 'CRITICAL';
    }
    console.log(status);
    try {
      const { data } = await server.post('/api/item/', {
        itemName,
        quantity,
        purchasePrice,
        reorderPoint,
        storageLocation,
        status,
        statusColor,
        category,
        expiry,
        description,
      });
      onSave();
      console.log('Added new item successfully :', data);
    } catch (error) {
      setTotalError(error.response?.data?.message);
      console.log('Log from handleAddItem:', error);
      console.log(error);
      setTotalError('');
    } finally {
      setIsLoading(false);
      setIsAddItemOpen((prev) => !prev);
    }
  };
  const explanations = {
    name: 'The name of the item you wish to add',
    quantity: 'The amount of the item currently on hand',
    purchasePrice: 'The cost of reordering the item',
    reorderPoint: 'The point at which you want to be alerted of low stocks',
    storageLocation: 'The storage location of the item',
    category: 'The items type/category',
  };
  return (
    <div className=" flex h-full w-full flex-col items-center justify-between bg-transparent p-60 backdrop-blur-md">
      {' '}
      <div className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold">Add Item</h2>
        <div className="flex gap-4">
          {/**Add to DB */}
          <button
            className="rounded-lg bg-black p-2 text-white"
            onClick={handleAddItem}
            disabled={isLoading}
          >
            Add & Continue
          </button>
          {/**Close Add page */}
          <button
            className="rounded-full hover:bg-black"
            onClick={() => setIsAddItemOpen((prev) => !prev)}
          >
            <IoIosClose className="size-10 hover:fill-white" />
          </button>
        </div>
      </div>
      <form
        className="flex w-full flex-col items-center gap-6"
        onSubmit={handleAddItem}
      >
        <div className="flex w-full gap-20">
          <FormField
            name={'Name'}
            mandatory={true}
            placeholder={'Quantify Item'}
            value={itemName}
            setter={setItemName}
            id={'name'}
            inputError={errors.itemName}
          />
          <FormField
            name={'Quantity'}
            mandatory={true}
            placeholder={'40'}
            value={quantity}
            setter={setQuantity}
            id={'quantity'}
            inputError={errors.quantity}
          />
        </div>
        <div className="flex w-full gap-20">
          <FormField
            name={'Purchase Price'}
            placeholder={'1.99'}
            mandatory={true}
            value={purchasePrice}
            setter={setPurchasePrice}
            id={'purchase-price'}
            inputError={errors.purchasePrice}
          />
          <FormField
            name={'Reorder Point'}
            mandatory={true}
            placeholder={'5'}
            value={reorderPoint}
            setter={setReorderPoint}
            id={'reorder-point'}
            inputError={errors.reorderPoint}
          />
        </div>
        <div className="flex w-full gap-20">
          <FormField
            name={'Storage Location'}
            placeholder={'Room 1'}
            mandatory={true}
            value={storageLocation}
            setter={setStorageLocation}
            id={'storage-location'}
            inputError={errors.storageLocation}
          />
          <FormField
            name={'Category'}
            placeholder={'Category'}
            value={category}
            setter={setCategory}
            id={'category'}
            inputError={errors.category}
          />
        </div>
        <div className="flex w-full gap-20">
          <FormField
            type={'date'}
            name={'Expiry'}
            placeholder={'2025-12-31'}
            value={expiry}
            setter={setExpiry}
            id={'expiry-date'}
            inputError={errors.expiry}
          />
          <FormField
            name={'Description'}
            maxLength={100}
            placeholder={'Description or notes'}
            value={description}
            setter={setDescription}
            id={'description'}
            inputError={errors.description}
          />
        </div>
      </form>
    </div>
  );
};

export const FormField = ({
  type = 'text',
  maxLength = 20,
  name,
  placeholder,
  value,
  setter,
  mandatory = false,
  id,
  inputError,
  // explanation,
}) => {
  // const [showExplanation, setShowExplanation] = useState(false);
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label className="flex items-center gap-2" htmlFor={id}>
        {name}
        {mandatory && <FaAsterisk className="size-2 fill-red-600" />}
        {/* <button
          className="rounded-full p-0 hover:bg-black"
          onClick={() => setShowExplanation(true)}
        >
          <MdOutlineQuestionMark className="size-4 hover:fill-gray-400" />
        </button> */}
      </label>
      {/* {showExplanation && <p className="">{'explanation'}</p>} */}
      <input
        type={type}
        maxLength={maxLength}
        // type={`${type}`}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setter(e.target.value)}
        className="focus:border-quantHighlight w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 placeholder:font-light focus:outline-none"
      />
      {inputError && <p className="text-sm text-red-500">{inputError}</p>}
    </div>
  );
};
