from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobApplicationViewSet, NoteViewSet, TagViewSet

router = DefaultRouter()
router.register(r'job-applications', JobApplicationViewSet)
router.register(r'notes', NoteViewSet)
router.register(r'tags', TagViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
