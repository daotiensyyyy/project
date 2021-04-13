import { createSlice } from "@reduxjs/toolkit";

const randomIndex = Math.trunc(Math.random() * 1000);

const initialProducts = [
    {
        id: 1,
        name: 'Black bubble milktea',
        description: 'lorem ipsum anaconda version hta jahgq',
        categoryId: 1,
        price: 240000,
        photo: 'https://picsum.photos/id/532/300/300',

    },
    {
        id: 2,
        name: 'Crunch bubble milktea',
        description: 'lorem ipsum anaconda version hta jahgq',
        categoryId: 1,
        price: 240000,
        photo: 'https://picsum.photos/id/43/300/300',

    },
    {
        id: 3,
        name: 'Mango',
        description: 'lorem ipsum anaconda version hta jahgq',
        categoryId: 2,
        price: 270000,
        photo: 'https://picsum.photos/id/722/300/300',

    },
    {
        id: 4,
        name: 'Passion-fruit',
        categoryId: 2,
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