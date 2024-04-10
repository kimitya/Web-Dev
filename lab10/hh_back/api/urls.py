from django.urls import path, re_path

from api.views import *

urlpatterns = [
    # path("companies/", companies_list),
    # path("companies/<int:id>", company_detail),
    # path("companies/<int:id>/vacancies/", company_vacancies),
    # path("vacancies/", vacancies_list),
    # path("vacancies/<int:id>/", vacancy_detail),
    # path("vacancies/top_ten/", vacancy_top_ten)

    path("companies/", CompanyListCreateAPIView.as_view()),
    path("companies/<int:id>", CompanyDetailAPIView.as_view()),
    path("companies/<int:id>/vacancies/", CompanyVacanciesAPIView.as_view()),
    path("vacancies/", VacancyListCreateAPIView.as_view()),
    path("vacancies/<int:id>/", VacancyDetailAPIView.as_view()),
    path("vacancies/top_ten/", VacancyTopTenAPIView.as_view())
]