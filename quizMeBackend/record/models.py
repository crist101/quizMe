from django.db import models
import datetime
from django.contrib.auth.models import User
import random,datetime
def generatedCode():
    return '%64x' % random.getrandbits(16*16)
# Create your models here.

datetoday = datetime.datetime.now()
datetoday = datetoday.replace(year=datetoday.year+1)
class userToken(models.Model):
    token = models.CharField(unique=True,max_length=155,default=generatedCode())
    registeredUser = models.ForeignKey(User,related_name="registereduser",on_delete=models.DO_NOTHING)
    dateLogin = models.DateTimeField(default=datetoday)
    expirationDate = models.DateTimeField(default=datetoday)
    def __str__(self) -> str:
        return f"{self.token} | {self.registeredUser}"
genderChoices = (
    ("Male","Male"),
    ("Female","Female")
    )

class userAccount(models.Model):
    registeredUser = models.ForeignKey(User,related_name="userAccount",on_delete=models.DO_NOTHING)
    birthdate = models.DateField(null=True)
    gender = models.CharField(choices=genderChoices,max_length=155)
    address = models.TextField()
    organization = models.CharField(max_length=150)
    ogganizationAddress = models.TextField()
    dateAccomplished = models.DateTimeField(default=datetime.datetime.now)
    
    
    def __str__(self) -> str:
        return f"{self.registeredUser}"

class quizRecord(models.Model):
    accessKey = models.CharField(max_length=10)
    title = models.CharField(max_length=155)
    subject = models.CharField(max_length = 155)
    yearAndSection = models.CharField(max_length = 155)
    questionaire = models.JSONField()
    answer = models.JSONField()
    totalItem = models.IntegerField()
    dateCreated = datetime.datetime.now
    expirationDate = models.DateTimeField(default=datetime.datetime.now)
    uniqueKey = models.CharField(max_length=125)
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
    dateTaken = models.DateTimeField(datetime.datetime.now)
    
    def __str__(self) -> str:
        return f"{self.record.title} | {self.lastName}, {self.givenName} | {self.score}/{self.record.totalItem}"

