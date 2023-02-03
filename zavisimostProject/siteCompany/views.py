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
                utm_campaign=request.POST['utm_campaign']
            )
            data = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name","ошибка")}\nТелефон: {request.POST.get("phone","ошибка")}'
            dataVlad = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name","ошибка")}\nТелефон: {request.POST.get("phone","ошибка")}\nutm_campaign={request.POST.get("utm_campaign","ошибка")}'
            r = requests.get(f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=428552889&text={dataVlad}')
            r = requests.get(f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=5901410161&text={data}')
            return redirect('ths')
        except Exception as e:
            dataVlad = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name","ошибка")}\nТелефон: {request.POST.get("phone","ошибка")}\nutm_campaign: {request.POST.get("utm_campaign","ошибка")}'
            data = f'Пришел новый лид с сайта!\nИмя: {request.POST.get("name", "ошибка")}\nТелефон: {request.POST.get("phone", "ошибка")}'
            req = requests.get(
                f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=428552889&text={dataVlad}')
            error = f'На сайте алкашей произошла ошибка!\n{e}'
            r = requests.get(
                f'https://api.telegram.org/bot5997431556:AAHstK-PgpAGwp31A4xJirfO4QWRNatGDmk/sendMessage?chat_id=272635960&text={error}')
            return redirect('ths')
    return render(request, 'siteCompany/index/index.html',{'utm_campaign':request.GET.get('utm_campaign',' ')})

def thsPage(request):
    return render(request, 'siteCompany/index/ths.html')

def privacy(request):
    return render(request, 'siteCompany/index/privacy.html')
