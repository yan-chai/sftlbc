import {getSlider} from './service.js'

export default {
    namespace: 'slider',
    state: [],
    reducers: {
        getSlider(state, {payload}) {
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
            if (curr.slider.length == 0) {
                data = yield call(getSlider);
                yield put({
                    type: "getSlider",
                    payload: data,
                });
            } else {
                yield put({
                    type: "getSlider",
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