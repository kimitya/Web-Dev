from rest_framework import serializers
from api.models import *

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()


    def create(self, validated_data):
        instance = Company(name=validated_data.get('name'))
        instance.save()
        return instance

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer(read_only=True)

    def create(self, validated_data):
        instance = Vacancy(name=validated_data.get('name'))
        instance.save()
        return instance
