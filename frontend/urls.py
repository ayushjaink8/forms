import forms
from django.contrib import admin
from django.urls import path, include
from . import views
import frontend
from forms import views as view2     #  linking (backend) forms with the frontend app


urlpatterns = [
    path('', views.index),
    # path('submission_form/', view2.submission_form)
    path('email', views.email)
]