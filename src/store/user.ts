import {Thunk, Action, action, thunk} from 'easy-peasy';

import {getProfile} from 'api';

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
  getProfile: thunk(async (actions, payload) => {
    const {setProfile, setLoading} = actions;
    try {
      setLoading(true);
      const res = await getProfile();
      setProfile(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }),
};

export default user;
