from django.db import models
import uuid

class Proveedor(models.Model):

    
    token = models.UUIDField(primary_key=True,editable=False,blank=True) 
    nombre = models.CharField(max_length=30, default='')
    correo = models.CharField(max_length=100, default='')
    Telefono = models.PositiveBigIntegerField(null=True,blank=True,default=0)
   


    def __str__(self):
        return  self.nombre 

    def save(self,*args,**kwargs):
        if self.pk is None:
            self.token = uuid.uuid4()
        super().save(*args,**kwargs)


class Articulo(models.Model):

    
    token = models.UUIDField(primary_key=True,editable=False,blank=True) 
    nombre = models.CharField(max_length=50, null=False,blank=False)
    proveedor=models.ForeignKey(Proveedor,on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

    def save(self,*args,**kwargs):
        if self.pk is None:
            self.token = uuid.uuid4()
        super().save(*args,**kwargs)

class Pedido(models.Model):


    created_at = models.DateTimeField(auto_now_add=True)
    token = models.UUIDField(primary_key=True,editable=False,blank=True)
   
    
    def __str__(self):
        return self.created_at

    def save(self,*args,**kwargs):
        if self.pk is None:
            self.token = uuid.uuid4()
        super().save(*args,**kwargs)

class Inventario_Pedido(models.Model):



    token = models.UUIDField(primary_key=True,editable=False,blank=True)
    pedido=models.ForeignKey(Pedido,on_delete=models.CASCADE)
    
    def __str__(self):
        return self.token

    def save(self,*args,**kwargs):
        if self.pk is None:
            self.token = uuid.uuid4()
        super().save(*args,**kwargs)


class Pack(models.Model):

    
    token = models.UUIDField(primary_key=True,editable=False,blank=True) 
    articulo=models.ForeignKey(Articulo,on_delete=models.CASCADE)
    Cantidad_de_ejemplares = models.PositiveBigIntegerField(null=True,blank=True,default=0)
    Inventario =  models.ForeignKey(Inventario_Pedido,on_delete=models.CASCADE)


    def __str__(self):
        return  "Inventario " + self.Inventario.nombre +": "+ self.articulo.nombre + " " + str(self.Cantidad_de_ejemplares)  + " unidades "
    


    def save(self,*args,**kwargs):
        if self.pk is None:
            self.token = uuid.uuid4()
        super().save(*args,**kwargs)

