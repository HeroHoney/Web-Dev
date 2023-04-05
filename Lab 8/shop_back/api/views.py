from django.shortcuts import render
import json
from django.http.response import HttpResponse, JsonResponse
from datetime import datetime, timedelta

from api.models import Category, Product


def home(request):
    return HttpResponse('home page')

products = [] 
for product in Product.objects.all(): 
    products.append(product.to_json())

categories = [] 
for category in Category.objects.all(): 
    categories.append(category.to_json())

def product_list(request):
    return JsonResponse(products,safe=False,json_dumps_params={'indent':2})

def product_detail(request,product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product,safe=False,json_dumps_params={'indent':2})
    return JsonResponse({'error':'Product not found'})


def category_list(request):
    return JsonResponse(categories,safe=False,json_dumps_params={'indent':2})

def category_detail(request,category_id):
    for category in categories:
        if category['id'] == category_id:
            return JsonResponse(category,safe=False,json_dumps_params={'indent':2})
    return JsonResponse({'error':'Category not found'})

def products_Of_Category(request,category_id):
    category = Category.objects.get(pk=category_id)
    matching_products = []
    for product in products:
      if(product['category']==category.name):
        matching_products.append(product)
    if len(matching_products) > 0:
        return JsonResponse(matching_products, safe=False, json_dumps_params={'indent':2})
    else:
        return JsonResponse({'error': 'Products not found'})
    
