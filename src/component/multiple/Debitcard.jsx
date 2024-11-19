import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegCreditCard, FaSimCard } from "react-icons/fa";
import { CiBank } from "react-icons/ci";

function Debitcard({ handleNext, handleBack, formData, setformData }) {
  const initialValues = {
    card: formData.card || "",
    bankAccount: formData.bankAccount || "",
    cardNumber: formData.cardNumber || "",
    cvv: formData.cvv || "",
    name: formData.name || "",
    expirationDate: formData.expirationDate || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      card: Yup.string().required("Card is required"),
      bankAccount: Yup.string().required("Bank account is required"),
      cardNumber: Yup.string()
        .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Must be in format 0000 0000 0000 0000")
        .required("Card number is required"),
      cvv: Yup.string()
        .matches(/^\d{3}$/, "Must be a 3-digit number")
        .required("CVV is required"),
      name: Yup.string().required("Name is required"),
      expirationDate: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Must be in MM/YY format")
        .required("Expiration date is required"),
    }),
    onSubmit: (values) => {
      setformData({ ...formData, ...values });
      handleNext();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-24 px-6">
      <div className="flex justify-between">
        <div className="flex-1 mr-2 relative">
          <span className="absolute pt-4 pl-4 text-blue-500">
            <FaRegCreditCard />
          </span>
          <input
            type="text"
            placeholder="Card"
            className="w-full p-3 border border-blue-300 rounded pl-10 focus:outline-none hover:shadow-md"
            {...formik.getFieldProps("card")}
          />
          {formik.touched.card && formik.errors.card && (
            <div className="text-red-500 text-sm">{formik.errors.card}</div>
          )}
        </div>

        <div className="flex-1 ml-2 relative">
          <span className="absolute pt-4 pl-4">
            <CiBank />
          </span>
          <input
            type="text"
            placeholder="Bank Account"
            className="w-full p-3 border border-gray-300 rounded pl-10 focus:outline-none hover:shadow-md"
            {...formik.getFieldProps("bankAccount")}
          />
          {formik.touched.bankAccount && formik.errors.bankAccount && (
            <div className="text-red-500 text-sm">{formik.errors.bankAccount}</div>
          )}
        </div>
      </div>

      <div className="h-full bg-gray-100 pr-24 mt-10 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Credit Card</div>
          <FaSimCard className="text-6xl mt-8 ml-8" />
        </div>

        <div className="flex justify-between mt-16">
          <div className="flex-1 mr-2">
            <label htmlFor="cardNumber" className="block text-gray-700 font-medium">
              Card number* :
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
              className="p-2 border border-gray-300 rounded-lg  focus:outline-none hover:border-blue-500"
              {...formik.getFieldProps("cardNumber")}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber && (
              <div className="text-red-500 text-sm">{formik.errors.cardNumber}</div>
            )}
          </div>

          <div className="flex-1 ml-2">
            <label htmlFor="cvv" className="block font-medium text-gray-700">
              CVV* :
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="123"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none hover:border-blue-500"
              style={{ width: "150px" }}
              {...formik.getFieldProps("cvv")}
            />
            {formik.touched.cvv && formik.errors.cvv && (
              <div className="text-red-500 text-sm">{formik.errors.cvv}</div>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-8 mb-8">
          <div className="flex-1 mr-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name* :
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Snow"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none hover:border-blue-500"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>

          <div className="flex-1 ml-4">
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
              Expiration date * :
            </label>
            <input
              id="expirationDate"
              type="text"
              placeholder="MM/YY"
              className="w-full p-2 border rounded-lg border-gray-300 focus:outline-none hover:border-blue-500"
              {...formik.getFieldProps("expirationDate")}
            />
            {formik.touched.expirationDate && formik.errors.expirationDate && (
              <div className="text-red-500 text-sm">{formik.errors.expirationDate}</div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label>
          <input
            type="checkbox"
            id="useAddressForPayment"
            className="mr-2"
          /> 
          Remember credit card details for next time
        </label>
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg focus:outline-none"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg focus:outline-none"
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default Debitcard;
