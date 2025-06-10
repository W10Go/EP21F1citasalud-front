export default function InputRegister({
  data,
  name,
  type,
  setData,
}: {
  data: string;
  name: string;
  type: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="w-full  lg:w-2/5">
      <label className="text-[18px] font-bold">{name} </label>
      <label className="text-red-700"> *</label>
      <br />
      <input
        type={type}
        onChange={(e) => setData(e.target.value)}
        value={data}
        className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
      />
    </div>
  );
}
