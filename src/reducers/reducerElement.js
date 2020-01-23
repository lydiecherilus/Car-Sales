export const reducerElement = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.includes(action.payload) ?
                        [...state.car.features] : [...state.car.features, action.payload]
                }
            }

        case REMOVE_FEATURE:
            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(car =>
                        car.id !== action.paylaod.id
                    )
                }
            };

        case NEW_TOTAL:
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload
            };

        default:
            return state;
    }
}

const initialState = {
    additionlPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const BUY_ITEM = 'BUY_ITEM';
export const buyItem = (feature) => {
    return {
        type: 'BUY_ITEM',
        payload: feature
    };
};

export const REMOVE_FEATURE = 'REMOVE_REMOVE';
export const removeFeature = (feature) => {
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    };
};

export const NEW_TOTAL = 'NEW_TOTAL';
export const newTotal = (total) => {
    return {
        type: 'NEW_TOTAL',
        payload: total
    };
};