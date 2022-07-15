from forms.models import profile       # importing models from models.py can use "import forms.models" to import all models
from rest_framework import viewsets, permissions
from .seriallizers import FormSerializer      # getting data from seriallizers.py (fields of FormSerializers)



from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import send_mail



# Form viewsets
class FormViewSets(viewsets.ModelViewSet):
    queryset = profile.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = FormSerializer

    def perform_create(self, serializer):
        checkmail = self.request.data.get('sendEmail', False)
        email_id = self.request.data.get('email', None)   # read data from request
        if(checkmail and email_id):
            try:
                subject = "Feedback Form Submitted Successfully || Ayush Jain"
                msg     = ('Hi there!\n\nIt is to inform you that your form has been successfully submitted at fill my forms website on heroku.') + (
                    '\nThank You for your valuable feedback.\n\nIf you have any query, feel free to contact me via lcs2020014@iiitl.ac.in') + (
                    '\n\nThis is an auto generated message!\nDo not reply to this e-mail\n'+ '\nThanks and Regards\nAyush Jain\nIIIT Lucknow')
                to      = email_id
                send_mail(subject, msg, settings.EMAIL_HOST_USER, [to])
            except: pass
        serializer.save()
