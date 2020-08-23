import * as actionTypes from './actions';


const updatePurchase = (flowers) => {
    const sum = Object.keys(flowers).map(flkey=>{
        return flowers[flkey];
    }).reduce((sum,curr)=>{
        return sum+curr;
    });
    return sum > 0;
}

const initialState = {
    flowerTypes : {
        daisy: 0,
        freesia: 0,
        hydrangea: 0,
        iris: 0,
        pinkRose:0,
        redRose:0,
        hyacinth:0,
        tulip:0,
        sunflower:0,
        whiteMagnolia:0,
        whiteRose:0,
        lily:0
    },
    flowerPrices: {
        daisy: 3.4,
        freesia: 2.4,
        hydrangea: 4.2,
        iris: 3.6,
        pinkRose:2.2,
        redRose:2.4,
        hyacinth:5.6,
        tulip:4.2,
        sunflower:1.7,
        whiteMagnolia:5.2,
        whiteRose:2.8,
        lily:3
    },
    price: 0,
    inCart: ' ',
    purchaseable: false

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.addItem:
            const updatedState = {
                ...state,
                price: state.price + state.flowerPrices[action.item],
                flowerTypes: {
                    ...state.flowerTypes,
                    [action.item]: state.flowerTypes[action.item] + 1
                },
                inCart: 'add',
            }
            updatedState.purchaseable = updatePurchase(updatedState.flowerTypes);
          return updatedState;
        case actionTypes.removeItem:
            const updatedStateAfterRemove = {
                ...state,
                price: (state.price > 0) ? state.price - state.flowerPrices[action.item]: state.price,
                flowerTypes: {
                    ...state.flowerTypes,
                    [action.item]: state.flowerTypes[action.item] - 1
                },
                inCart: 'remove'
              }
              updatedStateAfterRemove.purchaseable = updatePurchase(updatedStateAfterRemove.flowerTypes);
          return updatedStateAfterRemove;
        default:
          return state
      }

}

export default reducer;