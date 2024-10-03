const CheckBox = ({ onChange, isChecked }) => {
  return (
    <input
      type="checkbox"
      className="inline-grid place-items-center relative appearance-none border border-solid border-text-color-2 size-5 md:m-5 mt-4 mr-3 mb-4 ml-5 rounded-full hover:border-0 before:size-[90%] before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] checked:bg-gradient-to-br checked:from-linear-gradient-1 checked:to-linear-gradient-2 after:bg-check after:size-2/4 after:content-[''] after:scale-0 checked:after:scale-100 checked:before:bg-transparent hover:bg-gradient-to-br hover:from-linear-gradient-1 hover:to-linear-gradient-2 hover:scale-[1.2] before:bg-element-color"
      aria-label="Custom Checkbox"
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
