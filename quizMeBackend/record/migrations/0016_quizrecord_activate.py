# Generated by Django 5.0.6 on 2024-08-19 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('record', '0015_rename_questionaire_quizrecord_questionnaire'),
    ]

    operations = [
        migrations.AddField(
            model_name='quizrecord',
            name='activate',
            field=models.BooleanField(default=False),
        ),
    ]
