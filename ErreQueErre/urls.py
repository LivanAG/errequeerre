
from django.contrib import admin
from django.urls import path,include


urlpatterns = [

    path('pedidos', include('Apps.Pedidos.urls')),
]
