from django.contrib import admin
from django.urls import path
from .views import *
app_name = "Pedidos"
urlpatterns = [
    
    #Lista Pedidos
    path('',ListarPedidos.as_view(),name='lista_pedidos'),
    
]
