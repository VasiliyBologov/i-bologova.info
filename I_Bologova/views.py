from django.http import HttpResponse
from django.views.decorators.http import require_GET




@require_GET
def robots_txt(request):
    lines = [
        "User-Agent: *",
        "Allow: /",
        "Disallow: /login/",
        "Disallow: /profile/",
        "Disallow: /table/",
        "Disallow: /contact/",
        "Disallow: / *.pdf$",
        "Disallow: /*.csv$",
    ]
    return HttpResponse("\n".join(lines), content_type="text/plain")
