from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, UserViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'users', UserViewSet, basename='user')
urlpatterns = router.urls
