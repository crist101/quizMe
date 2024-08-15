from django.db import models
import datetime
# Create your models here.

class quizRecord(models.Model):
    grade = models.CharField(max_length = 155)
    datetoday = datetime.datetime.now()
    dateLogin = models.DateTimeField(default=datetoday)
    datetoday = datetoday.replace(year=datetoday.year+1)
    expirationDate = models.DateTimeField(default=datetoday)
    def __str__(self) -> str:
        return f"="