import "./style.css";

import some from './some.js';

some();
if (module.hot) {
    module.hot.accept();
}