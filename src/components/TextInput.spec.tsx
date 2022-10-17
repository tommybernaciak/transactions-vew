import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe(TextInput.name, () => {
  it('should render TextInput without error', () => {
    const rendered = render(<TextInput value="test" id="testId" onChange={() => {}} />);
    const input = rendered.getByTestId('text-input');
    const error = rendered.queryByTestId('text-input-error');

    expect(input).toBeVisible();
    expect(error).toBeNull();
  });

  it('should render TextInput with error', () => {
    const rendered = render(
      <TextInput
        value="test"
        id="testId"
        onChange={() => {}}
        error="error message"
        touched={true}
      />
    );
    const input = rendered.getByTestId('text-input');
    const error = rendered.queryByTestId('text-input-error');

    expect(input).toBeVisible();
    expect(error).toHaveTextContent('error message');
  });
});
