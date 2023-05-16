<?php

namespace Glomer7\Providers;

use Plenty\Plugin\RouteServiceProvider;
use Plenty\Plugin\Routing\Router;

class ThemeRouteServiceProvider extends RouteServiceProvider
{
    public function map(Router $router)
    {
        $router->get('wd/categorysbc/{id}', 'Glomer7\Controllers\ThemeController@showShopBuilderContent');
    }
}