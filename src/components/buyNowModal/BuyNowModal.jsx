import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunc }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="cartPriceContainerBtn w-full px-4 py-3 text-center border rounded-xl"
      >
        Buy Now
      </Button>

      <Dialog open={open} handler={handleOpen} className="buyNowCard">
        <span className="flex justify-center items-center py-2 text-2xl">
          Enter details to ship your items.
        </span>
        <DialogBody className="">
          <div className="mb-3">
            <input
              value={addressInfo.fullName}
              onChange={(e) => {
                setAddressInfo({ ...addressInfo, fullName: e.target.value });
              }}
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className="px-2 py-2 w-full rounded-md border outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              value={addressInfo.fullAddress}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  fullAddress: e.target.value,
                });
              }}
              type="text"
              name="fullAddress"
              placeholder="Enter Full Address"
              className="px-2 py-2 w-full rounded-md border outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              value={addressInfo.cityName}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  cityName: e.target.value,
                });
              }}
              type="text"
              name="cityName"
              placeholder="Enter City Name"
              className="px-2 py-2 w-full rounded-md border outline-none"
            />
          </div>

          <div className="mb-3">
            <input
              value={addressInfo.contactNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  contactNumber: e.target.value,
                });
              }}
              type="number"
              name="contactNumber"
              placeholder="Enter Contact Number"
              className="px-2 py-2 w-full rounded-md border outline-none"
            />
          </div>

          <div className="">
            <Button
              type="button"
              onClick={() => {
                handleOpen();
                buyNowFunc();
              }}
              className="cartPriceContainerBtn w-full px-4 py-3 text-center border border-transparent rounded-lg"
            >
              Buy Now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
