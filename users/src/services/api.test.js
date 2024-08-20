import axios from 'axios';
import { fetchUsers } from './api';
import { toast } from 'sonner';

jest.mock('axios');
jest.mock('sonner');

describe('fetchUsers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return results on successful API call with non-empty results', async () => {
    const response = {
      data: {
        results: [{ id: 1, name: 'Cesar Garces' }],
      },
    };
    axios.get.mockResolvedValue(response);
    const result = await fetchUsers();
    expect(result).toEqual(response.data.results);
    expect(toast.success).toHaveBeenCalledTimes(1);
    expect(toast.success).toHaveBeenCalledWith('Usuarios recuperados exitosamente');
  });

  it('should throw error on successful API call with empty results', async () => {
    const response = {
      data: {
        results: [],
      },
    };
    axios.get.mockResolvedValue(response);
    await expect(fetchUsers()).rejects.toThrowError('No se encontraron resultados');
    expect(toast.success).not.toHaveBeenCalled();
  });

  it('should handle error on failed API call', async () => {
    const error = new Error('API error');
    axios.get.mockRejectedValue(error);
    await expect(fetchUsers()).rejects.toThrowError(error);
    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(toast.error).toHaveBeenCalledWith(error.message);
  });

  it('should handle error with toast.error', async () => {
    const error = new Error('API error');
    axios.get.mockRejectedValue(error);
    await expect(fetchUsers()).rejects.toThrowError(error);
    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(toast.error).toHaveBeenCalledWith(error.message);
  });
});