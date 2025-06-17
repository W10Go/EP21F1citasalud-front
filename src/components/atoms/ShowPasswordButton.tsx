import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function ShowPasswordButton({
  showPassword,
  togglePasswordVisibility,
}: Readonly<{
  showPassword: boolean;
  togglePasswordVisibility: () => void;
}>) {
  return (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
    </button>
  );
}
