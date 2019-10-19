import React from 'react';
import {shallow} from 'enzyme';
import Navbar from '../Navbar.jsx';


const s = (props={})=>{
    const comp = shallow (<Navbar {...props}/>);
    return comp; 
};

const find=(nav,e)=>{
    const code = nav.find(e);
    return code;
}

describe('Componente navbar',()=>{

    let nav;
    beforeEach(()=>{
        nav = s();
    })

    it ('Should render',()=>{
        const code = find(nav,'.navbar')
        expect(code.length).toBe(1);
    });
    it ('Should render carrito',()=>{
        const code = find(nav,'.shopping-car')
        expect(code.length).toBe(1);
    });
    it ('Should render logo',()=>{
        const code = find(nav,'.logo')
        expect(code.length).toBe(1);
    });
    it ('Should render carrito',()=>{
        const code = find(nav,'.shopping-car')
        expect(code.length).toBe(1);
    });
    it('Should has SignInPage', () => {
        const code = find(nav,'SignInPage')
        expect (code).toBeTruthy()              
    });     
})