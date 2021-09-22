import {Thunk, Action, action, thunk} from 'easy-peasy';
import {login, getConfig} from 'api';

interface AppModule {
  isLogged: boolean;
  loading: boolean;
  config: any;
  setLoading: Action<AppModule, boolean>;
  getConfig: Thunk<AppModule, any>;
  setAuth: Action<AppModule, boolean>;
  setConfig: Action<AppModule, any>;
  Login: Thunk<AppModule, boolean>;
}

const app: AppModule = {
  isLogged: false,
  config: {},
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setAuth: action((state, payload) => {
    state.isLogged = payload;
  }),
  setConfig: action((state, payload) => {
    state.config = payload;
  }),
  getConfig: thunk(async (actions, payload) => {
    const {setLoading, setConfig} = actions;
    try {
      setLoading(true);
      const res = await getConfig();
      setConfig(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
