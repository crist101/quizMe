from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,Http404,HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
import socket
from .models import quizRecord
import json,datetime

#
def home(request):
    if request.method == "POST":
        try:
            item_dict = json.loads(request.POST["question"])
            checkAccessKey = request.POST["setAccessKey"]
            list = {
                "accessKey":request.POST["accessKey"],
                "title":request.POST["title"],
                "subject":request.POST["subject"],
                "yearAndSection":request.POST["yearSection"],
                "questionnaire":item_dict,
                "dateCreated":datetime.datetime.now(),
                "multipleChoice":len(item_dict[0]["question"]),
                "trueOrFalse":len(item_dict[1]["question"]),
                "total": int(len(item_dict[1]["question"])+int(len(item_dict[0]["question"])))
                }
            try:
                getquizRecord = quizRecord.objects.get(accessKey = checkAccessKey)
                getquizRecord.title = list["title"]
                getquizRecord.subject = list["subject"]
                getquizRecord.yearAndSection = list["yearAndSection"]
                getquizRecord.questionnaire = list["questionnaire"]
                getquizRecord.multipleChoice = list["multipleChoice"]
                getquizRecord.trueOrFalse = list["trueOrFalse"]
                getquizRecord.totalItem = list["total"]
                getquizRecord.save()
                return HttpResponseRedirect('/admin/record/quizrecord/')
            except:
                pass
            try:
                quizRecord.objects.create(accessKey = list["accessKey"], title = list["title"], subject= list["subject"], yearAndSection = list["yearAndSection"], questionnaire = list["questionnaire"], multipleChoice = list["multipleChoice"], trueOrFalse = list["trueOrFalse"], totalItem = list["total"], dateCreated = list["dateCreated"])
                return HttpResponseRedirect('/admin/record/quizrecord/')
            except:
                pass
            return JsonResponse(["Error"],safe=False)
        except:
            return JsonResponse(["Error"],safe=False)
    q = ""
    try:
        q = request.GET["q"]
    except:
        q = ""
    return render(request,"index.html",{"q":q})

def startActivity(request,accessKey):
    return render(request,"activity.html",{"q":accessKey})


def requestAccessKey(request,accessKey):
    if request.method == "POST":
        record = []
        try:
            data = quizRecord.objects.get(accessKey = accessKey)
            record = [
            {
                "accessKey":data.accessKey,
                "title":data.title,
                "subject":data.subject,
                "yearAndSection":data.yearAndSection,
                "multipleChoice":data.questionnaire[0],
                "trueOrFalse":data.questionnaire[1],
            }
        ]
        except:
            record = []
        return JsonResponse(record,safe=False)
        
    return JsonResponse([False],safe=False)

# Create your views here.
def index(request):
    return JsonResponse([socket.gethostbyname(socket.gethostname())],safe=False)

@csrf_exempt
def record(request):
    return JsonResponse(
        [
            {
                "type":"multipleChoice",
                "no":1,
                "question":"What type of relationship is defined as one resource existing only if another parent resource exist-for example, pages in a book?",
                "choices":{
                    "a":"Partial",
                    "b":"Dependent",
                    "c":"Associative",
                    "d":"Linked"
                },
                "answerKey": "b",
                "answer": "Dependent",
                "uniqueKey":625463453453432
            },{
                "type":"multipleChoice",
                "no":2,
                "question":"What is the underlying goal of all APIs",
                "choices":{
                    "a":"To add new technologies to an organization's infrastructure.",
                    "b":"To share features and functionality with other system.",
                    "c":"To move infrastructure to the cloud.",
                    "d":"To appease the latest digital transformation effort."
                },
                "answerKey": "b",
                "answer": "To share features and functionality with other system.",
                "uniqueKey":53453454646454
            },{
                "type":"multipleChoice",
                "no":3,
                "question":"Which is a common command-line tool for using or exploring an API",
                "choices":{
                    "a":"Bash",
                    "b":"Curl",
                    "c":"Ssh",
                    "d":"PowerShell"
                },
                "answerKey": "b",
                "answer": "Curl",
                "uniqueKey":234653454
            },{
                "type":"multipleChoice",
                "no":4,
                "question":"Which HTTP verb is normally used to update or create a resource in an API?",
                "choices":{
                    "a":"SUBMIT",
                    "b":"WRITE",
                    "c":"POST",
                    "d":"CREATE"
                },
                "answerKey": "c",
                "answer": "POST",
                "uniqueKey":543712343242
            },{
                "type":"multipleChoice",
                "no":4,
                "question":"What is OpenID Connect",
                "choices":{
                    "a":"An identify layer on top of OAuth 2.0",
                    "b":"The new name for SAML 3.0",
                    "c":"A modern replacement for API keys",
                    "d":"An SSO competitor for OAuth 2.0"
                },
                "answerKey": "a",
                "answer": "An identify layer on top of OAuth 2.0",
                "uniqueKey":653626435347245
            },{
                "type":"multipleChoice",
                "no":5,
                "question":"Which REST constraint specifies that there should be no shared context?",
                "choices":{
                    "a":"Stateless",
                    "b":"Client-Server",
                    "c":"Uniform Interface",
                    "d":"Cacheable"
                },
                "answerKey": "a",
                "answer": "Stateless",
                "uniqueKey":623463451275234
            }
        ],safe=False
    )

