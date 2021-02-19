from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from . import views

urlpatterns = [
    path("signup/", views.SingupView.as_view(), name="signup"),
    path("token/",  TokenObtainPairView.as_view(), name='token_obtain'),
    path("token/refresh", TokenRefreshView.as_view(), name='token_refresh'),
    path("token/verify", TokenVerifyView.as_view(), name='token_verify'),

    path("suggestions/",
         views.SuggestionListAPIView.as_view(),
         name="suggestion_user_list",
         ),
    path("follow/", views.user_follow, name="user_follow"),
    path("unfollow/", views.user_unfollow, name="user_unfollow"),

]
