from rest_framework import serializers
from forms.models import profile                # importing profile class from models

# Form Serializer

class FormSerializer(serializers.ModelSerializer):
  class Meta:
    model = profile
    fields = '__all__'      # adding all models in the fields of (FormSerializers)
    extra_kwargs = {
      'sendEmail': {
        'read_only': True,
        'default': False,
      }
    }


# sending this data to api.py for viewsets