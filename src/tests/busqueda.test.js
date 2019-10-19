import React from 'react';
import { shallow, mount } from 'enzyme';
import Busqueda from '../listadoProductos/Busqueda'

const wrapped = (props = {}) => {
    const component = shallow(<Busqueda />);
    return component;
}
const find = (b, e) => {
    const code = b.find(e);
    return code;
}

describe('Componente busqueda', () => {

    let b;
    beforeEach(() => {
        b = wrapped();
    })
    it('Should render', () => {
        const code = find(b, '.search')
        expect(code.length).toBe(1);
    });
    it('Should render', () => {
        const code = find(b, '.search-input')
        expect(code.length).toBe(1);
    });

    it("Calls toggleForecast on click", () => {
        const wrapper = mount(
            <Busqueda />
        );

        wrapper
            .find(".search-button")
            .simulate("click");

    });
    it('Should has SignInPage', () => {
        const code = find(b,'custom-select')
        expect (code).toBeTruthy()              
    });
    it('Should has SignInPage', () => {
        const code = find(b,'filtros')
        expect (code).toBeTruthy()              
    });

})