<?php
namespace Glomer7\Providers;

use Plenty\Modules\Webshop\ItemSearch\Helpers\ResultFieldTemplate;
use Plenty\Modules\Webshop\Template\Providers\TemplateServiceProvider;
use Plenty\Modules\ContentCache\Contracts\ContentCacheQueryParamsRepositoryContract;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\Templates\Twig;
use Plenty\Plugin\ConfigRepository;
use IO\Helper\ComponentContainer;
use Glomer7\Middlewares\ThemeMiddleware;

/**
 * Class ThemeServiceProvider
 * @package Glomer7\Providers
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
        $this->overrideTemplate('Ceres::Category.Macros.CategoryTree', 'Glomer7::Category.Macros.CategoryTree');
        $this->overrideTemplate('Ceres::PageDesign.PageDesign', 'Glomer7::PageDesign.PageDesign');
        $this->overrideTemplate('Ceres::PageDesign.Partials.Footer', 'Glomer7::PageDesign.Partials.Footer');
        $this->overrideTemplate('Ceres::PageDesign.Partials.Head', 'Glomer7::PageDesign.Partials.Head');
        $this->overrideTemplate('Ceres::Widgets.Category.ItemGridWidget', 'Glomer7::Widgets.Category.ItemGridWidget');
        $this->overrideTemplate('Ceres::Widgets.Common.ItemListWidget', 'Glomer7::Widgets.Common.ItemListWidget');
        $this->overrideTemplate('Ceres::Widgets.Header.TopBarWidget', 'Glomer7::Widgets.Header.TopBarWidget');
        $this->overrideTemplate('Ceres::Widgets.Item.ItemImageWidget', 'Glomer7::Widgets.Item.ItemImageWidget');

//        $dispatcher->listen("IO.Resources.Import", function(ResourceContainer $container)
//        {
//            $container->addScriptTemplate('Glomer7::ItemList.Components.CategoryItem');
//        },0);

        $dispatcher->listen('IO.Component.Import', function (ComponentContainer $container)
        {
            if ($container->getOriginComponentTemplate()=='Ceres::Customer.Components.UserLoginHandler')
            {
                $container->setNewComponentTemplate('Glomer7::Customer.Components.UserLoginHandler');
            }
        }, self::PRIORITY);

        /** @var ResultFieldTemplate $resultFieldTemplate */
        $resultFieldTemplate = pluginApp(ResultFieldTemplate::class);
        $resultFieldTemplate->setTemplates([
            ResultFieldTemplate::TEMPLATE_CATEGORY_TREE   => 'Glomer7::ResultFields.CategoryTree'
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