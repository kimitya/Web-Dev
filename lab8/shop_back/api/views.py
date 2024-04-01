from itertools import product

from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse

from api.models import Category, Product


def get_categories(request):
    categories=Category.objects.all()
    categories_json=[category.to_json()for category in categories]
    return JsonResponse(categories_json, safe=False)

def get_category(request, category_id=None):
    try:
        category=Category.objects.get(id=category_id)
        return JsonResponse(category.to_json(), safe=False)
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })

def get_products(request):
    products=Product.objects.all()
    products_json=[product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def get_product(request, product_id):
    try:
        product=Product.objects.get(id=product_id)
        return JsonResponse(product.to_json(), safe=False)
    except Category.DoesNotExist as e:
        return JsonResponse({
            'error': str(e)
        })

def get_category_products(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    products = Product.objects.filter(category_id=category_id)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)
