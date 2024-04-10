from django.shortcuts import render

# Create your views here.

import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# from api.models import *
from api.serializers import *
from api.models import *


# CRUD => create / read / update / delete

@csrf_exempt
def companies_list(request):
    if request.method == "GET":
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        # categories_json = [category.to_json() for category in categories]
        # return JsonResponse(categories_json, safe=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == "GET":
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.description = data.get('description', company.description)
        company.city = data.get('city', company.city)
        company.address=data.get('address', company.address)
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})


@csrf_exempt
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    vacancies_json = [v.to_json() for v in company.vacancies.all()]
    return JsonResponse(vacancies_json, safe=False)


@csrf_exempt
def vacancies_list(request):
    if request.method == "GET":
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        # categories_json = [category.to_json() for category in categories]
        # return JsonResponse(categories_json, safe=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@csrf_exempt
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    elif request.method == "PUT":
        data = json.loads(request.body)
        vacancy.name = data.get('name', vacancy.name)
        vacancy.description = data.get('description', vacancy.description)
        vacancy.salary = data.get('salary', vacancy.salary)
        vacancy.company = data.get('company', vacancy.company)
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == "DELETE":
        vacancy.delete()
        return JsonResponse({"deleted": True})


@csrf_exempt
def vacancy_top_ten(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(top_ten_vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
