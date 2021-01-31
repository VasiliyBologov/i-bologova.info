from django.urls import path
from . import views
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from gallery.sitemap import StaticViewSitemap


sitemaps = {
    'static': StaticViewSitemap
}


urlpatterns = [
    url(r'^$', views.main, name='main'),
    url(r'^gallery/$', views.gallery, name='gallery'),
    url(r'^sitemap.xml$', sitemap, {'sitemaps': sitemaps}),

]

handler404 = "gallery.views.page_not_found"


if not settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
