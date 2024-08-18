from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,Http404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from .models import userToken,generatedCode,userAccount
import socket

#
def home(request):
    return render(request,"index.html")

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


class profile:
    @csrf_exempt
    def authenticateUser(request):
        count = False
        if request.method == "POST":
            try:
                userToken.objects.get(token = request.POST["q"])
                count = True
            except:
                count = False
            return JsonResponse([count],safe=False)
        return Http404
    
    @csrf_exempt
    def login(request):
        if request.method == "POST":
            user = authenticate(request, username = request.POST["username"], password= request.POST["password"])
            if user is not None:
                try:
                    setToken = generatedCode()
                    userToken.objects.create(token=setToken,registeredUser = user)
                    return JsonResponse({"message":True,"user":setToken},safe=False)
                except:
                    return JsonResponse({"message":False},safe=False)    
            return JsonResponse({"message":False},safe=False)
        else:
            return JsonResponse(["Request Failed"],safe=False)
        
    @csrf_exempt
    def profile(request):
        if request.method == "POST":
            try:
                profileData = userToken.objects.get(token = request.POST["token"])
                verifiedAccount = False
                testAccount = 0
                try:
                    testAccount = userAccount.objects.get(registeredUser = profileData.registeredUser)
                    verifiedAccount = True
                except:
                    pass 
                x = {
                    "email":profileData.registeredUser.email,
                    "username":profileData.registeredUser.username,
                    "verified":verifiedAccount,
                    "tester":profileData.id
                }
                return JsonResponse({"message":True,"profile":x},safe=False)
            except:
                return JsonResponse({"message":False},safe=False)
        return JsonResponse({"message":False},safe=False)
        