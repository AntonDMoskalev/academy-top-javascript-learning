from django.db import models


class Recipes(models.Model):
    """
    Модель рецептов.
    """
    name = models.CharField("Наименование рецепта", max_length=200)
    description = models.TextField("Описание рецепта", null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = "Рецепты"
