# Generated by Django 4.1.5 on 2023-01-30 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lead',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('phone', models.CharField(max_length=25)),
                ('date', models.DateField(auto_now=True)),
                ('utm_compaign', models.CharField(max_length=150)),
            ],
        ),
    ]