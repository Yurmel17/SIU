# Generated by Django 4.0.3 on 2022-03-17 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siu', '0002_rename_procentaje_criterioadmision_procentajecn_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='puntajecorte',
            name='anio',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='puntajecorte',
            name='periodo',
            field=models.IntegerField(),
        ),
    ]