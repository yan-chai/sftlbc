import {getFellowship} from './service.js'

export default {
    namespace: 'fellowship',
    state: [],
    reducers: {
        getFellowship(state, {payload}) {
            if (payload == null || payload.length == 0) {
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
            if (curr.fellowship.length == 0) {
                data = yield call(getFellowship);
                yield put({
                    type: "getFellowship",
                    payload: data,
                });
            } else {
                yield put({
                    type: "getFellowship",
                    payload: data,
                });
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if (pathname == '/fellowship' || pathname == '/ministry') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}