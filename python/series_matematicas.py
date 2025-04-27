# -*- coding: utf-8 -*-

# Exemplo simples de cálculo de soma de uma série geométrica em Python

def soma_serie_geometrica(a, r, n):
    """
    Calcula a soma dos n primeiros termos de uma série geométrica.
    a: termo inicial
    r: razão
    n: número de termos
    """
    soma = a * (1 - r**n) / (1 - r) if r != 1 else a * n
    return soma

# Exemplo de uso
if __name__ == "__main__":
    a = 2
    r = 0.5
    n = 10
    resultado = soma_serie_geometrica(a, r, n)
    print(f"Soma dos {n} primeiros termos: {resultado:.4f}")
