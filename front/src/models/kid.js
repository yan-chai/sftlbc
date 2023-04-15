import {getKids} from './service.js'

export default {
    namespace: 'kids',
    state: [],
    reducers: {
        getKids(state, {payload}) {
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
            if (curr.kids.length == 0) {
                data = yield call(getKids);
                yield put({
                    type: "getKids",
                    payload: data,
                });
            } else {
                yield put({
                    type: "getKids",
                    payload: data,
                });
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if (pathname == '/kid' || pathname == '/ministry') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}