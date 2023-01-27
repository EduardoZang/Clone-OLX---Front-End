import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import Home from './Pages/Home';
import About from './Pages/About';
import SignIn from './Pages/SignIn';
import MyAccount from './Pages/MyAccount';
import SignUp from './Pages/SignUp';
import AdPage from './Pages/AdPage';
import AddAd from './Pages/AddAd';
import Ads from './Pages/Ads';
import EditAds from './Pages/EditAds';
import NotFound from './Pages/NotFound';

export default () => {
     return( 
        <Switch>
             
            <RouteHandler exact path="/"><Home/>
            </RouteHandler>

            <RouteHandler path="/about"><About />
            </RouteHandler>

            <RouteHandler path="/signin"><SignIn/>
            </RouteHandler>

            <RouteHandler path="/my-account"><MyAccount/>
            </RouteHandler>

            <RouteHandler path="/signup"><SignUp />
            </RouteHandler>

            <RouteHandler  path="/ad/:id"><AdPage />
            </RouteHandler>

            <RouteHandler private path="/post-an-ad"><AddAd />
            </RouteHandler>

            <RouteHandler  path="/ads"><Ads />
            </RouteHandler>

            <RouteHandler  path="/edit-ads/:id"><EditAds />
            </RouteHandler>

            <RouteHandler path = "*"><NotFound />
            </RouteHandler>

        </Switch>
        );
     }