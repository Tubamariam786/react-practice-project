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
    <form onSubmit={formik.handleSubmit} className="mt-12 px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
      {/* Card and Bank Account */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full">
          <span className="absolute top-3 left-3 text-blue-500">
            <FaRegCreditCard />
          </span>
          <input
            type="text"
            placeholder="Card"
            className="w-full p-3 pl-10 border border-blue-300 rounded focus:outline-none hover:shadow-md"
            {...formik.getFieldProps("card")}
          />
          {formik.touched.card && formik.errors.card && (
            <div className="text-red-500 text-sm">{formik.errors.card}</div>
          )}
        </div>
        <div className="relative w-full">
          <span className="absolute top-3 left-3">
            <CiBank />
          </span>
          <input
            type="text"
            placeholder="Bank Account"
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none hover:shadow-md"
            {...formik.getFieldProps("bankAccount")}
          />
          {formik.touched.bankAccount && formik.errors.bankAccount && (
            <div className="text-red-500 text-sm">{formik.errors.bankAccount}</div>
          )}
        </div>
      </div>

      {/* Credit Card Details */}
      <div className="bg-gray-100 mt-12 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Credit Card</div>
          <FaSimCard className="text-4xl" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <div className="w-full">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card number* :
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="0000 0000 0000 0000"
              className="w-full p-3 border rounded-lg focus:outline-none"
              {...formik.getFieldProps("cardNumber")}
            />
            {formik.touched.cardNumber && formik.errors.cardNumber && (
              <div className="text-red-500 text-sm">{formik.errors.cardNumber}</div>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
              CVV* :
            </label>
            <input
              id="cvv"
              type="text"
              placeholder="123"
              className="w-full p-3 border rounded-lg focus:outline-none"
              {...formik.getFieldProps("cvv")}
            />
            {formik.touched.cvv && formik.errors.cvv && (
              <div className="text-red-500 text-sm">{formik.errors.cvv}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name* :
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Snow"
              className="w-full p-3 border rounded-lg focus:outline-none"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
              Expiration date* :
            </label>
            <input
              id="expirationDate"
              type="text"
              placeholder="MM/YY"
              className="w-full p-3 border rounded-lg focus:outline-none"
              {...formik.getFieldProps("expirationDate")}
            />
            {formik.touched.expirationDate && formik.errors.expirationDate && (
              <div className="text-red-500 text-sm">{formik.errors.expirationDate}</div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
          <input
            type="checkbox"
            id="useAddressForPayment"
            className="mt-2 mb-10 p-2"
            {...formik.getFieldProps("useAddressForPayment")}
          />
          <span className="pl-2 text-gray-600">
            Use this address for payment details
          </span>
        </div>

      {/* Actions */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-200 text-gray-600 hover:bg-gray-700 hover:text-white  px-4 rounded-lg"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white  py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Next
        </button>
      </div>
      
    </form>
  );
}

export default Debitcard;
