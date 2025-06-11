export default function InputRegister({
  data,
  name,
  type,
  setData,
}: Readonly<{
  data: string;
  name: string;
  type: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}>) {
  const id = name.toLowerCase().replace(/\s+/g, "-"); // Ej: "Nombre/s" → "nombre/s"

  return (
    <div className="w-full lg:w-2/5">
      <label htmlFor={id} className="text-[18px] font-bold">
        {name} <span className="text-red-700"> *</span>
      </label>
      <br />
      <input
        id={id}
        type={type}
        onChange={(e) => setData(e.target.value)}
        value={data}
        className="w-full px-4 py-2 mb-2 border-b-2 bg-gray-50 focus:outline-none"
      />
    </div>
  );
}
