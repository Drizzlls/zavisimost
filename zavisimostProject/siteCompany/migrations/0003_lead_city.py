# Generated by Django 4.1.5 on 2023-02-10 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteCompany', '0002_rename_utm_compaign_lead_utm_campaign'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='city',
            field=models.CharField(default='', max_length=150),
            preserve_default=False,
        ),
    ]
