from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacancies(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.filter(company=self.kwargs['id'])

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacancies(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer
