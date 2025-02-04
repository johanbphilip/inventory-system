import { AddItem } from '../components/AddItem';

export const AddItemPage = () => {
  return (
    <main className="flex flex-col p-4">
      <div className="flex flex-col">
        <h1 className="font-primary text-5xl font-semibold">Add Item</h1>
        <p className="text-quantGray">Add an item to your inventory here.</p>
      </div>
      <div className="bg-gray-100 h-full w-full mt-4 rounded-md p-4">
        <form>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-quantDark text-sm" htmlFor="item-name">
                  Item Name
                </label>
                <input
                  className="p-2 w-full rounded-md bg-white placeholder:font-light focus:outline-2  required:invalid:outline-red-500 focus:outline-quantHighlight"
                  type="text"
                  id="item-name"
                  name="item-name"
                  required
                />
              </div>
              <div className="flex gap-4 w-full items-center">
                <label className="peer" htmlFor="favourite-checkbox">
                  Favourite?
                </label>
                <input
                  type="checkbox"
                  className="size-4 appearance-none bg-white border border-gray-700 rounded cursor-pointer checked:bg-purple-600 checked:border-purple-600 "
                  name="favourite-checkbox"
                  id="favourite-checkbox"
                />
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label
                  className="text-quantDark text-sm"
                  htmlFor="item-quantity"
                >
                  Item Quantity
                </label>
                <input
                  className="rounded-md p-2 required:invalid:outline-red-500"
                  type="number"
                  id="item-quantity"
                  name="item-quantity"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  className="text-quantDark text-sm"
                  htmlFor="reorder-point"
                >
                  Reorder Point
                </label>
                <input
                  className="rounded-md p-2 focus:outline-quantHighlight"
                  type="number"
                  id="reorder-point"
                  name="reorder-point"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-quantDark text-sm"
                htmlFor="purchase-price"
              >
                Purchase Price
              </label>
              <input className="p-2 w-full rounded-md bg-white placeholder:font-light focus:outline-2 focus:outline-quantHighlight" />
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label
                  className="text-quantDark text-sm"
                  htmlFor="item-category"
                >
                  Item Category
                </label>
                <select
                  className="rounded-md p-2 focus:outline-quantHighlight"
                  id="item-category"
                  name="item-category"
                >
                  <option value=""></option>
                  <option value="FOOD">Food</option>
                  <option value="DRINK">Drink</option>
                  <option value="DRINK">Add New</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  className="text-quantDark text-sm"
                  htmlFor="storage-location"
                >
                  Storage Location
                </label>
                <select
                  className="rounded-md p-2 focus:outline-quantHighlight"
                  id="storage-location"
                  name="storage-location"
                >
                  <option value=""></option>
                  <option value="FOOD">Food</option>
                  <option value="DRINK">Drink</option>
                </select>
              </div>
            </div>
            {/* <div className="flex flex-col gap-2">
              <label
                className="text-quantDark text-sm"
                htmlFor="item-description"
              >
                Item Description
              </label>
              <textarea
                className="rounded-md p-2"
                id="item-description"
                name="item-description"
                required
              ></textarea>
            </div> */}
            <div className="flex gap-4 w-full justify-end">
              <button className="border border-quantHighlight text-quantHighlight rounded-md py-2 px-4 bg-white">
                Cancel
              </button>

              <button
                className="bg-quantHighlight text-white rounded-md py-2 px-4"
                type="submit"
              >
                Add Item
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <div>
        <AddItem />
      </div> */}
    </main>
  );
};
