# Generated by Django 5.0.6 on 2024-08-18 03:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0005_alter_useraccount_dateaccomplished_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='dateAccomplished',
            field=models.DateTimeField(default=datetime.datetime(2024, 8, 18, 11, 46, 10, 132893)),
        ),
        migrations.AlterField(
            model_name='usertoken',
            name='dateLogin',
            field=models.DateTimeField(default=datetime.datetime(2025, 8, 18, 11, 46, 10, 132893)),
        ),
        migrations.AlterField(
            model_name='usertoken',
            name='expirationDate',
            field=models.DateTimeField(default=datetime.datetime(2025, 8, 18, 11, 46, 10, 132893)),
        ),
        migrations.AlterField(
            model_name='usertoken',
            name='token',
            field=models.CharField(default='b6b08c27862677dab0594f56253a2ec3cfb9edd09eafa2c9e7344008aabc0593', max_length=155, unique=True),
        ),
    ]
