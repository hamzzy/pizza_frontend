// import Item1 from '../../images/item1.jpg'
// import Item2 from '../../images/item2.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'
// import Item5 from '../../images/item5.jpg'
// import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15

const initialState = {
    products: [
        {id: 1, title: 'Apple iPhone 8 Plus Gold 256GB 4G', description: 'Meld style and practicality with the Apple iPhone 8 Plus smartphone', price: '649.54', image: 'https://i.ebayimg.com/images/g/2tQAAOSwnhldR6hD/s-l640.jpg', amount: 5},
        {id: 2, title: 'Apple MacBook Pro Core i5 2.5GHz 13"', description: 'This MacBook Pro has been professionally restored to working order by an approved vendor', price: '339.97', image: 'https://i.ebayimg.com/images/g/AbEAAOSw2FJc3cCF/s-l1600.jpg', amount: 3},
        {id: 3, title: 'Canon EOS M50 Mirrorless Camera Body', description: '2160p UHD Video Recording, Built-in Flash, Body only, Auto Focus, AE/FE Lock, Tripod Thread', price: '450.00', image: 'https://i.ebayimg.com/images/g/PV8AAOSwX4FdRIac/s-l1600.jpg', amount: 4},
        {id: 4, title: 'VIZIO D-Series D24F-F1 24" Full HD Smart TV ', description: 'VIZIO D-Series D24F-F1 24" Full HD LED Smart TV. Condition is Manufacturer refurbished', price: '104.99', image: 'https://i.ebayimg.com/images/g/Pr0AAOSwd9ZdMgTG/s-l1600.jpg', amount: 2}
    ]
};

const productReducer = (state = initialState, action) => {

    return state;
};

export default productReducer;
