from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('api/companies/', views.CompanyList.as_view()),
    path('api/companies/<int:pk>/', views.CompanyDetail.as_view()),
    path('api/companies/<int:id>/vacancies/', views.CompanyVacancies.as_view()),
    path('api/vacancies/', views.VacancyList.as_view()),
    path('api/vacancies/<int:pk>/', views.VacancyDetail.as_view()),
    path('api/vacancies/top_ten/', views.TopTenVacancies.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
