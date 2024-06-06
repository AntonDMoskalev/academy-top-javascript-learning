from rest_framework.viewsets import ModelViewSet

from .serializers import RecipeSerializer
from ..models import Recipes


class RecipeViewSet(ModelViewSet):
    """
    API обработчик рецептов
    """
    serializer_class = RecipeSerializer
    queryset = Recipes.objects.all()
    ordering = ['id']
