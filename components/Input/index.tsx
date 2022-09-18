const Input = ({ onChange, value, placeHolder }: any) => (
  <input
    type='text'
    value={value}
    onChange={onChange}
    placeholder={placeHolder}
    className='input'
  />
);

export default Input;
