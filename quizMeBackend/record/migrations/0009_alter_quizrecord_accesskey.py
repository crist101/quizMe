# Generated by Django 5.0.6 on 2024-08-18 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0008_remove_usertoken_registereduser_delete_useraccount_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quizrecord',
            name='accessKey',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
