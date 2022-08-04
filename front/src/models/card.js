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
            let data = []
            if (curr.card.length == 0) {
                const res = yield call(getCard);
                console.log(res)
                for(var i=0,len=res.data.length;i<len;i+=3){
                    data.push(res.data.slice(i,i+3));
                  }
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
                if (pathname === '/') {
                    dispatch({
                        type: 'getRemote',
                    })
                }
            })
        }
    }
}