# Generated by Django 4.2.7 on 2024-08-28 09:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0017_rename_activate_quizrecord_online'),
    ]

    operations = [
        migrations.AddField(
            model_name='quizstudentdata',
            name='studentAccessKey',
            field=models.CharField(max_length=155, null=True),
        ),
        migrations.AlterField(
            model_name='quizstudentdata',
            name='dateTaken',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
