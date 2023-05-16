<?php
namespace Arche7\Providers;

use Plenty\Modules\Webshop\ItemSearch\Helpers\ResultFieldTemplate;
use Plenty\Modules\Webshop\Template\Providers\TemplateServiceProvider;
use Plenty\Modules\ContentCache\Contracts\ContentCacheQueryParamsRepositoryContract;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\Templates\Twig;
use Plenty\Plugin\ConfigRepository;
use IO\Helper\ComponentContainer;
use Arche7\Middlewares\ThemeMiddleware;

/**
 * Class ThemeServiceProvider
 * @package Arche7\Providers
 */
class ThemeServiceProvider extends TemplateServiceProvider
{
    const PRIORITY = 0;

    public function register()
    {
        $this->getApplication()->register(ThemeRouteServiceProvider::class);
        $this->addGlobalMiddleware(ThemeMiddleware::class);
    }

    public function boot(Twig $twig, Dispatcher $dispatcher, ConfigRepository $config)
    {
        $this->overrideTemplate('Ceres::Category.Macros.CategoryTree', 'Arche7::Category.Macros.CategoryTree');
        $this->overrideTemplate('Ceres::PageDesign.PageDesign', 'Arche7::PageDesign.PageDesign');
        $this->overrideTemplate('Ceres::PageDesign.Partials.Footer', 'Arche7::PageDesign.Partials.Footer');
        $this->overrideTemplate('Ceres::PageDesign.Partials.Head', 'Arche7::PageDesign.Partials.Head');
        $this->overrideTemplate('Ceres::Widgets.Category.ItemGridWidget', 'Arche7::Widgets.Category.ItemGridWidget');
        $this->overrideTemplate('Ceres::Widgets.Common.ItemListWidget', 'Arche7::Widgets.Common.ItemListWidget');
        $this->overrideTemplate('Ceres::Widgets.Header.TopBarWidget', 'Arche7::Widgets.Header.TopBarWidget');
        $this->overrideTemplate('Ceres::Widgets.Item.ItemImageWidget', 'Arche7::Widgets.Item.ItemImageWidget');

//        $dispatcher->listen("IO.Resources.Import", function(ResourceContainer $container)
//        {
//            $container->addScriptTemplate('Arche7::ItemList.Components.CategoryItem');
//        },0);

        $dispatcher->listen('IO.Component.Import', function (ComponentContainer $container)
        {
            if ($container->getOriginComponentTemplate()=='Ceres::Customer.Components.UserLoginHandler')
            {
                $container->setNewComponentTemplate('Arche7::Customer.Components.UserLoginHandler');
            }
        }, self::PRIORITY);

        /** @var ResultFieldTemplate $resultFieldTemplate */
        $resultFieldTemplate = pluginApp(ResultFieldTemplate::class);
        $resultFieldTemplate->setTemplates([
            ResultFieldTemplate::TEMPLATE_CATEGORY_TREE   => 'Arche7::ResultFields.CategoryTree'
        ]);

        /** @var ContentCacheQueryParamsRepositoryContract $contentCacheQueryParamsRepository */
        $contentCacheQueryParamsRepository = pluginApp(ContentCacheQueryParamsRepositoryContract::class);
        $contentCacheQueryParamsRepository->registerExcluded([
            'gclid',
            'dclid',
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_term',
            'utm_content',
            'wbraid',
            'fbclid',

            'vmtrack_id',
            'vmst_id',
            'idealoid',
            'li_fat_id',
            'msclkid',
        ]);
    }
}