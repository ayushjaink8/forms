from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect


from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import send_mail
# Create your views here.

def index(request):
    return render(request, 'index.html')


def email(request):
    confsubject = "Application Form Submitted Successfully || Fill My Forms || Ayush Jain"
    confmsg     = 'Hi there!\n\nIt is to inform you that your form has been successfully submitted at fill my forms website on heroku.\nThank You for filling my form.\n\nIf you have any query, feel free to contact me via lcs2020014@iiitl.ac.in'+ '\n\nThis is an auto generated message!\nDo not reply to this e-mail\n'+ '\nThanks and Regards\nAyush Jain\nIIIT Lucknow'

    confto      = "lcs2020014@iiitl.ac.in"
    confres     = send_mail(confsubject, confmsg, settings.EMAIL_HOST_USER, [confto])

    return  HttpResponseRedirect('../')

