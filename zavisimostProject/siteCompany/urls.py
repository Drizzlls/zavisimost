from django.urls import path, include
from .views import index, thsPage, privacy

urlpatterns = [
    path('', index,name='index'),
    path('tu_page/', thsPage, name='ths'),
    path('privacy-policy/', privacy, name='privacy')
]
