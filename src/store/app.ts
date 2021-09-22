import { Thunk, Action, action, thunk, } from 'easy-peasy'

interface AppModule {
    isLogged: boolean
    loading: boolean
    setLoading: Action<AppModule, boolean>
    setAuth: Action<AppModule, boolean>
    Login: Thunk<AppModule, boolean>
}

const app: AppModule = {
    isLogged: false,
    loading: false,
    setLoading: action((state, payload) => {
        state.isLogged = payload
    }),
    setAuth: action((state, payload) => {
        state.isLogged = payload
    }),
    Login: thunk((actions, payload) => {
        const { setAuth, setLoading } = actions
        try {

        } catch (error) {

        }
    })

}


export default app

