from django.urls import path,re_path
from . import views
urlpatterns = [
    path('',views.index,name="index"),
    path('getRecord',views.record,name="record"),
    path('login',views.profile.login,name="login"),
    path('profile',views.profile.profile,name="profile"),
    path('authenticate',views.profile.authenticateUser,name="authenticateUser"),
]