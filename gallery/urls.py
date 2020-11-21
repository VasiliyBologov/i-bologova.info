from django.urls import path
from . import views
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$', views.maintenance, name='maintenance'),


]

handler404 = "gallery.views.page_not_found"


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
