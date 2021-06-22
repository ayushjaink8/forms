from rest_framework import routers
from .api import FormViewSets

router = routers.DefaultRouter()
router.register('api/forms', FormViewSets, 'forms')

urlpatterns = router.urls          # so that all the router links of react becomes valid urls