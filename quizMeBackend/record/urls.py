from django.urls import path,re_path
from . import views
urlpatterns = [
    path('',views.index,name="index"),
    path('/getRecord',views.record,name="record"),
    path('/requestForm/<slug:accessKey>',views.requestAccessKey,name="record")
]