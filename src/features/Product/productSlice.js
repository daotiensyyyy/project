import { createSlice } from "@reduxjs/toolkit";
import Categories from '../../constants/global';

const initialProducts = [
    {
        id: 1,
        name: 'Black bubble milktea',
        description: 'lorem ipsum anaconda version hta jahgq',
        categoryId: Categories.Category_1,
        price: 240000,
        photo: 'https://picsum.photos/id/532/300/300',

    },
    {
        id: 2,
        name: 'Crunch bubble milktea',
        description: 'lorem ipsum anaconda version hta jahgq',
        categoryId: Categories.Category_1,
        price: 240000,
        photo: 'https://picsum.photos/id/43/300/300',

    },
    {
        id: 3,
        name: 'Mango',
        description: 'lorem ipsum anaconda version hta jahgq',
        categoryId: Categories.Category_2,
        price: 270000,
        photo: 'https://picsum.photos/id/722/300/300',

    },
    {
        id: 4,
        name: 'Passion-fruit',
        categoryId: Categories.Category_2,
        price: 270000,
        photo: 'https://picsum.photos/id/294/300/300',

    },
]

const product = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {}

});

const { reducer, actions } = product;
export const {/* reducers */ } = actions;
export default reducer;