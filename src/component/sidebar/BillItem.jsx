const BillItem = ({ plan, description, amount }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h5 className="text-slate-900 font-semibold text-sm">{plan}</h5>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <h5 className="font-semibold ">{amount}</h5>
    </div>
  );
};

export default BillItem;
