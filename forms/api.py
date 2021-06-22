from forms.models import profile       # importing models from models.py can use "import forms.models" to import all models
from rest_framework import viewsets, permissions
from .seriallizers import FormSerializer      # getting data from seriallizers.py (fields of FormSerializers)

# Form viewsets
class FormViewSets(viewsets.ModelViewSet):
    queryset = profile.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = FormSerializer


# this will automatically store data in the database without explicitly calling by views!
# now i just have to receive data from front-end