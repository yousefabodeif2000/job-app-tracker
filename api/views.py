from django.shortcuts import render
from rest_framework import viewsets
from .models import JobApplication, Note, Tag
from .serializer import JobApplicationSerializer, NoteSerializer, TagSerializer


# Create your views here.

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


