from dataclasses import field, fields
from pyexpat import model
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from siu import models

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]

class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Carrera
        fields = "__all__"

class PuntajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Puntaje
        fields = "__all__"

class CriterioMatriculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CriterioMatricula
        fields = "__all__"

class AspiranteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Aspirante
        fields = "__all__"

class CriterioAdmisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CriterioAdmision
        fields = "__all__"

class SalarioMinimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SalarioMinimo
        fields = "__all__"

class PuntajeCorteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PuntajeCorte
        fields = "__all__"

class PuntajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Puntaje
        fields = "__all__"