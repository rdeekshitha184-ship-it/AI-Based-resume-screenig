from django.db import models

# Create your models here.
from django.db import models

class JobRole(models.Model):
    title = models.CharField(max_length=100)
    skills = models.TextField()  # comma separated skills

    def __str__(self):
        return self.title