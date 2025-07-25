from rest_framework import serializers
from .models import JobApplication, Note, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
        read_only_fields = ['id']
    
    def validate(self, data):
        if not data.get('name'):
            raise serializers.ValidationError("Tag name cannot be empty.")
        return data
    
class JobApplicationSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)  # Read full tag info
    tag_ids = serializers.PrimaryKeyRelatedField(
        source='tags',
        queryset=Tag.objects.all(),
        many=True,
        write_only=True
    )

    class Meta:
        model = JobApplication
        fields = [
            'id', 'user', 'company', 'title', 'status',
            'location', 'date_applied', 'resume',
            'tags',      
            'tag_ids'    
        ]

    def validate(self, data):
        status = data.get('status')
        if status and status not in dict(JobApplication.STATUS_CHOICES):
            raise serializers.ValidationError("Invalid status choice.")
        return data

    
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
        read_only_fields = ['created_at']

    def validate(self, data):
            if not data.get('content'):
                raise serializers.ValidationError("Content cannot be empty.")
            return data
        
