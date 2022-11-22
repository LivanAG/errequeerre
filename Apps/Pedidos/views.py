from django.shortcuts import render
import re
from struct import pack
from sys import flags
from telnetlib import PRAGMA_HEARTBEAT
from django.shortcuts import render
from django import forms
from datetime import date
from django.views.generic import TemplateView,FormView,ListView,CreateView,DeleteView,DetailView
from .models import *
from .forms import *
from django.http import JsonResponse
from django.views.decorators.csrf  import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import HttpResponseRedirect
from django.urls  import reverse_lazy
from django.shortcuts import render,redirect
import json
from django.contrib.auth.mixins import LoginRequiredMixin
from datetime import datetime



 
class ListarPedidos (TemplateView):

    template_name= 'Pedidos/base.html'

   