from forms.models import profile
from rest_framework import viewsets, permissions
from .seriallizers import FormSerializer      # getting data from seriallizers.py

# Form viewsets
class FormViewSets(viewsets.ModelViewSet):
    queryset = profile.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = FormSerializer