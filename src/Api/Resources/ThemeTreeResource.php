<?php

namespace Glomer7\Api\Resources;

use IO\Api\Resources\CategoryTreeResource;
use IO\Constants\CategoryType;
use IO\Services\CustomerService;
use IO\Services\SessionStorageService;
use Plenty\Plugin\Http\Response;
use Plenty\Plugin\Http\Request;
use IO\Api\ApiResponse;
use IO\Api\ResponseCode;
use Glomer7\Services\ThemeCategoryService;

/**
 * Class ThemeTreeResource
 */
class ThemeTreeResource extends CategoryTreeResource
{
    /**
     * @var ThemeCategoryService $categoryService Instance of the CategoryService.
     */
    protected $categoryService;

    /**
     * @var CustomerService $customerService Instance of the CustomerService.
     */
    protected $customerService;

    /**
     * @var SessionStorageService $sessionStorageService Instance of the SessionStorageService.
     */
    protected $sessionStorageService;

    /**
     * CategoryTreeResource constructor.
     * @param Request $request
     * @param ApiResponse $response
     * @param ThemeCategoryService $categoryService
     * @param CustomerService $customerService
     * @param SessionStorageService $sessionStorageService
     */
    public function __construct(
        Request $request,
        ApiResponse $response,
        ThemeCategoryService $categoryService,
        CustomerService $customerService,
        SessionStorageService $sessionStorageService
    ) {
        parent::__construct($request, $response, $categoryService, $customerService, $sessionStorageService);
        $this->categoryService = $categoryService;
        $this->customerService = $customerService;
        $this->sessionStorageService = $sessionStorageService;
    }

    /**
     * Get the category tree, beginning with a given categoryId.
     * @return Response
     */
    public function index(): Response
    {
        $type = $this->request->get('type', CategoryType::ALL);
        $categoryId = $this->request->get('categoryId', null);
        $depth = $this->request->get('depth', 1);
        $response = $this->categoryService->getPartialTreeWithDepth($categoryId, $type, $depth);

        return $this->response->create($response, ResponseCode::OK);
    }
}
