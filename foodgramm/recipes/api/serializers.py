from rest_framework import serializers

from recipes.models import Recipes


class RecipeSerializer(serializers.ModelSerializer):
    """
    Рецепт сериализатор.
    """
    class Meta:
        model = Recipes
        fields = ['id', 'name', 'description']
