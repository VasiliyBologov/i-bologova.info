from django.contrib.sitemaps import Sitemap
# from .models import RequestModel
# import ClientPortal.settings as set

class StaticViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.8


    def items(self):
        # return RequestModel.objects.all()
        return ['/', '/gallery']

    def location(self, obj):
        # return obj.date
        return obj
