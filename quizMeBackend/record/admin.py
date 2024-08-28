from django.contrib import admin
from .models import quizRecord,quizStudentData
from django.utils.html import format_html
# Register your models here.

@admin.register(quizRecord)
class quizRecordAdmin(admin.ModelAdmin):
    model = quizRecord
    list_display = ["accessKey","title","subject","yearAndSection","multipleChoice","trueOrFalse","totalItem","dateCreated","online","editForm","control"]
    
    search_fields = ["accessKey","title","subject","yearAndSection",]
    list_filter = ["online"]

    def editForm(self,obj):
        return format_html(f"<a href='../../../?q={obj.accessKey}' target='{obj.accessKey}'>Edit form</a>")
    
    def control(self,obj):
        return format_html(f"""<a href='../../../../form/control/startExam/{obj.accessKey}' target='{obj.accessKey}'>Start exam</a>
                           <hr><a href='../../../../form/output/{obj.accessKey}' target='{obj.accessKey}'>View report</a>""")
    
@admin.register(quizStudentData)
class quizStudentDataAdmin(admin.ModelAdmin):
    model = quizStudentData
    list_display = ["lrn","lastName","givenName","middleName","score","dateTaken"]
    search_fields = ["lrn","lastName","givenName","middleName"]