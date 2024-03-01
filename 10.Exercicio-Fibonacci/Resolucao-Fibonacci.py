"""Exercício Python #063 - Sequência de Fibonacci v1.0

Gustavo Guanabara = https://www.youtube.com/watch?v=w7yn1_Mfu0E

0 1 1 2 3 5 8

"""

print('-'*30)
print('Sequência de Fibonacci')
print('-'*30)
n = int(input('Quantos termos você quer mostrar?'))

t1 = 0
t2 = 1

print('~'*30)
print('{} -> {}'.format(t1, t2), end='')

t3 = t1 + t2

print(' -> {}'.format(t3), end='')
