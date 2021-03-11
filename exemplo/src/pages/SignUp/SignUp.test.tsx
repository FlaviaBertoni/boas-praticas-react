import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '../../tools/test-utils';
import generateFakeUser from '../../tools/generateFakeUser';
import api from '../../services/api';
import SignUp from '.';

jest.mock('../../services/api');

const mockedApi = api as jest.Mocked<typeof api>;

const fakeUser = generateFakeUser();

describe('SignUp test case', () => {
  it('should be able to fill the form and call API with user data', async () => {
    render(<SignUp />);

    mockedApi.get.mockResolvedValue({ data: [] });
    mockedApi.post.mockResolvedValue({ status: 'ok' });

    const inputName = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputPassword = screen.getByLabelText(/senha/i);

    const button = screen.getByRole('button', { name: /registrar/i });

    userEvent.type(inputName, fakeUser.name);
    userEvent.type(inputEmail, fakeUser.email);
    userEvent.type(inputPassword, fakeUser.password);

    expect(inputName).toHaveValue(fakeUser.name);
    expect(inputEmail).toHaveValue(fakeUser.email);
    expect(inputPassword).toHaveValue(fakeUser.password);

    userEvent.click(button);

    expect(button).toBeDisabled();

    await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));

    expect(mockedApi.get).toHaveBeenCalled();
    expect(mockedApi.post).toHaveBeenCalled();
    expect(mockedApi.get).toHaveBeenCalledTimes(1);
    expect(mockedApi.post).toHaveBeenCalledTimes(1);
    expect(mockedApi.post).toHaveBeenCalledWith('/users', expect.objectContaining(fakeUser));
  });

  it('should be able to show a message when API communication fails', async () => {
    render(<SignUp />);

    mockedApi.get.mockRejectedValue(new Error('unit test error'));

    const inputName = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputPassword = screen.getByLabelText(/senha/i);

    const button = screen.getByRole('button', { name: /registrar/i });

    userEvent.type(inputName, fakeUser.name);
    userEvent.type(inputEmail, fakeUser.email);
    userEvent.type(inputPassword, fakeUser.password);

    expect(inputName).toHaveValue(fakeUser.name);
    expect(inputEmail).toHaveValue(fakeUser.email);
    expect(inputPassword).toHaveValue(fakeUser.password);

    userEvent.click(button);

    expect(button).toBeDisabled();

    await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));

    const errorElement = screen.getByRole('alert');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/unit test error/i);
  });

  it('should be able to not register a user with duplicated email', async () => {
    render(<SignUp />);

    mockedApi.get.mockResolvedValue({ data: [fakeUser.email] });

    const inputName = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputPassword = screen.getByLabelText(/senha/i);

    const button = screen.getByRole('button', { name: /registrar/i });

    userEvent.type(inputName, fakeUser.name);
    userEvent.type(inputEmail, fakeUser.email);
    userEvent.type(inputPassword, fakeUser.password);

    expect(inputName).toHaveValue(fakeUser.name);
    expect(inputEmail).toHaveValue(fakeUser.email);
    expect(inputPassword).toHaveValue(fakeUser.password);

    userEvent.click(button);

    expect(button).toBeDisabled();

    await waitForElementToBeRemoved(() => screen.getByRole('progressbar'));

    const errorElement = screen.getByRole('alert');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(/O email informado já está cadastrado./i);
  });
});
