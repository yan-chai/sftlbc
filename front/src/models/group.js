import {getGroup} from './service.js'

export default {
    namespace: 'group',
    state: [],
    reducers: {
        getGroup(state, {payload}) {
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
            if (curr.card.length == 0) {
                data = yield call(getGroup);
                yield put({
                    type: "getGroup",
                    payload: data,
                });
            } else {
                yield put({
                    type: "getGroup",
                    payload: data,
                });
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if (pathname === '/pray') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}