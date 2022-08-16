import { getYears } from "./service";

export default {
    namespace: 'years',
    state: [],
    reducers: {
        getYears(state, {payload}) {
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
            if (curr.years.length == 0) {
                data = yield call(getYears);
                yield put({
                    type: "getYears",
                    payload: data,
                });
            } else {
                yield put({
                    type: "getYears",
                    payload: data,
                });
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if (pathname === '/worship') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}