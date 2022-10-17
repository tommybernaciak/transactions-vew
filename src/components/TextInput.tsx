import { ChangeEvent, FC } from 'react';

interface IProps {
  value: string | number;
  type?: string;
  error?: string;
  touched?: boolean;
  id: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

const TextInput: FC<IProps> = ({ value, type = 'text', error, touched, id, onChange }) => {
  const showError = Boolean(error) && Boolean(touched);
  return (
    <>
      <input
        data-testid="text-input"
        className="form-control block w-full px-1 py-1 text-base font-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-200 focus:outline-none"
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        value={value}
      />
      <div className="h-5 mt-1">
        {showError && (
          <p data-testid="text-input-error" className="text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    </>
  );
};

export default TextInput;
