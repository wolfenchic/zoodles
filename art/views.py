from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

# Create your views here.
def get_name_page(request):
  return render(request, 'art/name.html')