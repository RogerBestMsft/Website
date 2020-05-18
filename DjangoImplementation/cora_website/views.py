from django.shortcuts import render
from django.http import HttpResponse
from cora_website.models import Story

def homepage(request):
    return render(request, 'homepage.html', {})

def examples(request):
    return render(request, 'examples.html', {})

def docs(request):
    return render(request, 'doc.html', {})

def stories(request):
    return render(request, 'stories.html', {})