from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'name/$', get_name_page, name="name"),
    ]