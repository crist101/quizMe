from django.db import models
import datetime
from django.contrib.auth.models import User
import random,datetime
# Create your models here.


class quizRecord(models.Model):
    accessKey = models.CharField(max_length=10,unique=True)
    title = models.CharField(max_length=155)
    subject = models.CharField(max_length = 155)
    yearAndSection = models.CharField(max_length = 155)
    questionnaire = models.JSONField()
    multipleChoice = models.IntegerField(default=0)
    trueOrFalse = models.IntegerField(default=0)
    totalItem = models.IntegerField(default=0)
    dateCreated = models.DateTimeField(default=datetime.datetime.now)
    online = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.title} | {self.subject} | {self.yearAndSection}"

class quizStudentData(models.Model):
    record = models.ForeignKey(quizRecord, related_name="studentRecprd", on_delete=models.CASCADE)
    lrn = models.CharField(max_length=25,blank=True,null=True)
    lastName = models.CharField(max_length=155)
    givenName = models.CharField(max_length=155)
    middleName = models.CharField(max_length=155)
    answer = models.JSONField()
    score = models.IntegerField()
    dateTaken = models.DateTimeField(default=datetime.datetime.now)
    
    def __str__(self) -> str:
        return f"{self.record.title} | {self.lastName}, {self.givenName} | {self.score}/{self.record.totalItem}"

