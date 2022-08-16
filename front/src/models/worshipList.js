import { getWorshipList } from "./service";
import { history } from "umi";

export default {
    namespace: 'worship_list',
    state: [],
    reducers: {
        getList(state, {payload}) {
            if (payload == null) {
                return state;
            }
            return payload;
        }
    },
    effects: {
        *getRemote(action, {select, call, put}) {
            const queries = history.location.query
            const curr = yield select(state => state)
            var year = 0;
            var page = 1;
            var isSpeacial = false;
            if (queries.page != null) {
                page = queries.page;
            }
            console.log(queries)
            if (queries.isSpeacial == "true") {
                isSpeacial = true;
            }
            if (queries.year != null) {
                year = queries.year
            }
            const data = yield call(getWorshipList, year, isSpeacial, page)
            yield put({
            type: "getList",
                payload: data
            })
            console.log(data)
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