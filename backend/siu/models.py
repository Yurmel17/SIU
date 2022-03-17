from operator import mod
from django.db import models

class Puntaje(models.Model):
    puntajeCN = models.IntegerField()
    puntajeLC = models.IntegerField()
    puntajeMA = models.IntegerField()
    puntajeSC = models.IntegerField()
    puntajeIN = models.IntegerField()

class CriterioMatricula(models.Model):
    tipoColegio = models.BooleanField()
    valorPension = models.IntegerField()
    anioGrado = models.IntegerField()
    estrato = models.IntegerField()
    ingresosAnuales = models.IntegerField()

class Aspirante(models.Model):
    fecha_consulta = models.DateField()
    puntaje_id = models.ForeignKey(Puntaje, on_delete=models.CASCADE)
    criterio_matricula_id = models.ForeignKey(CriterioMatricula, on_delete=models.CASCADE)

class Carrera(models.Model):
    nombreCarrera = models.CharField(max_length=90)

class PuntajeCorte(models.Model):
    carrera_id = models.ForeignKey(Carrera, on_delete=models.CASCADE)
    puntajeMinimo = models.FloatField()
    anio = models.IntegerField()
    periodo = models.IntegerField()

class CriterioAdmision(models.Model):
    carrera_id = models.ForeignKey(Carrera, on_delete=models.CASCADE)
    procentajeCN = models.FloatField()    
    procentajeLC = models.FloatField()
    procentajeMA = models.FloatField()
    procentajeSC = models.FloatField()
    procentajeIN = models.FloatField()

class PuntajePonderado(models.Model):
    puntaje_id = models.ForeignKey(Puntaje, on_delete=models.CASCADE)
    puntajePond = models.FloatField()

class SalarioMinimo(models.Model):
    anio = models.IntegerField(primary_key=True)
    valor = models.FloatField()

