from django.shortcuts import render
from django.http import JsonResponse

from .models import Article, Publisher

# Create your views here.

#  TODO - find way to return child data (authors data) with articles
def top_headlines(request):
    articles = list(Article.objects.all().values())

    return JsonResponse(articles, safe=False)

def author_details(request, author_id):
    author = list(Publisher.objects.filter(id=author_id).values())

    return JsonResponse(author, safe=False)