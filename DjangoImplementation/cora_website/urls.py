from django.urls import path

from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('stories/', views.stories, name="stories"),
    path('examples/', views.examples, name="examples"),
    path('docs/', views.docs, name="docs"),
]