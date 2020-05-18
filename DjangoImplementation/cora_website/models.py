from django.db import models

class Story(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    author = models.CharField(max_length=100, default="Anonymous")
    image = models.FilePathField(path="/img")
