import BillItem from "./BillItem";

function Bill() {
  // Example data for each bill item
  const billItems = [
    {
      plan: "Professional Plan",
      description: "Monthly Subscription",
      amount: "$15.00",
    },
    {
      plan: "Dedicated support",
      description: "Annual Subscription",
      amount: "Free",
    },
    {
      plan: "Hardware",
      description: "Monthly Subscription",
      amount: "$69.99",
    },
    {
      plan: "Landing page template",
      description: "One-time Purchase",
      amount: "$49.99",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-md font-bold text-black">Total</h2>
        <h3 className="text-2xl font-semibold">$134.98</h3>
      </div>

      {/* Map over the billItems array to render BillItem components */}
      {billItems.map((item, index) => (
        <BillItem
          key={index}
          plan={item.plan}
          description={item.description}
          amount={item.amount}
        />
      ))}
    </div>
  );
}

export default Bill;
