import {clientsApi} from '../../api/api';

export const GET_CLIENTS = 'photogallery/clients/GET_CLIENTS';
export const IS_LOADING = 'photogallery/clients/IS_LOADING';

const initialState = {
  clients: [],
  isLoading: true,
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS: {
      return {
        ...state,
        clients: action.clients,
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

const getClientsSuccess = (clients) => ({type: GET_CLIENTS, clients});
const toggleIsLoading = (isLoading) => ({type: IS_LOADING, isLoading});

export const getClients = () => async (dispatch) => {
  dispatch(toggleIsLoading(true));
  try {
    const response = await clientsApi.getClients();
    dispatch(getClientsSuccess(response.data));
  } catch (err) {
    throw new Error(err);
  }
  dispatch(toggleIsLoading(false));
};

export default clients;
