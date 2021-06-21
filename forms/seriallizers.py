from rest_framework import serializers
from forms.models import profile

# Form Serializer

class FormSerializer(serializers.ModelSerializer):
  class Meta:
    model = profile
    fields = '__all__'      # adding all models in the fields


# sending this data to api.py for viewsets