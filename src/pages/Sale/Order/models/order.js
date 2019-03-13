import {
    queryOrderGrid,
    addOrder, editOrder, deleteOrder,firstOrder

} from '@/services/api';

export default {
    namespace: 'order',
    state: {
    },
    effects: {
        *get({ payload }, { call, put }) {
            const { resolve, params } = payload;
            const response = yield call(firstOrder, params);
            !!resolve && resolve(response);
        },

        *grid({ payload }, { call, put }) {
            const { resolve, params } = payload;
            const response = yield call(queryOrderGrid, params);
            !!resolve && resolve(response);
        },

        *add({ payload }, { call, put }) {
            const { resolve, params } = payload;
            const response = yield call(addOrder, params);
            !!resolve && resolve(response);
        },

        *edit({ payload }, { call, put }) {
            const { resolve, params } = payload;
            const response = yield call(editOrder, params);
            !!resolve && resolve(response);
        },

        *delete({ payload }, { call, put }) {
            const { resolve, params } = payload;
            const response = yield call(deleteOrder, params);
            !!resolve && resolve(response);
        },
    },
    reducers: {
    },
};