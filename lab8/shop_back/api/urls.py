from django.urls import path, re_path

from api.views import *

urlpatterns = [
    path("categories/", get_categories),
    path("categories/<int:category_id>", get_category),
    path("products/", get_products),
    path("products/<int:product_id>", get_product),
    path("categories/<int:category_id>/products/", get_category_products)
]
