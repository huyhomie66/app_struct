import {Thunk, Action, action, thunk} from 'easy-peasy';
import {login} from 'api';

interface AppModule {
  isLogged: boolean;
  loading: boolean;
  setLoading: Action<AppModule, boolean>;
  setAuth: Action<AppModule, boolean>;
  Login: Thunk<AppModule, boolean>;
}

const app: AppModule = {
  isLogged: false,
  loading: false,
  setLoading: action((state, payload) => {
    state.isLogged = payload;
  }),
  setAuth: action((state, payload) => {
    state.isLogged = payload;
  }),
  Login: thunk(async (actions, payload) => {
    const {setAuth, setLoading} = actions;
    try {
      setLoading(true);
      const token = await login();
      setLoading(false);
      setAuth(true);
    } catch (error) {
      setLoading(false);
    }
  }),
};

export default app;
