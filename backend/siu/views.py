from django.shortcuts import render
from re import S
from django.contrib.auth.models import User, Group
from rest_framework import viewsets, generics, filters, status
from rest_framework.response import Response

from siu.models import Carrera, CriterioAdmision, PuntajeCorte, SalarioMinimo, Puntaje
from siu.serializers import CriterioAdmisionSerializer, PuntajeCorteSerializer, SalarioMinimoSerializer, UserSerializer, CarreraSerializer, PuntajeSerializer

# from siu.serializers import {
#     CarreraSerializer,
#     PuntajeSerializer,
#     CriterioMatriculaSerializer,
#     AspiranteSerializer,
# }

from siu.models import Puntaje, CriterioMatricula, Aspirante, Carrera

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer

class CarreraViewSet(viewsets.ModelViewSet):

    queryset = Carrera.objects.all()
    serializer_class = CarreraSerializer

class CriterioAdmisionViewSet(viewsets.ModelViewSet):

    queryset = CriterioAdmision.objects.all()
    serializer_class = CriterioAdmisionSerializer

class SalarioMinimoViewSet(viewsets.ModelViewSet):

    queryset = SalarioMinimo.objects.all()
    serializer_class = SalarioMinimoSerializer

class PuntajeCorteViewSet(viewsets.ModelViewSet):

    queryset = PuntajeCorte.objects.all()
    serializer_class = PuntajeCorteSerializer

class PuntajeViewSet(viewsets.ModelViewSet):

    queryset = Puntaje.objects.all()
    serializer_class = PuntajeSerializer