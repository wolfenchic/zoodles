from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

# Create your views here.
def get_home_page(request):
  return render(request, 'index.html')
  
def get_about_page(request):
  return render(request, 'about.html')

