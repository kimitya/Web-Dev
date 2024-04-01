from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}"

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category_id': self.category_id.id
        }

    def __str__(self):
        return f"ID: {self.id}, Name: {self.name}, Price: {self.price}"

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
