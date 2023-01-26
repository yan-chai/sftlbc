import { getInfo } from "./service";

export default {
    namespace: 'info',
    state: [],
    reducers: {
        getInfo(state, {payload}) {
            if (payload == null) {
                return state;
            }
            let newState = state
            newState.push(payload)
            return newState;
        }
    },
    effects: {
        *getRemote(action, {select, call, put}) {
            const curr = yield select(state => state)
            let data = null
            if (curr.info.length == 0) {
                data = yield call(getInfo);
                yield put({
                    type: "getInfo",
                    payload: data,
                });
            } else {
                yield put({
                    type: "getInfo",
                    payload: data,
                });
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}