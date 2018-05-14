from django.db import models
from django import forms
from .choices import ART_CATEGORY_CHOICES

# Create your models here.
class Art(models.Model):
    name = models.CharField(max_length=254, default='')
    art_category = models.IntegerField(choices=ART_CATEGORY_CHOICES, default=1)
    description = models.TextField()
    image = models.ImageField(upload_to='images')
    
    def __str__(self):
        return self.name