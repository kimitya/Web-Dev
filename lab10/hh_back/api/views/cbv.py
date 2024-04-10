from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from api.serializers import *


class CompanyListCreateAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class CompanyDetailAPIView(APIView):
    def get_object(self, id):
        try:
            company = Company.objects.get(id=id)
            return company
        except Company.DoesNotExist as e:
            return Response({"error": str(e)})

    def get(self, request, id):
        company = self.get_object(id)

        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, id):
        company = self.get_object(id)

        serializer = CompanySerializer(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({"deleted": True})

class CompanyVacanciesAPIView(APIView):
    def get(self,request,id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({'error': str(e)})
        serializer = VacancySerializer(company.vacancies.all(), many=True)
        return Response(serializer.data)

class VacancyListCreateAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailAPIView(APIView):
    def get_object(self, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
            return vacancy
        except Company.DoesNotExist as e:
            return Response({"error": str(e)})

    def get(self, request, id):
        vacancy = self.get_object(id)

        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        vacancy = self.get_object(id)

        serializer = VacancySerializer(
            instance=vacancy,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({"deleted": True})

class VacancyTopTenAPIView(APIView):
    def get(self, request):
        top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_ten_vacancies, many=True)
        return Response(serializer.data)

