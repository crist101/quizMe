# Generated by Django 5.0.6 on 2024-08-18 09:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0007_alter_useraccount_dateaccomplished_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usertoken',
            name='registeredUser',
        ),
        migrations.DeleteModel(
            name='userAccount',
        ),
        migrations.DeleteModel(
            name='userToken',
        ),
    ]
