import random




def imprimirLista(lista):
    print("Lista: ",lista)












listaNumeros=[]
cantidadVecesLlenadoLista = random.randint(3,9)

for i in range(0,cantidadVecesLlenadoLista,1):
    listaNumeros.append(random.randint(0,100))


print("Longitud: ",len(listaNumeros))
imprimirLista(listaNumeros)

for pos1 in range(0,len(listaNumeros),1):
    for pos2 in range(pos1+1,len(listaNumeros),1):
        if listaNumeros[pos1] < listaNumeros[pos2]:
            aux = listaNumeros[pos1]
            listaNumeros[pos1] = listaNumeros[pos2]
            listaNumeros[pos2] = aux



imprimirLista(listaNumeros)	
#En Python se puede simplemente usar la función listaNumeros.sort()
