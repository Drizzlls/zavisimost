from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=25)
    date = models.DateField(auto_now=True)
    utm_campaign = models.CharField(max_length=150)

