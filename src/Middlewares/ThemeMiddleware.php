<?php

namespace Arche7\Middlewares;

use IO\Api\Resources\CategoryTreeResource;
use IO\Services\CategoryService;
use Plenty\Plugin\Application;
use Plenty\Plugin\Http\Request;
use Plenty\Plugin\Http\Response;
use Plenty\Plugin\Middleware;
use Arche7\Api\Resources\ThemeTreeResource;
use Arche7\Services\ThemeCategoryService;

class ThemeMiddleware extends Middleware
{
    public $includeRestRoutes = false;

    public function __construct()
    {
        $this->includeRestRoutes = true;
    }

    public function before(Request $request)
    {
        /** @var Application $app */
        $app = pluginApp(Application::class);
        $app->singleton(CategoryService::class, ThemeCategoryService::class);
        $app->bind(CategoryTreeResource::class, ThemeTreeResource::class);
    }

    public function after(Request $request, Response $response): Response
    {
        return $response;
    }
}
