# Generated by Django 4.1.5 on 2023-02-10 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteCompany', '0003_lead_city'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='city',
            field=models.CharField(max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='utm_campaign',
            field=models.CharField(max_length=150, null=True),
        ),
    ]
