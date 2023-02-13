from django.shortcuts import render, redirect
from django.http.response import HttpResponse
from .models import Lead
import requests

def index(request):
    if request.method == 'POST':
        try:
            Lead.objects.create(
                name=request.POST['name'],
                phone=request.POST['phone'],
                utm_campaign=request.POST['utm_campaign'],
                city=request.POST['city'],
            )
            data = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name","ошибка")}\nТелефон: {request.POST.get("phone","ошибка")}\nГород:{request.POST.get("city","Город не определен")}'
            dataVlad = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name","ошибка")}\nТелефон: {request.POST.get("phone","ошибка")}\nutm_campaign: {request.POST.get("utm_campaign","ошибка")}\nГород: {request.POST.get("city","Город не определен")}'
            r = requests.get(f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=428552889&text={dataVlad}')
            r = requests.get(f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=5901410161&text={data}')
            return redirect('ths')
        except Exception as e:
            dataVlad = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name","ошибка")}\nТелефон: {request.POST.get("phone","ошибка")}\nutm_campaign: {request.POST.get("utm_campaign","ошибка")}\nГород: {request.POST.get("city","Город не определен")}'
            data = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name", "ошибка")}\nТелефон: {request.POST.get("phone", "ошибка")}\nГород: {request.POST.get("city","Город не определен")}'
            req = requests.get(
                f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=428552889&text={dataVlad}')
            error = f'На сайте алкашей произошла ошибка!\n{e}'
            r = requests.get(
                f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=272635960&text={error}')
            return redirect('ths')
    cityData = {
        '/' : {'footer':'Ростов-на-Дону, ул. Тракторная улица, 48Г',
               'city': 'Ростов-на-Дону',
               'license': ['license/rnd/1.jpg','license/rnd/2.jpg','license/rnd/3.jpg']},

        '/krasnodar/': {'footer':'Адрес: г. Краснодар, ул. Базовская, д. 69',
                       'city':'Краснодар',
                        'license': ['license/krd/1.jpg','license/krd/2.jpg']},

        '/nizhnij-novogorod/': {'footer':'Нижегородская область, г. Кулебаки, ул. Свободы, д.6а',
                               'city':'Нижний новгород',
                                'license': ['license/nn/1.jpg','license/nn/2.jpg']},

        '/volgograd/': {'footer': 'г. Волгоград, ул. Козловская, д.4',
                       'city':'Волгоград',
                        'license': ['license/volgograd/1.jpg', 'license/volgograd/2.jpg', 'license/volgograd/3.jpg']},

        '/perm/': {'footer': 'Пермский край, г. Пермь, ул. Газеты Звезда, д. 75',
                        'city': 'Пермь',
                        'license': ['license/perm/1.jpg', 'license/perm/2.jpg', 'license/perm/3.jpg']}
    }
    return render(request, 'siteCompany/index/index.html', {'utm_campaign':request.GET.get('utm_campaign',' '), 'cityData':cityData.get(request.path,' ')})


def thsPage(request):
    return render(request, 'siteCompany/index/ths.html')

def privacy(request):
    return render(request, 'siteCompany/index/privacy.html')
