import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
const Root = () => {
    return (
        <BrowserRouter>
            <Menu />
        </BrowserRouter>
    );
};
export default Root;
