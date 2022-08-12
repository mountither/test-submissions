from django.db import models

# Create your models here.

class Publisher(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    date_pub = models.DateTimeField()
    img_url = models.CharField(max_length=1000)
    author  = models.ForeignKey(
        Publisher, on_delete=models.SET_NULL,
        null=True,
        related_name="author_article"
    )