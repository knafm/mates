import * as React from 'react'
import {Link, Route, BrowserRouter} from "react-router-dom";
import FormHandler from "./routeHandlers/Form";
import TableHandler from "./routeHandlers/Table";

export default (
    <BrowserRouter>
        <div>
            <ul className="nav nav-tabs">
                <li><Link to="/">Форма</Link></li>
                <li><Link to="/table">Таблица</Link></li>
            </ul>

            <Route exact path="/" component={FormHandler}/>
            <Route path="/table" component={TableHandler}/>
            <Route path="/table" />

        </div>
    </BrowserRouter>
)