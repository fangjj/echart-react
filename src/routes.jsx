import React from 'react';
import { Router, Route, Redirect, browserHistory  } from 'react-router';

import { App } from './components/App.jsx';
import { NotFound } from './components/NotFound.jsx';
import { WordCloudChart } from './components/WordCloudChart.jsx';

export const router = (
    <Router history={browserHistory}>
        <Redirect from="/" to="/echarts/word-cloud"/>
        <Route path="/" component={App}>
            <Route path="echarts">
                <Route path="word-cloud" component={WordCloudChart}/>
            </Route>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);