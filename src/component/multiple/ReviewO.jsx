function ReviewO({ handleNext, handleBack }) {
  return (
    <div className="mt-10 px-4 pb-8 max-w-lg mx-auto">
      <div className="flex justify-between py-4">
        <div className="text-sm font-medium">
          <h1>Products</h1>
          <h6 className="text-xs text-gray-500">4 selected</h6>
        </div>
        <div className="">$134.98</div>
      </div>

      <div className="flex justify-between py-4">
        <div className="text-sm font-medium">
          <h1>Shipping</h1>
          <h6 className="text-xs text-gray-500">Plus taxes</h6>
        </div>
        <div className="">$9.99</div>
      </div>

      <div className="flex justify-between py-4">
        <div className="text-sm font-bold">
          <h1>Total</h1>
        </div>
        <div className="font-bold">$144.97</div>
      </div>

      <hr />

      <div className="mt-4 mb-4 pl-1">
        <h1 className="text-sm font-medium">Shipment details</h1>
        <h4 className="text-sm text-gray-700">John Smith</h4>
        <h2 className="text-sm text-gray-600">
          1 MUI Drive, Reactville, Anytown, 99999, USA
        </h2>
      </div>

      <hr />

      <div className="mt-4 mb-8 pl-1">
        <h1 className="text-sm">Payment details</h1>
        <h2 className="text-sm text-gray-600">
          Card type: <span className="text-black">Visa</span>
        </h2>
        <h2 className="text-sm text-gray-600">
          Card number: <span className="text-black">xxxx-xxxx-xxxx-1234</span>
        </h2>
        <h2 className="text-sm text-gray-600">
          Expiry date: <span className="text-black">04/2024</span>
        </h2>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button" 
          onClick={handleBack} 
          className="bg-gray-200  text-gray-400 hover:bg-gray-500  hover:text-white  py-2 px-4 rounded-lg focus:outline-none"
        >
          Previous
        </button>
        <button
          type="button" 
          onClick={handleNext} 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ReviewO;
