from django.contrib import admin

from .models import Recipes


class RecipeAdmin(admin.ModelAdmin):
    """
    Админпанель для рецептов.
    """
    list_display = ('name', 'description')
    search_fields = ('name', 'description')
    list_filter = ('name', 'description')


admin.site.register(Recipes, RecipeAdmin)
