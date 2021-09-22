import {Thunk, Action, action, thunk} from 'easy-peasy';

import {} from 'api';

interface UserModule {
  profile: any;
  loading: boolean;
  setLoading: Action<UserModule, boolean>;
  setProfile: Action<UserModule, boolean>;
  getProfile: Thunk<UserModule, any>;
}

const user: UserModule = {
  profile: {},
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setProfile: action((state, payload) => {
    state.profile = payload;
  }),
  getProfile: thunk((actions, payload) => ({})),
};

export default user;
