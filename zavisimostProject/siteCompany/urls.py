from django.urls import path, include
from .views import index, thsPage

urlpatterns = [
    path('', index,name='index'),
    path('tu_page/', thsPage, name='ths')
]
