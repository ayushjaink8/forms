from forms.models import profile       # importing models from models.py can use "import forms.models" to import all models
from rest_framework import viewsets, permissions, status
from .seriallizers import FormSerializer      # getting data from seriallizers.py (fields of FormSerializers)
from django.http import HttpResponse, HttpResponseRedirect,response

from django.contrib.auth.models import User
from rest_framework.decorators import action
from rest_framework.response import Response




from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import send_mail

from forms import seriallizers

def send_email(email_id):
    subject = "Application Form Submitted Successfully || Fill My Forms || Ayush Jain"
    msg     = 'Hi there!\n\nIt is to inform you that your form has been successfully submitted at fill my forms website on heroku.\nThank You for filling my form.\n\nIf you have any query, feel free to contact me via lcs2020014@iiitl.ac.in'+ '\n\nThis is an auto generated message!\nDo not reply to this e-mail\n'+ '\nThanks and Regards\nAyush Jain\nIIIT Lucknow'

    to      = email_id
    confres     = send_mail(subject, msg, settings.EMAIL_HOST_USER, [to])

    return  HttpResponseRedirect('../')



# Form viewsets
class FormViewSets(viewsets.ModelViewSet):
    queryset = profile.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = FormSerializer

    # print(queryset)
    # print("dfdskjbfds+d sdfg km\n\n\n\n\n j kjkjdsf d hajsh fh jkfhs ")
    # print(serializer_class)
    # print("dfdskjbfds+d sdfg km\n\n\n\n\n j kjkjdsf d hajsh fh jkfhs ")
    # print(FormSerializer)

    # @action(detail=True, methods=['post'])
    # def sendEmail(self, request):
    #     user = self.get_object()
    #     serializer = FormSerializer(data=request.data)
    #     email = serializer.validated_data['email']
    #     send_email(email)
    #     print("\n\nEmail:",email,"\n\n")
    #     print("\n\nEmail:",seriallizer,"\n\n")
    #     return Response({'status': 'Email Send'})



    # def create(self, request, *args, **kwargs):
    #     send_email(profile.email)
    #     response = super(FormViewSets,self).create(request, *args, **kwargs)
    #     return response

    # def create(self, request, *args, **kwargs):
    #     response = super(FormViewSets,self).create(request, *args, **kwargs)
    #     instance = response.data
    #     send_email(profile.email)
    #     return response({'status': 'success', 'pk': instance['pk']})

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     return response({'status': 'success', 'pk': serializer.instance.pk})


# this will automatically store data in the database without explicitly calling by views!
# now i just have to receive data from front-end