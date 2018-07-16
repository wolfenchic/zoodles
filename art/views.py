from django.shortcuts import render, get_object_or_404, redirect, reverse, HttpResponse
from .models import Art
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

# Create your views here.
def get_name_page(request):
    art = Art.objects.filter(art_category = 1)
    return render(request, 'art/name.html', {'art': art})
    
def get_dictionary_page(request):
    art = Art.objects.filter(art_category = 2)
    quote = Art.objects.filter(art_category = 3)
    return render(request, 'art/dictionary.html', {'art': art, 'quote': quote})