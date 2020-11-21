import logging

from django.shortcuts import render
from django.contrib.auth.decorators import login_required

MAINTENANCE_MOD = True

def maintenance(the_func):
    """
    Make another a function more beautiful.
    """
    def _decorated(*args, **kwargs):
        if MAINTENANCE_MOD:
            print('MAINTENANCE MOD ON')
            return render(*args, 'maintenance.html', {})
        else:
            return the_func(*args, **kwargs)
    return _decorated


# @login_required(login_url='/login/')
@maintenance
def main(request):
    return render(request, 'main.html', {})



@maintenance
def gallery():
    pass



def page_not_found(request, exception):

    logging.warning(f'page not found wtf? {str(request.get_full_path())} and ip {ip}')
    return render(request, '404.html', {})


