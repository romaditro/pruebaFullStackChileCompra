/*
*Encargado del state de toda la aplicacion completa.
*/
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';



const store = createStore(
    reducer, 
    compose(applyMiddleware(thunk),
    //codigo importante por si el navegador no tiene REDUX-DevTools instalado.
    typeof window === 'object' && 
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;
