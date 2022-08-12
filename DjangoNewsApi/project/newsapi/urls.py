

from django.urls import path

from . import views

urlpatterns = [
    path('top_headlines', views.top_headlines),
    path('author/<int:author_id>', views.author_details)
]