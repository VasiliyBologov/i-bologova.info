import logging

from django.shortcuts import render

# Create your views here.


def main():
    pass

def gallery():
    pass


def maintenance(request):
    return render(request, 'maintenance.html', {})

def page_not_found(request, exception):

    logging.warning(f'page not found wtf? {str(request.get_full_path())} and ip {ip}')
    return render(request, '404.html', {})
