# Generated by Django 4.1.5 on 2023-01-30 14:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('siteCompany', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lead',
            old_name='utm_compaign',
            new_name='utm_campaign',
        ),
    ]