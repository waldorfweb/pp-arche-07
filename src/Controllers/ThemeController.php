<?php

namespace Glomer7\Controllers;

use IO\Controllers\LayoutController;
use Plenty\Modules\Category\Models\Category;
use Plenty\Plugin\Templates\Twig;

class ThemeController extends LayoutController
{
    /**
     * returns the shopbuilder content for the given category id
     *
     * @param $id
     * @param Twig $twig
     * @return string
     */
    public function showShopBuilderContent($id, Twig $twig)
    {
        $result = '';
        $id = intval($id);
        if ($id > 0) {
            $category = $this->categoryRepo->get($id);
            if ($category->type === Category::TYPE_CONTENT || $category->type === Category::TYPE_ITEM) {
                $type = 'content';
                if ($category->type === Category::TYPE_ITEM) {
                    $type = 'categoryitem';
                }
                $result = $twig->renderString(
                    "{{ shop_builder_category_template(categoryId, type) }}",
                    [
                        'categoryId' => $id,
                        'type' => $type
                    ]
                );
            }
        }
        return $result;
    }
}