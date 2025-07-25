from django.db import models
from django.contrib.auth.models import User


class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    
from django.db import models
from django.contrib.auth.models import User

class Tag(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class JobApplication(models.Model):
    STATUS_CHOICES = [
        ('APPLIED', 'Applied'),
        ('INTERVIEW', 'Interview'),
        ('OFFER', 'Offer'),
        ('REJECTED', 'Rejected'),
    ]
    tags = models.ManyToManyField(Tag, blank=True)
    resume = models.FileField(upload_to='resumes/', blank=True, null=True)
    company = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='APPLIED')
    location = models.CharField(max_length=100, blank=True, null=True)
    date_applied = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} at {self.company} ({self.status})"

class Note(models.Model):
    job = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='notes')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Note for {self.job.title} at {self.job.company} - {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}"