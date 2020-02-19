import produce from 'immer';

export default function cart (state = [], action) {

    console.log(state);

    switch (action.type) {
        case '@cart/ADD':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id == action.product.id);
                if (productIndex !== -1) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1
                    })
                }
            });
        break;
        default:
            return state;
        break;
    }
}