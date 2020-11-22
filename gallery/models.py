from datetime import datetime

from django.db import models

# Create your models here.


class Picture(models.Model):

    picture_name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)
    photo = models.ImageField(
        upload_to='PICTURE/',
        verbose_name=u'Picture Photo',
        help_text='150x150px',
        default='media/pICTURE/no-photo-available.png')
    for_sale = models.BooleanField()
    sold = models.BooleanField()

    def __str__(self):
        return self.picture_name

class Event(models.Model):

    title = models.CharField(max_length=200)
    date = models.DateField()
    description = models.CharField(max_length=550)

    def __str__(self):
        return self.title + ' ' + str(self.date)
