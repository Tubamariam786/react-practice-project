import { useFormik } from "formik";
import * as Yup from "yup";

function Form({ handleNext, formData, setFormData }) {
  const initialValues = {
    fullName: formData.fullName || "",
    lastName: formData.lastName || "",
    address1: formData.address1 || "",
    address2: formData.address2 || "",
    city: formData.city || "",
    state: formData.state || "",
    zip: formData.zip || "",
    country: formData.country || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      address1: Yup.string().required("Address line 1 is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zip: Yup.string().required("Zip / Postal Code is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data", values);
      setFormData({ ...formData, ...values });
      handleNext();
    },
  });

  return (
    <div className="pt-10 pl-0 ">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-around">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="fullName"
              className="mb-2 block text-gray-600 text-sm"
            >
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-600 text-sm">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>

          <div className="w-1/2 pl-2">
            <label
              htmlFor="lastName"
              className="mb-2 block text-gray-600 text-sm"
            >
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Snow"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-600 text-sm">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="address1"
            className="mb-2 block text-gray-600 text-sm"
          >
            Address line 1 *
          </label>
          <input
            type="text"
            name="address1"
            id="address1"
            placeholder="Street name and number"
            className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
            {...formik.getFieldProps("address1")}
          />
          {formik.touched.address1 && formik.errors.address1 ? (
            <div className="text-red-600 text-sm">{formik.errors.address1}</div>
          ) : null}
        </div>

        <div className="mt-4">
          <label
            htmlFor="address2"
            className="mb-2 block text-gray-600 text-sm"
          >
            Address line 2
          </label>
          <input
            type="text"
            name="address2"
            id="address2"
            placeholder="Apartment, suite, etc."
            className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
            {...formik.getFieldProps("address2")}
          />
        </div>

        <div className="flex justify-around mt-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="city" className="mb-2 block text-gray-600 text-sm">
              City *
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="New York"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
              {...formik.getFieldProps("city")}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-red-600 text-sm">{formik.errors.city}</div>
            ) : null}
          </div>

          <div className="w-1/2 pl-2">
            <label htmlFor="state" className="mb-2 block text-gray-600 text-sm">
              State *
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="NY"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
              {...formik.getFieldProps("state")}
            />
            {formik.touched.state && formik.errors.state ? (
              <div className="text-red-600 text-sm">{formik.errors.state}</div>
            ) : null}
          </div>
        </div>

        <div className="flex justify-around mt-4">
          <div className="w-1/2 pr-2">
            <label htmlFor="zip" className="mb-2 block text-gray-600 text-sm">
              Zip / Postal Code *
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder="12345"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
              {...formik.getFieldProps("zip")}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className="text-red-600 text-sm">{formik.errors.zip}</div>
            ) : null}
          </div>

          <div className="w-1/2 pl-2">
            <label
              htmlFor="country"
              className="mb-2 block text-gray-600 text-sm"
            >
              Country *
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="United States"
              className="border border-gray-300 rounded-lg focus:outline-none p-1 pl-4 w-full"
              {...formik.getFieldProps("country")}
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-red-600 text-sm">
                {formik.errors.country}
              </div>
            ) : null}
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

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg focus:outline-none float-right mt-6"
        >
          Next 
        </button> 
      </form>
    </div>
  );
}

export default Form;
