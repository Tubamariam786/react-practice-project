function Finish({ formData = {} }) {
  return (
    <>
    <div className="p-5">
      <h1 className="text-lg font-bold mb-4">Thank you for your order!</h1>
      <p className="mb-2"><strong>Shipping Data:</strong></p>
      <ul className="list-disc pl-5 text-gray-700">
        <li><strong>Full Name </strong>{formData.fullName}</li>
        <li><strong>Last Name:</strong> {formData.lastName || "N/A"}</li>
        <li><strong>Address Line 1:</strong> {formData.address1 || "N/A"}</li>
        <li><strong>Address Line 2:</strong> {formData.address2 || "N/A"}</li>
        <li><strong>City:</strong> {formData.city || "N/A"}</li>
        <li><strong>State:</strong> {formData.state || "N/A"}</li>
        <li><strong>Zip Code:</strong> {formData.zip || "N/A"}</li>
        <li><strong>Country:</strong> {formData.country || "N/A"}</li>
      </ul>
    </div>
   <div className="p-5">
   <p className="mb-2"> <strong> Payment Detail :</strong></p>
   <ul className="list-disc pl-5 text-gray-700">
        <li><strong>Card :</strong> {formData.card}</li>
        <li><strong>Account:</strong> {formData.bankAccount|| "N/A"}</li>
        <li><strong>CardNumber:</strong> {formData.cardNumber|| "N/A"}</li>
        <li><strong>Cvv:</strong> {formData.cvv || "N/A"}</li>
        <li><strong> Name:</strong> {formData.name  || "N/A"}</li>
        <li><strong>ExpirationDate:</strong> {formData.expirationDate  || "N/A"}</li>
      </ul>

   </div>
    </>
  );
}

export default Finish;

