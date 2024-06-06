from django.urls import path, include

from rest_framework import routers

from .api.rest_views import RecipeViewSet

router = routers.DefaultRouter()

router.register('recipe', RecipeViewSet, basename='recipe')

urlpatterns = [
    path('', include(router.urls)),
]
