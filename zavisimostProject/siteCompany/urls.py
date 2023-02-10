from django.urls import path, include
from .views import index, thsPage, privacy

urlpatterns = [
    path('', index,name='index'),
    path('krasnodar/', index,name='krd'),
    path('nizhnij-novogorod/', index,name='nn'),
    path('volgograd/', index,name='volgograd'),
    path('tu_page/', thsPage, name='ths'),
    path('privacy-policy/', privacy, name='privacy')
]
