import {getCard} from './service.js'

export default {
    namespace: 'card',
    state: [],
    reducers: {
        getCard(state, {payload}) {
            if (payload.length == 0) {
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
                data = yield call(getCard);
                yield put({
                    type: "getCard",
                    payload: data,
                });
            } else {
                yield put({
                    type: "getCard",
                    payload: data,
                });
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(({pathname}) => {
                if (pathname === '/ministry') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}