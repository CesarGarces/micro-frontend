import { toast } from 'sonner';

const errorMiddleware = () => next => action => {
  if (action.type.endsWith('rejected') && action.error) {
    console.error('Error detected:', action.error);
    toast.error(action.error.message || 'Ocurrió un error inesperado');
  }
  return next(action);
};

export default errorMiddleware;