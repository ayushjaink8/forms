from django.db import models

# Create your models here.

class profile(models.Model):
    # app_no = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    gender = models.CharField(max_length=20,blank=True)
    phone = models.CharField(max_length=20)
    dob = models.CharField(max_length=200)